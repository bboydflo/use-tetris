export enum Directions {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum Key {
  ESC = 'ESC',
  SPACE = 'SPACE#',
  LEFT = 'LEFT',
  UP = 'UP',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  P = 'P',
  Q = 'Q',
}

export const COLS = 10;
export const ROWS = 20;

export const COLORS = [
  'cyan',
  'blue',
  'orange',
  'yellow',
  'green',
  'purple',
  'red',
];

export const SHAPES = [
  [
    [1, 1, 1, 1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
  ],
  [
    [2, -1, -1],
    [2, 2, 2],
    [-1, -1, -1],
  ],
  [
    [-1, -1, 3], // 0,0 -> 2,0 ; 0,1 -> 1,0 ; 0,2 -> 0,0
    [3, 3, 3], // 1,0 -> 2,1 ; 1,1 -> 1,1 ; 1,2 -> 0,1
    [-1, -1, -1], // 2,0 -> 2,2 ; 2,1 -> 1,2 ; 2,2 -> 0,2
  ],
  [
    [4, 4],
    [4, 4],
  ],
  [
    [-1, 5, 5],
    [5, 5, -1],
    [-1, -1, -1],
  ],
  [
    [-1, 6, -1],
    [6, 6, 6],
    [-1, -1, -1],
  ],
  [
    [7, 7, -1],
    [-1, 7, 7],
    [-1, -1, -1],
  ],
];
