import { Command, flags } from "@oclif/command";

export default class Pow extends Command {
  static description = "Power two numbers (base ^ exponent)";
  static args = [
    {
      name: "base",
      description: "base",
    },
    {
      name: "exp",
      description: "exponent",
    }
  ];

  static examples = [
    "$ calculator pow 2 4",
    "$ calculator pow 3 2",
    "$ calculator pow 5 0",
  ];

  async run() {
    const { argv } = this.parse(Pow);
    const result = Number(argv[0]) ** Number(argv[1]);
    this.log(`${result}`);
  }
}
