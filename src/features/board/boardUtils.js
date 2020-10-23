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

const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isPossibleMove = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i + 1] && board[i][j] === board[i + 1][j]) return true;
      if (board[j + 1] && board[i][j] === board[i][j + 1]) return true;
    }
  }
  return false;
};

export { getBlocksToDestroy, generateRandomNumber, isPossibleMove };
