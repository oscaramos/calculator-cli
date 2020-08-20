export function getResult(argv: Array<string>, op: (x: number, y: number) => number) {
  if (argv[0] === "even" || argv[0] === "odd") {
    if (argv[0] === "even") {
      return argv.splice(1)
        .filter(x => Number(x) % 2 === 0)
        .reduce((ac, x) => op(ac, Number(x)), 0);
    } else {
      return argv.splice(1)
        .filter(x => Number(x) % 2 === 1)
        .reduce((ac, x) => op(ac, Number(x)), 0);
    }
  } else {
    return argv.reduce((ac, x) => op(ac, Number(x)), 0);
  }
}
