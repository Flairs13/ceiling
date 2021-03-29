import React, {useState} from 'react'
import styled from "styled-components/macro";
import {Button, Menu, MenuItem} from "@material-ui/core";
import Modal from "../../../Common/Modal";
import ItemEditor from "./item-editor";
import {useDispatch} from "react-redux";
import {deleteItemAction} from "../../../redux/common/src/item/item-action";
import DescriptionItem from './item-description/DescriptionItem';
import {ItemList} from "../../../Common/Types";


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
    req: string

}
type Test = Props & ItemList

const Item: React.FC<Test> = (props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [isShowModalEditor, setShowModalEditor] = useState(false)


    const dispatch = useDispatch()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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


    return (
        <ItemWrapper>
            <ItemContainer>
                <ImgWrapper>
                    <img src={props.image} alt={props.name}/>
                </ImgWrapper>
                <DescriptionWrapper>
                    <DescriptionItem {...props}/>
                </DescriptionWrapper>

                <Btn style={{backgroundColor: '#f1ecec'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Меню
                </Btn>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={deleteChange}>Удалить</MenuItem>
                    <MenuItem onClick={editChange}>Редактировать</MenuItem>

                </Menu>
                {isShowModalEditor && <Modal closeModal={setShowModalEditor} padding={'5px'}>
                    <ItemEditor closeModal={setShowModalEditor} {...props}/>
                </Modal>
                }


            </ItemContainer>
        </ItemWrapper>
    );
};

export default Item;

const ItemWrapper = styled.div`

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

  @media (max-width: 738px) {
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
  height: 100%;
  //background-color: #f1ecec;

`
