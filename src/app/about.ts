import "../stylesheets/about";
import * as $ from "jquery";
import { PostsService } from "./services/Posts";

$( "title" ).prepend( "About: " );
const postsApi = new PostsService();

postsApi
  .getPosts()
  .subscribe( ( value: any ) => console.log( value ) );
