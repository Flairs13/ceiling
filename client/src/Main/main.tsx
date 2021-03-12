import React from 'react';
import Admins from "../Admins/admin";
import {Route} from "react-router-dom";
import styled from "styled-components/macro";
import MainPage from "./main-src/main-page";
import Header from "./header/header";
import Admin from "../Admins/admin";

const Main = () => {
    return (
        <>
            <MainContainer>
                <Header/>
                <MainPage/>
            </MainContainer>
        </>
    );
};

export default Main

const MainContainer = styled.main`
  padding: 0 15px;
  @media (max-width: 600px){
    padding: 0 10px;
  }
`
