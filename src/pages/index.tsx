import Head from 'next/head'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '@stores/reducers'
import { countUp, countDown } from '@stores/actions/count';
import { search } from '@stores/actions/search';

import styles from '@public/css/Home.module.css'
import styled, {ThemeProvider} from 'styled-components';
import {common} from "@components/Layouts/Theme";

const Paragraph = styled.p`
  font-size: ${common.fontSizes.paragraph};
  color: ${common.colors.gray_1};
`;
const NavbarWrapper = styled.div`
  background-color: ${common.colors.green_1}
`;
const Subtitle = styled.h2`
  color: ${common.colors.green_1};
`;
export default function Home() {
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.counter)
  const searchData = useSelector((state: RootState) => state.search)

  const upEvent = useCallback(() => {
    dispatch(countUp())
  }, [])

  const downEvent = useCallback(() => {
    dispatch(countDown())
  }, [])

  const searchEvent = useCallback(() => {
    dispatch(search({test: 'test1'}))
    //'superman'
  }, [])

  return (
      // <ThemeProvider theme={theme}>
      <NavbarWrapper>
        <Paragraph>ddddddd</Paragraph>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.home}>
          <div className={styles['counter__text']}>{value}</div>
          <div className={styles['button__area']}>
            <button onClick={downEvent}>Down</button>
            <button onClick={upEvent}>Up</button>
          </div>
          <button onClick={searchEvent}>Search</button>
        </div>
        {searchData.data && (
            <div>
              {searchData.data.map((show:any, index:number) => (
                  <div key={index}>
                    <a href={show.url}>{show.name}</a>
                    <div><Paragraph>점수 : </Paragraph>{show.score}</div>
                    <div>타입 : {show.type}</div>
                    <div>언어 : {show.language}</div>
                  </div>
              ))}
            </div>
        )}
      </NavbarWrapper>
      // </ThemeProvider>
  )
}

