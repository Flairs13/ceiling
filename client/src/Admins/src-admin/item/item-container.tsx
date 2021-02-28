import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/Admin/src/profile/item-select";
import {getItem} from "../../../redux/Admin/src/profile/item-action";
import Item from "./item";
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components/macro";


type Props = {
    type: string
}
const ItemContainer: React.FC<Props> = (props) => {
    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(props.type))
    }, [props.type])



    const render = () => {
        switch (status) {
            case 'loading': {
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }
            case 'complete': {
                return (
                    <>
                        {
                            arrItem.map((item: any) => {
                                return (
                                    <ul>
                                        <Item getItem={getItem} req={props.type} {...item}/>
                                    </ul>



                                )
                            }).reverse()
                        }
                    </>
                )
            }
            default: {
               return <span>загрузка</span>
            }
        }
    }


    return (
        render()
    );
};

export default ItemContainer

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  
`
