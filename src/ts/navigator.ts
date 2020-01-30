import { XMLHttpReqHandler } from "./file-handler";
import { AboutMe } from "./about-me";

new XMLHttpReqHandler("about.json", setTitle);

function setTitle(str: string) {
    let personalData: AboutMe = JSON.parse(str);
    document.title = personalData.pageTitle;
}

export function navigateTo(str: string) {
    window.location.href = str + '.html';
}