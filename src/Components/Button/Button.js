import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.setTime = this.setTime.bind(this);
    }

    setTime(e) {
        console.log(e.target.id)
        let newTime = e.target.id === '3' ? Infinity : e.target.id === '1' ? 50000 : 300000;
        this.props.onTimeChange(newTime)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onsolve} id='solve' className='up'>Solve</button>
                <button id='reset' className='up' onClick={this.props.onreset}>Reset</button>
                <h1>Temp max pour resoudre: {this.props.time === 50000 ? 'rapide' : this.props.time === 300000 ? 'moyen' : 'lent'}</h1>
                <button onClick={this.setTime} id='1'>rapide</button> <button onClick={this.setTime} id='2'>moyen</button> <button onClick={this.setTime} id='3'>lent</button>
            </div>
        )
    }
}

export default Button;