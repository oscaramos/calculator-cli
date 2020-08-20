# calculator

Calculator on the cli. Supports add, sub, mult and div.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [calculator](#calculator)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g @oscaramos/calculator
$ calculator COMMAND
running command...
$ calculator (-v|--version|version)
@oscaramos/calculator/0.1.3 win32-x64 node-v12.18.3
$ calculator --help [COMMAND]
USAGE
  $ calculator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`calculator add [MODE] [NUMBERS]`](#calculator-add-mode-numbers)
* [`calculator div [LHS] [RHS]`](#calculator-div-lhs-rhs)
* [`calculator help [COMMAND]`](#calculator-help-command)
* [`calculator mult [MODE] [NUMBERS]`](#calculator-mult-mode-numbers)
* [`calculator pow [BASE] [EXP]`](#calculator-pow-base-exp)
* [`calculator sqrt [X]`](#calculator-sqrt-x)
* [`calculator sub [LHS] [RHS]`](#calculator-sub-lhs-rhs)

## `calculator add [MODE] [NUMBERS]`

Add an set of numbers

```
USAGE
  $ calculator add [MODE] [NUMBERS]

ARGUMENTS
  MODE     choose only these numbers
  NUMBERS  numbers to add, variadic

EXAMPLES
  $ calculator add 2 2
  $ calculator add 42 200 404
  $ calculator add even 2 1 2 1
  $ calculator add odd 2 1 2 1
```

_See code: [src\commands\add.ts](https://github.com/oscaramos/calculator-cli/blob/v0.1.3/src\commands\add.ts)_

## `calculator div [LHS] [RHS]`

Divide two numbers (LHS - RHS)

```
USAGE
  $ calculator div [LHS] [RHS]

ARGUMENTS
  LHS  left hand side
  RHS  right hand side

EXAMPLES
  $ calculator div 10 2
  $ calculator div 3 2
```

_See code: [src\commands\div.ts](https://github.com/oscaramos/calculator-cli/blob/v0.1.3/src\commands\div.ts)_

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

## `calculator mult [MODE] [NUMBERS]`

Multiply an set of numbers

```
USAGE
  $ calculator mult [MODE] [NUMBERS]

ARGUMENTS
  MODE     choose only these numbers
  NUMBERS  numbers to multiply, variadic

EXAMPLES
  $ calculator mult 5 2
  $ calculator mult 10 20 30
  $ calculator mult even 4 3 4 3
  $ calculator mult odd 4 3 4 3
```

_See code: [src\commands\mult.ts](https://github.com/oscaramos/calculator-cli/blob/v0.1.3/src\commands\mult.ts)_

## `calculator pow [BASE] [EXP]`

Power two numbers (base ^ exponent)

```
USAGE
  $ calculator pow [BASE] [EXP]

ARGUMENTS
  BASE  base
  EXP   exponent

EXAMPLES
  $ calculator pow 2 4
  $ calculator pow 3 2
  $ calculator pow 5 0
```

_See code: [src\commands\pow.ts](https://github.com/oscaramos/calculator-cli/blob/v0.1.3/src\commands\pow.ts)_

## `calculator sqrt [X]`

Square root a numbers (sqrt(x))

```
USAGE
  $ calculator sqrt [X]

ARGUMENTS
  X  Number to take its square root

EXAMPLES
  $ calculator sqrt 4
  $ calculator sqrt 9
  $ calculator sqrt 9.87
```

_See code: [src\commands\sqrt.ts](https://github.com/oscaramos/calculator-cli/blob/v0.1.3/src\commands\sqrt.ts)_

## `calculator sub [LHS] [RHS]`

Subtract two numbers (LHS - RHS)

```
USAGE
  $ calculator sub [LHS] [RHS]

ARGUMENTS
  LHS  left hand side
  RHS  right hand side

EXAMPLE
  $ calculator sub 5 2
```

_See code: [src\commands\sub.ts](https://github.com/oscaramos/calculator-cli/blob/v0.1.3/src\commands\sub.ts)_
<!-- commandsstop -->
