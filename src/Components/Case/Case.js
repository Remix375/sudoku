import React from 'react';
import './Case.css'

class Case extends React.Component {
    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        console.log('e', e.target.value)
        console.log('this.props.lineIndex', this.props.lineIndex)
        console.log('this.props.lineIndex', this.props.lineIndex)
        this.props.onChangeCase(this.props.lineIndex, this.props.caseIndex, e.target.value)
    }

    render() {
        return (
            <input className='case' type='number' min='1' max='9' onChange={this.onChange}></input>
        )
    }

}

export default Case;