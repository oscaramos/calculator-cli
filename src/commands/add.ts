import {Command} from '@oclif/command'
import { getResult } from "../utils";

export default class Add extends Command {
  static description = 'describe the command here'
  static strict = false
  static args = [
    {
      name: 'numbers',
      description: 'numbers to add, variadic',
    }
  ]

  static examples = [
    '$ calculator add 2 2',
    '$ calculator add 42 200 404',
    '$ calculator add even 2 1 2 1',
    '$ calculator add odd 2 1 2 1',
  ]

  async run() {
    const {argv} = this.parse(Add)
    const result = getResult(argv,(x: number, y: number) => x+y);
    this.log(`${result}`)
  }
}
