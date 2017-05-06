import { expect } from "chai";
import { HelloClass } from "./support";
import * as moment from "moment";

describe( "Support", () => {
  describe( "Hello", () => {

    it( "should return greet", () => {
      let Roman = new HelloClass( "Roma" );
      let msg = Roman.greet();
      let time = moment().format( "DD MMMM YYYY" );
      expect( msg ).to.equal( `Hello, Roma at ${time}!` );
    } );

    it( " should return modified greet", () => {
      let Roman = new HelloClass( "Roma" );
      let msg = Roman.modifyGreet();
      expect( msg ).to.be.a( "string" );
      expect( msg ).to.equal( "Modified: Hello, Roma!" );
    } );

  } );
} );
