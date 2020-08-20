import { Command } from "@oclif/command";

export default class Sqrt extends Command {
  static description = "Square root a numbers (sqrt(x))";
  static args = [
    {
      name: "x",
      description: "Number to take its square root",
    }
  ];

  static examples = [
    "$ calculator sqrt 4",
    "$ calculator sqrt 9",
    "$ calculator sqrt 9.87",
  ];

  async run() {
    const { argv } = this.parse(Sqrt);
    const result = Number(argv[0]) ** 0.5;
    this.log(`${result}`);
  }
}
