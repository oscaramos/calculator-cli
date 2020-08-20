import { Command } from "@oclif/command";

export default class Div extends Command {
  static description = "Divide two numbers (LHS - RHS)";
  static args = [
    {
      name: "lhs",
      description: "left hand side",
    },
    {
      name: "rhs",
      description: "right hand side",
    }
  ];

  static examples = [
    "$ calculator div 10 2",
    "$ calculator div 3 2"
  ];

  async run() {
    const { argv } = this.parse(Div);
    const result = Number(argv[0]) / Number(argv[1]);
    this.log(`${result}`);
  }
}
