var getSourceFromService = {
    "github": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-github.svg",
    "linkedin": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-linkedin.svg",
    "facebook": "assets/icons/nucleo-social-icons/nucleo-social-icons/svg/social-1_round-facebook.svg"
};
var SingleSocial = /** @class */ (function () {
    function SingleSocial(social) {
        this.social = social;
    }
    SingleSocial.prototype.generate = function () {
        var a = document.createElement("a");
        a.href = this.social.link;
        a.appendChild(this.generateSocialCell());
        return a;
    };
    SingleSocial.prototype.generateSocialCell = function () {
        var div = document.createElement("div");
        var img = document.createElement("img");
        var span = document.createElement("span");
        div.classList.add("social-cell", "slide-left");
        img.src = getSourceFromService[this.social.service];
        span.innerText = this.social.title;
        div.appendChild(img);
        div.appendChild(span);
        return div;
    };
    return SingleSocial;
}());
var Nav = /** @class */ (function () {
    function Nav() {
        this.cells = [];
    }
    Nav.prototype.addSocial = function (social) {
        this.cells.push(social);
    };
    Nav.prototype.generate = function () {
        var nav = document.createElement("nav");
        nav.classList.add("social-grid");
        for (var _i = 0, _a = this.cells; _i < _a.length; _i++) {
            var singleCell = _a[_i];
            var newCell = new SingleSocial(singleCell);
            nav.appendChild(newCell.generate());
        }
        return nav;
    };
    return Nav;
}());
var newNav = new Nav();
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
var body = document.getElementsByTagName("body");
for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
    var single = body_1[_i];
    single.appendChild(newNav.generate());
}
