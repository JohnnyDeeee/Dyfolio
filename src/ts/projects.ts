import { XMLHttpReqHandler } from "./file-handler";
import { safeLoad } from "js-yaml";
import { slideDOM } from "./slide";

interface ProjectDesc {
    title: string;
    imgUrl: string;
    date: string;
    description: string;
}

class Project {
    desc: ProjectDesc;

    constructor(desc: ProjectDesc) {
        this.desc = desc;
    }

    public generate() {
        let project = document.createElement("div");
        let innerDiv = document.createElement("div");

        project.classList.add("single-project");
        innerDiv.classList.add("project");

        innerDiv.appendChild(this.generateImg());
        innerDiv.appendChild(this.generateDesc());
        project.appendChild(innerDiv);

        return project;
    }

    private generateImg() {
		let a = document.createElement("a");
		a.href = this.desc.imgUrl;
		a.target = "_blank";
		
        let img = document.createElement("img");
        img.classList.add("img-container");
        img.src = this.desc.imgUrl;

		a.appendChild(img);

        return a;
    }

    private generateDesc() {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
		let h4 = document.createElement("h4");
        let p = document.createElement("p");

		div.classList.add("text");
        h3.innerHTML = this.desc.title;
		h4.innerHTML = this.desc.date;
        p.innerHTML = this.desc.description;

        div.appendChild(h3);
		div.appendChild(h4);
        div.appendChild(p);

        return div;
    }
}

class Projects {
    projects: Project[];

    constructor() {
        this.projects = [];
    }

    public add(project: Project) {
        this.projects.push(project);
    }

    public generate() {
        let div = document.createElement("div");

        this.projects.forEach((value) => {
            div.appendChild(value.generate());
        });

        return div;
    }
}

new XMLHttpReqHandler("projects.yaml", makeProjects);
//new XMLHttpReqHandler("projects.json", makeProjects);

function makeProjects(str: string) {
    //let projects: ProjectDesc[] = JSON.parse(str);
    let projects: ProjectDesc[] = safeLoad(str);
	
    let dom = document.getElementById("projects-timeline");
    let aux = new Projects();

    projects.forEach((value) => {
        aux.add(new Project(value));
    });

    dom.appendChild(aux.generate());
    slideDOM();
}