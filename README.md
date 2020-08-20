calculator
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/calculator.svg)](https://npmjs.org/package/calculator)
[![Downloads/week](https://img.shields.io/npm/dw/calculator.svg)](https://npmjs.org/package/calculator)
[![License](https://img.shields.io/npm/l/calculator.svg)](https://github.com/oscaramos/calculator/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g calculator
$ calculator COMMAND
running command...
$ calculator (-v|--version|version)
calculator/0.0.0 win32-x64 node-v12.18.3
$ calculator --help [COMMAND]
USAGE
  $ calculator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`calculator add [FILE]`](#calculator-add-file)
* [`calculator hello [FILE]`](#calculator-hello-file)
* [`calculator help [COMMAND]`](#calculator-help-command)

## `calculator add [FILE]`

describe the command here

```
USAGE
  $ calculator add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\add.ts](https://github.com/oscaramos/calculator/blob/v0.0.0/src\commands\add.ts)_

## `calculator hello [FILE]`

describe the command here

```
USAGE
  $ calculator hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ calculator hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/oscaramos/calculator/blob/v0.0.0/src\commands\hello.ts)_

## `calculator help [COMMAND]`

display help for calculator

```
USAGE
  $ calculator help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_
<!-- commandsstop -->
