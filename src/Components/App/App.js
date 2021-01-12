import React from 'react';
import Board from '../Board/Board';
import Button from '../Button/Button'
import './App.css'
import {one_value_cell_constraint, is_solved, call_backtrack} from '../../utils/Solve'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taille: 9,
            board:  [
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
            time: 5000,
            solveState: ''
        }
        
        this.changeCase = this.changeCase.bind(this);
        this.solve = this.solve.bind(this);
        this.reset = this.reset.bind(this);
        this.changeTimeToSolve = this.changeTimeToSolve.bind(this);
    }

    changeCase(lineIndex, caseIndex, value) {
        this.setState({
            solveState:''
        })
        const boardCopy = this.state.board;
        boardCopy[lineIndex][caseIndex] = parseInt(value);
        this.setState(
            {
                board: boardCopy
            }
        )

    }

    reset() {
        this.setState(
           
            {   
                solveState:'',
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
            tboard = call_backtrack(tboard, this.state.time)
        }

        if(!tboard){
            this.setState(
                {solveState: 'Pas reussi a resoudre dans le temps'}
            )
            return
        }

        this.setState(
            {
                solveState: 'reussi ! Voila une solution',
                board: tboard
            }
        )
    }

    changeTimeToSolve(newTime) {
        console.log(newTime)
        this.setState(
            {time: newTime}
        )
    }

    render() {
        return (
            <div id='wrapper'>
                <h1 id='title'>Sudoku</h1>
                <Board 
                    taille={this.state.taille} 
                    onChangeCase={this.changeCase}
                    boardData={this.state.board}
                />
                <h1>{this.state.solveState}</h1>
                <Button onsolve={this.solve} onreset={this.reset} onTimeChange={this.changeTimeToSolve} time={this.state.time}/>
            </div>
        )
    }
}

export default App;