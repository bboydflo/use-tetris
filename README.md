# Tetris Game implemented as a custom hook

This is a fun project with the sole purpose to learn new things. It is a work in progress. Currently there are some things missing:

1.  add levels
2.  increase speed (gravitation) for each level
3.  simplify current hook using `useReducer` for the game logic

I've extracted this from another project which you can try here [https://florin-cosmin-tetris.netlify.app/](https://florin-cosmin-tetris.netlify.app/)

## How to use it

```bash
npm i use-tetris@latest -E
```

Then in your JavaScript/TypeScript code:

```tsx
import React from 'react'
import { render } from 'react-dom'
import { useTetris } from 'use-tetris'

// copied from: https://usehooks-typescript.com/react-hook/use-event-listener
import useEventListener from './use-event-listener'

const TetrisApp: React.FC = () => {
    const {
        tetrisState,
        handleKey
    } = useTetris()

    // listen for keydown events
    useEventListener('keydown', function(event) {
        const keycode = (event as KeyboardEvent).keyCode as keyof typeof browserKeyCodeMap
        const key = browserKeyCodeMap[keycode]

        handleKey(key)
    })

    const { score, grid, piece, nextPiece, gameState } = tetrisState

    return (
        ...
    )
}

render(<TetrisApp />, document.querySelector('#root'))
```

This project was bootstrapped using [tsdx.io](https://tsdx.io)

If you want to get in contact with me you can always DM me on [twitter](https://mobile.twitter.com/CosminOnciu)
