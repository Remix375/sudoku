import React from 'react';
import Line from '../Line/Line'
import './Board.css'

class Board extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let lines = []
        const taille = this.props.taille
        for(let i=0; i<taille; i++) {
            lines.push(<tr><Line id={i} taille={taille}/></tr>)
        }

        return (
            <table>
                <h1>{lines}</h1>
            </table>
        )
    }
}

export default Board;