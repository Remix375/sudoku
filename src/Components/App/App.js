import React from 'react';
import Board from '../Board/Board';
import './App.css'
import {one_value_cell_constraint, backtrack_based, is_solved} from '../../utils/Solve'

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
        this.solve = this.solve.bind(this);
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

    solve() {
        let tboard = this.state.board
        let updated = true, solved = false
          
        while (updated && !solved) {
          updated = one_value_cell_constraint(tboard)
          solved = is_solved(tboard)
        }
        if (!solved) {
            tboard = backtrack_based(tboard)
        }

        this.setState(
            {
                board: tboard
            }
        )
        
        

    }
    


    render() {
        return (
            <div>
                <h1 id='title'>hey</h1>
                <Board taille={this.state.taille} onChangeCase={this.changeCase} />
                <button onClick={this.solve}>Solve</button>
            </div>
        )
    }
}

export default App;