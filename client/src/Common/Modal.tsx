import React, {useEffect, useRef} from 'react'
import styled from "styled-components/macro";

type Props = {
    padding: string
    closeModal: (flag: boolean) => void
}
const Modal:React.FC<Props> = (props) => {

    const modalWrapper = useRef<HTMLTableSectionElement>(null)

    const handler = (e: MouseEvent) => {
        if (modalWrapper.current && !modalWrapper.current?.contains(e.target as Node)){
            props.closeModal(false)
            document.removeEventListener('click',handler,true)
        }

    }

    useEffect(() => {
        document.addEventListener('click',handler,true)
    },[])

    return (
        <ModalWrapper>
            <ModalContainer ref={modalWrapper} padding={props.padding}>
                {props.children}
            </ModalContainer>
        </ModalWrapper>
    );
};

export default Modal;


const ModalWrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    height: 100vh;
    width: 100%;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContainer = styled.section<{padding: string}>`
    max-width: 1200px;
    padding:${props => props.padding};
    box-shadow: 0 1px 0 0 #d3d9de, 0 0 0 1px #e7e8ec;
    border-radius: 5px;
    background-color: white;
`
