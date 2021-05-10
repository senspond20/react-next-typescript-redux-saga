import { createRef, useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from '@stores/reducers'
import { search } from '@stores/actions/search';
import styled, {ThemeProvider} from 'styled-components';
import {common} from "@components/Layouts/Theme";
import Counter from './counter';

const Paragraph = styled.p`
  font-size: ${common.fontSizes.paragraph};
  color: ${common.colors.gray_1};
`;
const NavbarWrapper = styled.div`
  background-color: #fff;
`;

function Home() {
  const dispatch = useDispatch();
  const searchData = useSelector((state: RootState) => state.search)
  const [text,setText] = useState('');
  const textInput = useRef();

  const onChange = (e : any) =>{
    setText(e.target.value)
  }
  const onReset = () =>{
    setText('');
    // textInput.current.focus();
  }
  const searchEvent = useCallback(() => {
    //document.getElementById('SearchKeyword').value}
    dispatch(search({name: 'text'}))
    //'superman'
  }, [])
  // let keyword = document.getElementById('SearchKeyword')
  return (

      // <ThemeProvider theme={theme}>
      <NavbarWrapper>
        <div>
          <input type ={'text'} ref={textInput} onChange={onChange} value={text} id={'SearchKeyword'}/>
          <button onClick={onReset}>초기화</button>
          <button onClick={searchEvent}>Search</button>
        </div>
        {searchData.data && (
            <pre>
               {JSON.stringify(searchData.data,null,2)}
              {/* {searchData.data.map((show:any, index:number) => (
                  <div key={index}>
                    {JSON.stringify(show,null,2)}
                  </div>
              ))} */}
            </pre>
        )}
      </NavbarWrapper>
      // </ThemeProvider>
  )
}
Home.getInitialProps = async (context) => {
    console.log("==========================")
    console.log(Object.keys(context))
    // const [ctx, Component] = context;
    const state = context.store.getState();
    if(state.search)
        console.log('dfdf')
        console.log(state.search)
};

export default Home;

// export const getServerSideProps = wrapper.getServerSideProps((context => {
//     console.log(Object.keys(context))
//     context.store.dispatch({
//         type : countDown
//     })
// }))
