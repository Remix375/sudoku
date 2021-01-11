import React from 'react';
import Board from '../Board/Board';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taille: 9,
            board: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]
        }
        
        this.changeCase = this.changeCase.bind(this);
    }

    changeCase(lineIndex, caseIndex, value) {
        const boardCopy = this.state.board;
        boardCopy[lineIndex][caseIndex] = parseInt(value);
        this.setState(
            {
                board: boardCopy
            }
        )

    }


    render() {
        return (
            <div>
                <h1 id='title'>hey</h1>
                <Board taille={this.state.taille} onChangeCase={this.changeCase} />
            </div>
        )
    }
}

export default App;