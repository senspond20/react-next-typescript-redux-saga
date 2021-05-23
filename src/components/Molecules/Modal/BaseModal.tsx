import React, {useEffect} from 'react'
import styled from 'styled-components'

type Props = {
    className : string,
    visible : boolean,
    children : React.ReactNode
}
function BaseModal({ className, visible, children } : Props) {

    useEffect(()=>{
        const modalOverlay = document.querySelector('.modal-overlay');

        if(visible){
            modalOverlay?.classList.add('visible')
        }else{
            modalOverlay?.classList.remove('visible')
        }

    }, [visible])
    return (
        <>
            <ModalOverlay className={'modal-overlay'}/>
            {visible?
                <ModalWrapper className={className}>
                    <ModalInner className="modal-inner">
                        {children}
                    </ModalInner>
                </ModalWrapper>
                : null
            }
        </>
    )
}
const ModalOverlay = styled.div`
  box-sizing: border-box;
  opacity: 1;
  transition: all 0.5s;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -9999;
`
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`

export default BaseModal;