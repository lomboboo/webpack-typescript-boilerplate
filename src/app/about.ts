import "../stylesheets/common";
import "../stylesheets/about";
import { TitleService } from "./services";
import { ActiveMenu } from "./shared";
const currentPage = "about";

const activeMenu = new ActiveMenu();

TitleService.title = "About";
activeMenu.activeClass = currentPage;
