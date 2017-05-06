import "../stylesheets/style";
import "../stylesheets/about";
import * as $ from "jquery";
import { PostsService } from "./services/Posts";
import { ActiveMenu } from "./shared";
const currentPage = "about";

$( "title" ).prepend( "About: " );
const postsApi = new PostsService();
const activeMenu = new ActiveMenu();
activeMenu.activeClass = currentPage;

postsApi
  .getPosts()
  .subscribe( ( value: any ) => console.log( value ) );
