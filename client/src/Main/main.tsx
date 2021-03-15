import React from 'react';
import styled from "styled-components/macro";
import MainPage from "./main-src/main-page";
import Header from "./header/header";
import Footer from "./footer/footer";


const Main = () => {
    return (
        <>
            <MainContainer>
                <Header/>
                <MainPage/>
                <Footer/>
            </MainContainer>
        </>
    );
};

export default Main

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`
