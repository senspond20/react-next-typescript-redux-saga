import React, { Component } from 'react'; 
import Option from './option'
import Button from './button'

class Counter extends Component { 
    render() { 
        console.log(this.props.store)
        return ( 
        <>  
            {this.props.store != null
            ? (<div> <h1>Value : {this.props.store.getState().counter.value}</h1> </div> )
            : (<div>Null</div>)
            } 
            <Option />
            <Button />
        </>)
    } 
} 

export default Counter;

