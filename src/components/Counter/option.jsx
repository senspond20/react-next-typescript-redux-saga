import React, { Component } from 'react'; 
import { setDiff } from '../../action/count'
class Option extends Component { 
    constructor(props) { 
        super(props); 
        this.onChange = this.onChange.bind(this); 
    } 
    onChange(event) { 
        this.props.store.dispatch(setDiff(parseInt(event.target.value))); 
    } 
    render() { 
        return (
            <div>
            {this.props.store !=null 
            ? (<div> <input value={this.props.store.getState().counter.diff} onChange={this.onChange} /> </div> )
            : (<div>NULL</div>)
            }
            </div>
        ); 
    } 
} 

export default Option;

