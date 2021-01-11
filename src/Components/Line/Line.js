import React from 'react';
import Case from '../Case/Case'

class Line extends React.Component {
    render() {
        let cases = []
        const taille = this.props.taille
        for(let i=0; i<taille; i++) {
            cases.push(<th><Case key={i} caseIndex={i} lineIndex={this.props.lineIndex} taille={taille} onChangeCase={this.props.onChangeCase}/></th>)
        }

        return (
            <div>{cases}</div>
        )
    }
}

export default Line;