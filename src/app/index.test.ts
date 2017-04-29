import { expect } from "chai";

import { test, testFunc } from "./support";

describe( "Index", () => {
  it( "Should be true", () => {
    expect( test ).equal( "test" );
  } );
  it( "Should be false", () => {
    expect( test ).not.equal( "1test" );
  } );
  it( "Should return test", () => {
    let t = testFunc();
    expect( t ).equal( "testFunc" );
  } );
} );
