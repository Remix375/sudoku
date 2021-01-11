import React from 'react';
import './Case.css'

class Case extends React.Component {
    render() {
        return (
            <input class='case' type='number' min='1' max='9'></input>
        )
    }

}

export default Case;