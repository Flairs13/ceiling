import React, {useState} from 'react'
import styled from "styled-components/macro";
import {Button, Menu, MenuItem} from "@material-ui/core";
import Modal from "../../../Common/Modal";
import ItemEditor from "./item-editor";
import {useDispatch} from "react-redux";
import {deleteItemAction} from "../../../redux/Admin/src/profile/item-action";
import ItemAdd from "./item-add";

type Props = {
    image: string
    size: string
    material: string
    priceOneUnit: string
    priceOneMetre: string
    technology: string
    weight: string
    perf: string
    type: string
    name: string
    _id: string
    getItem: (type: string) => void
    req: string
}
const Item: React.FC<Props> = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isShowModalEditor, setShowModalEditor] = useState(false)
    const [isShowModalAdd, setShowModalAdd] = useState(false)


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
        dispatch(props.getItem(props.req))
    }
    const editChange = () => {
        setAnchorEl(null);
        setShowModalEditor(true)
    }
    const addChange = () => {
        setAnchorEl(null);
        setShowModalAdd(true)
    }


    return (
        <ItemContainer>
            <ImgWrapper>
                <img src={props.image} alt={props.name}/>
            </ImgWrapper>
            <DescriptionWrapper>
                {props.name &&
                <DescriptionItem>
                    <dt>Наименование:</dt>
                    <dd>{props.name}</dd>
                </DescriptionItem>}
                {props.material &&
                <DescriptionItem>
                    <dt>Материал:</dt>
                    <dd>{props.material}</dd>
                </DescriptionItem>}
                {props.size &&
                <DescriptionItem>
                    <dt>Размер:</dt>
                    <dd>{props.size}м</dd>
                </DescriptionItem>}
                {props.type &&
                <DescriptionItem>
                    <dt>Тип:</dt>
                    <dd>{props.type}</dd>
                </DescriptionItem>}
                {props.technology &&
                <DescriptionItem>
                    <dt>Технология:</dt>
                    <dd>{props.technology}</dd>
                </DescriptionItem>}
                {props.weight &&
                <DescriptionItem>
                    <dt>Вес:</dt>
                    <dd>{props.weight}</dd>
                </DescriptionItem>}
                {props.perf &&
                <DescriptionItem>
                    <dt>Вид:</dt>
                    <dd>{props.perf}</dd>
                </DescriptionItem>}
                {props.priceOneUnit &&
                <DescriptionItem>
                    <dt>Цена за шт:</dt>
                    <dd>{props.priceOneUnit}</dd>
                </DescriptionItem>}
                {props.priceOneMetre &&
                <DescriptionItem>
                    <dt>Цена за метр:</dt>
                    <dd>{props.priceOneMetre}</dd>
                </DescriptionItem>}

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
                                     <ItemEditor {...props}/>
                                 </Modal>
            }
            {isShowModalAdd && <Modal closeModal={setShowModalAdd} padding={'5px'}>
                                    <ItemAdd closeModal={setShowModalAdd} getItem={props.getItem} req={props.req}/>
                                </Modal>
            }

        </ItemContainer>
    );
};

export default Item;


const ItemContainer = styled.li`
  display: grid;
  grid-template-columns: 280px 1fr 80px;
  gap: 10px;
  background-color: white;
  box-shadow: 0 1px 0 0 #d3d9de, 0 0 0 1px #e7e8ec;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
`
const ImgWrapper = styled.div`
  //width: 200px;
  img {
    width: 100%;
    height: 100%;
  }
`

const DescriptionWrapper = styled.dl`
`
const DescriptionItem = styled.div`
  font-size: 15px;
  display: flex;
  margin-bottom: 10px;
  dt {
    margin-right: 5px;
    color: #828282;
  } 
  dd {
    color: #2a5885;;
  }
`
const Btn = styled(Button)`
  background-color: #f1ecec;
  height: 100%;
`
