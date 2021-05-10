import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '@stores/reducers'
import { countUp, countDown } from '@stores/actions/count';
import styles from '@public/css/Home.module.css'
import Home from "../index";
import {isNumber} from "util";
// let ssrValue : number = 0;

const Counter = () => {
    const dispatch = useDispatch();
    const {value} = useSelector((state: RootState) => state.counter)

    const upEvent = useCallback(() => {
        dispatch(countUp())
    }, [])

    const downEvent = useCallback(() => {
        dispatch(countDown())
    }, [])

    return (
        <div className={styles.home}>
            {/*<div>{ssrValue}</div>*/}
            <div className={styles['counter__text']}>{value} </div>
            <div className={styles['button__area']}>
                <button onClick={downEvent}>Down</button>
                <button onClick={upEvent}>Up</button>
            </div>
        </div>
    )
}
Counter.getInitialProps = async (context) => {
    const state = context.store.getState();
    let ssrValue = 0;
    console.log('dfdfdfdd')
    if(state.counter){
        ssrValue = state.counter.value
        console.log('eeeee')
        console.log(ssrValue)
    }
    return ssrValue;
};

export default Counter