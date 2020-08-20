import {Command} from '@oclif/command'

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
  ]

  async run() {
    const {argv} = this.parse(Add)

    const result = argv.reduce((ac, x) => ac + Number(x) ,0)

    this.log(`${result}`)
  }
}
