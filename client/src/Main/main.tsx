import React from 'react';
import Admins from "../Admins/admin";
import {Route} from "react-router-dom";
import styled from "styled-components/macro";
import MainPage from "./main-src/main-page";
import Header from "./header/header";

const Main = () => {
    return (
        <MainContainer>
            <Header/>
            <MainPage/>
        </MainContainer>
    );
};

export default Main;

const MainContainer = styled.main`
 
`
