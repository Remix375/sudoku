import React from 'react';
import Case from '../Case/Case'

class Line extends React.Component {
    render() {
        let cases = []
        const taille = this.props.taille
        for(let i=0; i<taille; i++) {
            cases.push(<th><Case id={i} taille={taille}/></th>)
        }

        return (
            <h1>{cases}</h1>
        )
    }
}

export default Line;