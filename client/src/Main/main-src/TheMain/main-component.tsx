import React, {useEffect, useLayoutEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getItem } from '../../../redux/Admin/src/profile/item-action';
import {getItems, getStatus} from "../../../redux/Admin/src/profile/item-select";
import {CircularProgress} from "@material-ui/core";
import MainItem from "../main-item";
import styled from "styled-components/macro";

const MainComponent = () => {

    const items = useSelector(getItems)
    const status = useSelector(getStatus)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        dispatch(getItem('main'))
    },[])

    const render = () => {
        switch (status) {
            case 'loading': {
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }
            case 'complete': {
                return (
                    <ListWrapper>

                        {
                            items.map((item: any) => {
                                return (
                                    <MainItem {...item}/>
                                )
                            })
                        }

                    </ListWrapper>
                )
            }
            default: {
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }
        }
    }

    return (
        render()
    );
};

export default MainComponent;


const ListWrapper = styled.ul`
  padding: 15px 1px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
  @media (max-width: 1110px){
    grid-template-columns: repeat(3,1fr);
  }
  @media (max-width: 860px){
    grid-template-columns: repeat(2,1fr);
  }
  li {
    flex-direction: column;
    margin-bottom: 0;
    padding: 20px;
    
    div:first-child {
      width: 100%;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    
    
    div:last-child {
      margin-left: 0;
      height: 100%;     
      div {
        flex-direction: column;
        margin-bottom: 0;
        height: 100%;
        h2 {
          margin-bottom: 10px;
        }
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
            p {
              margin-bottom: 0;
            }
          
        }
      }
    }
  }
  
  
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`