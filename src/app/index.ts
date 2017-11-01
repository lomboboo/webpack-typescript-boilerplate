import "../stylesheets/common";
import "../stylesheets/index";
import * as _ from "lodash";
import { ActiveMenu } from "./shared";
import { TitleService } from "./services";
const currentPage = "index";

const activeMenu = new ActiveMenu();
activeMenu.activeClass = currentPage;
TitleService.title = "Home";

const ENV = process.env.NODE_ENV;
console.log( `ENVIRONMENT: ${ENV}` );
