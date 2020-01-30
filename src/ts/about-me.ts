import { XMLHttpReqHandler } from "./file-handler";
import { slideDOM } from "./slide";

export interface AboutMe {
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

    private static getAndUpdate(what: string, to: string) {
        let all: HTMLCollectionOf<Element> = document.getElementsByClassName(what);

        for (let i = 0; i < all.length; i++) {
            let single: Element = all.item(i);
            single.innerHTML = to;

            // TODO: Remove this hack and place it somewhere better
            if (what === "email") {
                (<HTMLAnchorElement><any>single.parentElement).href = "mailto:"+to;
            }else if (what === "tel") {
                (<HTMLAnchorElement><any>single.parentElement).href = "tel:"+to;
            }
        }
    }
}

new XMLHttpReqHandler("about.json", makeAbout);

function makeAbout(str: string) {
    let personalData: AboutMe = JSON.parse(str);
    let aux = new PersonalDataUpdater(personalData);

    aux.update();
    slideDOM();
}