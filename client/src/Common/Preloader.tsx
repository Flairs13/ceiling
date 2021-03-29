import React from 'react';
import styled from "styled-components/macro";
import {CircularProgress} from "@material-ui/core";

const Preloader:React.FC = () => {
    return (
        <LoadingWrapper>
            <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
        </LoadingWrapper>
    );
};

export default Preloader;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`