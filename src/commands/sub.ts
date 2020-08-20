import {Command, flags} from '@oclif/command'
import { getResult } from "../utils";

export default class Sub extends Command {
  static description = 'Subtract two numbers (LHS - RHS)'
  static args = [
    {
      name: 'lhs',
      description: 'left hand side',
    },
    {
      name: 'rhs',
      description: 'right hand side',
    }
  ]

  static examples = [
    '$ calculator sub 5 2'
  ]

  async run() {
    const {argv} = this.parse(Sub)
    const result = Number(argv[0]) - Number(argv[1])
    this.log(`${result}`)
  }
}
