import { Command } from "@oclif/command";
import { getFilteredByMode } from "../utils";

export default class Add extends Command {
  static description = "Add an set of numbers";
  static strict = false;
  static args = [
    {
      name: "mode",
      description: "choose only these numbers",
      required: false
    },
    {
      name: "numbers",
      description: "numbers to add, variadic",
    }
  ];

  static examples = [
    "$ calculator add 2 2",
    "$ calculator add 42 200 404",
    "$ calculator add even 2 1 2 1",
    "$ calculator add odd 2 1 2 1",
  ];

  async run() {
    const { argv } = this.parse(Add);
    const result = getFilteredByMode(argv).reduce((ac, x) => ac + x);
    this.log(`${result}`);
  }
}
