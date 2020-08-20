import { Command } from "@oclif/command";
import { getFilteredByMode } from "../utils";

export default class Mult extends Command {
  static description = "Multiply an set of numbers";
  static strict = false;
  static args = [
    {
      name: "mode",
      description: "choose only these numbers",
      required: false
    },
    {
      name: "numbers",
      description: "numbers to multiply, variadic",
    }
  ];

  static examples = [
    "$ calculator mult 5 2",
    "$ calculator mult 10 20 30",
    "$ calculator mult even 4 3 4 3",
    "$ calculator mult odd 4 3 4 3",
  ];

  async run() {
    const { argv } = this.parse(Mult);
    const result = getFilteredByMode(argv).reduce((ac, x) => ac * x);
    this.log(`${result}`);
  }
}
