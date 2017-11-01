import { expect } from "chai";
import { ActiveMenu } from "./menu";

describe( "Support", () => {
  describe( "Hello", () => {

    const Menu = new ActiveMenu();

    it( "should return active class: test", () => {
      Menu.activeClass = "test";
      expect( Menu.activeClass ).to.equal( "test" );
    } )

  } );
} );
