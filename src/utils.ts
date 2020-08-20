export function getFilteredByMode(argv: Array<string>): Array<number> {
  if (argv[0] === "even" || argv[0] === "odd") {
    if (argv[0] === "even") {
      return argv.splice(1)
        .map(x => Number(x))
        .filter(x => x % 2 === 0);
    } else {
      return argv.splice(1)
        .map(x => Number(x))
        .filter(x => x % 2 === 1)
    }
  } else {
    return argv
      .map(x => Number(x))
  }
}
