const ifIsInArray = (val, arr) => (JSON.stringify(arr).includes(JSON.stringify(val)) ? undefined : val);

const getBlocksToDestroy = (x, y, board) => {
  const blocks = [[x, y]];

  const getNeighbours = (x, y, board) => {
    const value = board[x][y];

    const availableNeighbours = [
      ifIsInArray([x - 1, y], blocks),
      ifIsInArray([x, y + 1], blocks),
      ifIsInArray([x + 1, y], blocks),
      ifIsInArray([x, y - 1], blocks),
    ].filter((e) => e);

    availableNeighbours.forEach(([x, y]) => {
      if (x >= 0 && x < board.length && y >= 0 && y < board[x].length) {
        if (board[x][y] === value) {
          ifIsInArray([x, y], blocks) && blocks.push([x, y]);
          getNeighbours(x, y, board);
        }
      }
    });
  };

  getNeighbours(x, y, board);

  return blocks.length > 1 ? blocks : null;
};

const findEmptyBlocks = (board) => {
  const height = board.length;
  const width = board[0].length;

  const empty = [];

  for (let y = height - 1; y > -1; y--) {
    for (let x = width - 1; x > -1; x--) {
      if (board[y][x] === 0) {
        empty.push([y, x]);
      }
    }
  }
  return empty;
};

export { getBlocksToDestroy, findEmptyBlocks };
