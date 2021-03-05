import React, {useEffect, useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/Admin/src/profile/item-select";
import {getItem} from "../../../redux/Admin/src/profile/item-action";
import Item from "./item";
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components/macro";
import Cloth from "./cloth";
import Modal from "../../../Common/Modal";
import ItemAdd from "./item-add";


type Props = {
    type: string
}
const ItemContainer: React.FC<Props> = (props) => {
    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)
    const [isShowModalAdd, setShowModalAdd] = useState(false)
    const child = useRef() as any

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(props.type))
    }, [props.type])


    const test = (fnc: any) => {
        child.current = fnc
    }
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
                        <ButtonWrapper>
                            <Button onClick={() => setShowModalAdd(true)}>Добавить</Button>
                        </ButtonWrapper>
                        {
                            arrItem.map((item: any) => {
                                return (
                                    <ul>
                                        <Item getItem={getItem}  fnc={test} req={props.type} {...item}/>
                                    </ul>



                                )
                            }).reverse()
                        }
                        {isShowModalAdd && <Modal closeModal={setShowModalAdd} padding={'5px'}>
                            <ItemAdd closeModal={setShowModalAdd} getItem={getItem} req={props.type}/>
                        </Modal>
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
const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`

export const Button = styled.button`
    padding: 7px 16px 8px;
    width: 100%;
    margin: 0;
    cursor: pointer;
    text-align: center;
    background-color: #5181b8;
    border: 0;
    border-radius: 4px;
    color: #fff;
    &:hover {
    opacity: 0.88;
    }
    &:active {
    background-color: #4a76a8;
    padding-top: 8px;
    padding-bottom: 7px;
    }
    &:disabled{
    opacity: 0.5;
    }
`
