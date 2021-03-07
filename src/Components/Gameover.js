import React from 'react'


function Gameover(props) {
    return (props.show?
        <div id="gameOver">
        <div>
            Parabéns, você completou o jogo!
        </div>
        <button id="restart" onClick={props.handleRestart}> Jogar Novamente</button>
    </div> : <></>
    )
}

export default Gameover
