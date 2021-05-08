import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement,reset } from '@stores/actions/count'

class Button extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onRESET}>RESET</button>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onRESET: () => dispatch(reset())
    }
}

Button = connect(0, mapDispatchToProps)(Button);

export default Button;