import { expect } from "chai";
import jsdom from 'jsdom';

describe("Main module", ()=>{

  it("should pass", ()=>{
    expect(true).to.equal(true);
  });

});

describe("index.html h1", ()=>{

  it("should return modified h1 value", (done)=>{

    jsdom.env({
      url: 'http://localhost:8000/',
      scripts: ["http://code.jquery.com/jquery.js"],
      features: {
        FetchExternalResources: ["script"],
        ProcessExternalResources: ["script"]
      },
      done: (err, window) => {
        const $ = window.$;
        let h1 = $('h1').html();
        let h1HtmlExpected = "Javascript custom boilerplate by @lomboboo - 42 symbols";
        expect(h1).to.equal(h1HtmlExpected);
        done();
        window.close();
      }
    });

  });

});
