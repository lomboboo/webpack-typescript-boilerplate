import * as moment from "moment";
moment.locale("pl");

export class HelloClass {
  private name: string;

  constructor( name: string ) {
    this.name = name;
  }

  public greet(): string {
    let time = moment().format("DD MMMM YYYY");
    return `Hello, ${this.name} at ${time}!`;
  }

  public modifyGreet(): string {
    return `Modified: Hello, ${this.name}!`;
  }

}
