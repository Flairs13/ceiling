import React from 'react';
import styled from "styled-components/macro";
import FaceSad from '../assets/images/facesad.png'

const NotFound = () => {
    return (
        <Wrapper>
            <ImgWrapper>
                <img src={FaceSad} alt="404 Not Found"/>
            </ImgWrapper>
            <h1>Извините но страница не найдена</h1>
        </Wrapper>
    );
};

export default NotFound;

const Wrapper = styled.article`
    h1 {
      font-size: 30px;
      text-align: center;
      margin-top: 20px;
      @media (max-width: 550px){
        font-size: 18px;
      }
    }
`

const ImgWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
  img  {
    width: 100%;
  }
`