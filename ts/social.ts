let getSourceFromService = {
    "github": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-github.svg",
    "linkedin": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-linkedin.svg",
    "facebook": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-facebook.svg"
};

interface Social {
    link: string;
    title: string;
    service: string;
}

class SingleSocial {
    social: Social;

    public constructor(social: Social) {
        this.social = social;
    }

    public generate() {
        let a = document.createElement("a");

        a.href = this.social.link;
        a.appendChild(this.generateSocialCell());

        return a;
    }

    private generateSocialCell() {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");

        div.classList.add("social-cell", "slide-left");
        img.src = getSourceFromService[this.social.service];
        span.innerText = this.social.title;

        div.appendChild(img);
        div.appendChild(span);
        return div;
    }
}

class Nav {
    cells: Social[];

    public constructor() {
        this.cells = [];
    }

    public addSocial(social: Social) {
        this.cells.push(social);
    }

    generate() {
        let nav = document.createElement("nav");
        nav.classList.add("social-grid");

        for (let singleCell of this.cells) {
            let newCell: SingleSocial = new SingleSocial(singleCell);
            nav.appendChild(newCell.generate());
        }

        return nav;
    }
}

let newNav: Nav = new Nav();

newNav.addSocial({
    link: "https://github.com/fiffeek",
    title: "@fiffeek",
    service: "github"
});
newNav.addSocial({
    link: "https://www.linkedin.com/in/filipmikina/",
    title: "@filipmikina",
    service: "linkedin"
});
newNav.addSocial({
    link: "https://www.facebook.com/fiffeek",
    title: "@fiffeek",
    service: "facebook"
});

let body = document.getElementsByTagName("body");

for (let single of body) {
        single.appendChild(newNav.generate());
}