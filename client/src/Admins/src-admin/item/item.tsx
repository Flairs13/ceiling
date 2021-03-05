import React, {useEffect, useImperativeHandle, useState} from 'react'
import styled from "styled-components/macro";
import {Button, Menu, MenuItem} from "@material-ui/core";
import Modal from "../../../Common/Modal";
import ItemEditor from "./item-editor";
import {useDispatch} from "react-redux";
import {deleteItemAction} from "../../../redux/Admin/src/profile/item-action";
import ItemAdd from "./item-add";
import Profile from './item-description/profile';
import Tape from "./item-description/tape";
import Accessories from "./item-description/accessories";
import Light from "./item-description/light";
import Constructions from "./item-description/constructions";
import Led from "./item-description/led";
import Consumables from "./item-description/consumables";
import Tools from "./item-description/tools";
import Additional from "./item-description/additional";

type Props = {
    image: string
    priceOnePack: number
    thickness: string
    size: string
    material: string
    priceOneUnit: number
    priceOneMetre: number
    technology: string
    manufacturer: string
    numberLed: number
    weight: string
    perf: string
    plinth: string,
    color: string,
    power: string,
    type: string
    name: string
    _id: string
    getItem: (type: string) => void
    req: string
    fnc: (fnc: any) => void
}
const Item: React.FC<Props> = (props,ref) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShowModalEditor, setShowModalEditor] = useState(false)
    const [isShowModalAdd, setShowModalAdd] = useState(false)

    useEffect(() => {
        props.fnc(addChange)
    })

    const dispatch = useDispatch()

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteChange = () => {
        dispatch(deleteItemAction(props._id, props.req))
        setAnchorEl(null);
    }
    const editChange = () => {
        setAnchorEl(null);
        setShowModalEditor(true)
    }
    const addChange = () => {
        setAnchorEl(null);
        setShowModalAdd(true)
    }



    const descriptionRender = () => {
        switch (props.req) {
            case 'profile': {
                return <Profile {...props}/>
            }

            case 'tape': {
                return <Tape {...props}/>
            }

            case 'accessories': {
                return <Accessories {...props} />
            }

            case 'light': {
                return <Light  {...props} />
            }

            case 'constructions': {
                return <Constructions {...props} />
            }

            case 'led': {
                return <Led {...props} />
            }

            case 'consumables': {
                return <Consumables {...props} />
            }

            case 'tools': {
                return <Tools {...props} />
            }

            case 'additional': {
                return <Additional {...props} />
            }
        }
    }


    return (
        <ItemWrapper>
            <ItemContainer>
                <ImgWrapper>
                    <img src={props.image} alt={props.name}/>
                </ImgWrapper>
                <DescriptionWrapper>
                    {descriptionRender()}
                </DescriptionWrapper>

                <Btn aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Меню
                </Btn>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={addChange}>Добавить</MenuItem>
                    <MenuItem onClick={deleteChange}>Удалить</MenuItem>
                    <MenuItem onClick={editChange}>Редактировать</MenuItem>

                </Menu>
                {isShowModalEditor && <Modal closeModal={setShowModalEditor} padding={'5px'}>
                    <ItemEditor closeModal={setShowModalEditor} {...props}/>
                </Modal>
                }
                {isShowModalAdd && <Modal closeModal={setShowModalAdd} padding={'5px'}>
                    <ItemAdd closeModal={setShowModalAdd} getItem={props.getItem} req={props.req}/>
                </Modal>
                }

            </ItemContainer>
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.li`
  
`

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 80px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 1px 0 0 #d3d9de, 0 0 0 1px #e7e8ec;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  
    @media(max-width: 738px) {
    grid-template-columns: 1fr;
  }
  
`
const ImgWrapper = styled.div`
  //width: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`

const DescriptionWrapper = styled.dl`
  font-size: 17px;
`


const Btn = styled(Button)`
  background-color: #f1ecec;
  height: 100%;
`
