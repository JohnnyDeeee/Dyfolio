import { MenuItem } from "./menu";

class IndexMenu {
  items: MenuItem[];

  constructor() {
      this.items = [];
  }

  public addItem(fileLink: string, label: string) {
      this.items.push(new MenuItem(fileLink, label));
  }

  public copyItem(item: MenuItem) {
      this.items.push(item);
  }

  public generate() {
      let nav = document.createElement("nav");
      nav.classList.add("index-menu", "center-text", "borderline", "slide-top");

      for (let item of this.items) {
          nav.appendChild(item.generate());
      }

      return nav;
  }
}

let navigation: HTMLElement = document.getElementById("index-menu");
let menu: IndexMenu = new IndexMenu();

menu.addItem("about", "About me");
menu.addItem("experience", "Experience");
menu.addItem("projects", "projects");

navigation.prepend(menu.generate());