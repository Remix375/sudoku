import React from 'react';
import Board from '../Board/Board';
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taille: 9,
        }
    }


    render() {
        return (
            <div>
                <h1 id='title'>hey</h1>
                <Board taille={this.state.taille} />
            </div>
        )
    }
}

export default App;