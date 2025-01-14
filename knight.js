function getPossibleMoves(curr) {
  let [x, y] = curr;
  return [
    [x + 2, y + 1],
    [x - 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y - 2],
  ].filter((e) => {
    let [a, b] = e;
    return a >= 0 && b >= 0 && a < 8 && b < 8;
  });
}

function knightMoves(start, end) {
  let queue = [];
  let visited = new Set();
  queue.push(start);

  let from = new Map();
  while (queue.length) {
    let curr = queue.shift();
    visited.add(curr.toString());
    if (curr.toString() === end.toString()) break;
    getPossibleMoves(curr).forEach((e) => {
      if (visited.has(e.toString())) return;
      from[e] = curr;
      queue.push(e);
    });
  }

  let path = [end];
  while (path.at(-1).toString() !== start.toString()) {
    path.push(from[path.at(-1)]);
  }
  path.reverse();
  console.log(`You made it in ${path.length} moves! Here's your path:`);
  path.forEach((e) => console.log(e));
}

knightMoves([0, 0], [7, 7]);
