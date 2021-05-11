import React, {Component, ReactNode, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '@stores/reducers'
import { countUp, countDown } from '@stores/actions/count';
import styles from '@public/css/Home.module.css'
const dispatch = useDispatch();
// const {value} = useSelector((state: RootState) => state.counter)
const upEvent = useCallback(() => {
    dispatch(countUp())
}, [])

const downEvent = useCallback(() => {
    dispatch(countDown())
}, [])
class Home extends Component{
    // value: ReactNode;
    // static async getInitialProps(context) {
    //     const store = context.store;
    //     store.dispatch(useDispatch())
    //     return {value: store.counter}
    // }
    return() {

        return(
            <div className={styles.home}>
                {/*<div className={styles['counter__text']}>{this.value}</div>*/}
                <div className={styles['button__area']}>
                    <button onClick={downEvent}>Down</button>
                    <button onClick={upEvent}>Up</button>
                </div>
            </div>
        )
    }
}

export default Home