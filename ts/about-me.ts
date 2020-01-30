interface AboutMe {
    name: string
    email: string
    telVisible: string
    aboutMe: string,
    pageTitle: string | null | undefined
}

class PersonalDataUpdater {
    data: AboutMe;

    constructor(data: AboutMe) {
        this.data = data;
    }

    public update() {
        this.updateName();
        this.updateMail();
        this.updateTel();
        this.updateAboutMe();
        this.updatePageTitle();
    }

    private updateName() {
        PersonalDataUpdater.getAndUpdate("name", this.data.name);
    }

    private updateMail() {
        PersonalDataUpdater.getAndUpdate("email", this.data.email);
    }

    private updateTel() {
        PersonalDataUpdater.getAndUpdate("tel", this.data.telVisible);

        let contacts: any = document.getElementsByClassName("real-tel");
        for (let contact of contacts) {
            contact.href = "tel:" + this.data.telVisible
                .replace(new RegExp(' ', 'g'), "")
                .replace("+", "")
                .replace("-", "");
        }
    }

    private updateAboutMe() {
        PersonalDataUpdater.getAndUpdate("about-me", this.data.aboutMe);
    }

    private updatePageTitle() {
        if (this.data.pageTitle) {
            document.title = this.data.pageTitle;
        }
    }

    private static getAndUpdate(what: string, to: string) {
        let all: any = document.getElementsByClassName(what);

        for (let single of all) {
            single.innerHTML = to;
        }
    }
}

let handler = new XMLHttpReqHandler("about.json", makeProjects);

function makeProjects(str: string) {
    let personalData: AboutMe = JSON.parse(str);
    let aux = new PersonalDataUpdater(personalData);

    aux.update();
    slideDOM();
}