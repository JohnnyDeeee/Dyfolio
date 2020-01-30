interface JobDescription {
    title: string;
    timeframe: string;
    place: string;
    description: string;
}

class Job {
    desc: JobDescription;

    constructor(desc: JobDescription) {
        this.desc = desc;
    }

    public generate() {
        let outerDiv = document.createElement("div");
        let innerDiv = document.createElement("div");

        outerDiv.classList.add("single-job");
        innerDiv.appendChild(this.createTitle());
        innerDiv.appendChild(this.createTimeframe());
        innerDiv.appendChild(this.createParagraph());
        outerDiv.appendChild(innerDiv);

        return outerDiv;
    }

    private createTitle() {
        return Job.createCustom("h3", this.desc.title);
    }

    private createTimeframe() {
        return Job.createCustom("h4",
            this.desc.timeframe + "<br>" + this.desc.place);
    }

    private createParagraph() {
        return Job.createCustom("p", this.desc.description);
    }

    private static createCustom(tag: string, inner: string) {
        let item = document.createElement(tag);
        item.innerHTML = inner;
        return item;
    }
}

class Jobs {
    jobs: Job[];

    constructor() {
        this.jobs = [];
    }

    public add(job: Job) {
        this.jobs.push(job);
    }

    public generate() {
        let div = document.createElement("div");
        div.classList.add("timeline");

        for (let job of this.jobs) {
            div.appendChild(job.generate());
        }

        return div;
    }
}

let handler = new XMLHttpReqHandler("jobs.json", makeJobs);

function makeJobs(str: string) {
    let jobs: JobDescription[] = JSON.parse(str);
    let timeline = document.getElementById("job-timeline");
    let auxTimeline = new Jobs();
    for (let job of jobs) {
        auxTimeline.add(new Job(job));
    }

    timeline.appendChild(auxTimeline.generate());
    slideDOM();
}
