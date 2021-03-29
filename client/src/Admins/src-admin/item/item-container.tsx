import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/common/src/item/item-select";
import {getItem, updateItemsAction} from "../../../redux/common/src/item/item-action";
import Item from "./item";
import styled from "styled-components/macro";
import Modal from "../../../Common/Modal";
import ItemAdd from "./item-add";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {ItemList} from "../../../Common/Types";
import Preloader from "../../../Common/Preloader";


type Props = {
    type: string
}
const ItemContainer: React.FC<Props> = (props) => {
    const arrItems = useSelector(getItems)
    const status = useSelector(getStatus)
    const [isShowModalAdd, setShowModalAdd] = useState(false)
    const [items, setItems] = useState<Array<ItemList>>([])


    const reorder = (list: Array<ItemList>, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(props.type))
    }, [props.type])

    useEffect(() => {
        setItems(arrItems)
    },[arrItems])




    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const newItems = reorder(items, result.source.index, result.destination.index)
        newItems.forEach((item,index: number): void => {
            item.index = index

        })

    }




    const render = () => {
        switch (status) {
            case 'loading': {
                return <Preloader/>
            }
            case 'complete': {
                return (
                    <>
                        <ButtonWrapper>
                            <Button onClick={() => setShowModalAdd(true)}>Добавить</Button>
                            <Button style={{marginTop: '10px'}} onClick={() => dispatch(updateItemsAction(items as Array<object>,props.type))}>Сохранить порядок</Button>
                        </ButtonWrapper>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided) => (
                                    <ul  {...provided.droppableProps}
                                         ref={provided.innerRef}
                                       >
                                        {
                                            items.sort((a: ItemList,b: ItemList) => a.index - b.index).map((item: any, index: number) => {
                                                return (
                                                    <Draggable key={item._id} draggableId={item._id} index={index}>
                                                        {(provided) => (
                                                            <li ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                            >
                                                                <Item req={props.type} {...item}/>
                                                            </li>
                                                        )}
                                                    </Draggable>


                                                )
                                            })
                                        }
                                        {provided.placeholder}
                                    </ul>
                                )}

                            </Droppable>
                        </DragDropContext>

                        {isShowModalAdd && <Modal closeModal={setShowModalAdd} padding={'5px'}>
                            <ItemAdd itemsLength={items.length} closeModal={setShowModalAdd} req={props.type}/>
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

  &:disabled {
    opacity: 0.5;
  }
`
