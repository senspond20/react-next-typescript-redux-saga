import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '@stores/reducers'
import { countUp, countDown } from '@stores/actions/count';

import styles from '../../../public/css/Home.module.css'

const Home = () => {
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
            <div className={styles['counter__text']}>{value}</div>
            <div className={styles['button__area']}>
                <button onClick={downEvent}>Down</button>
                <button onClick={upEvent}>Up</button>
            </div>
        </div>
    )
}

export default Home