import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/Admin/src/profile/item-select";
import {getItem, updateItemsAction} from "../../../redux/Admin/src/profile/item-action";
import Item from "./item";
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components/macro";
import Modal from "../../../Common/Modal";
import ItemAdd from "./item-add";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";


type Props = {
    type: string
}
const ItemContainer: React.FC<Props> = (props) => {
    const arrItems = useSelector(getItems)
    const status = useSelector(getStatus)
    const [isShowModalAdd, setShowModalAdd] = useState(false)
    const [items, setItems] = useState<typeof arrItems>([])



    const reorder = (list: Array<object>, startIndex: number, endIndex: number) => {
        const result = Array.from(list);
        console.log(result)
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    console.log(items)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(props.type))
    }, [props.type])

    useEffect(() => {
        setItems(arrItems)
    },[arrItems])


    type Item = {
        [key: string]: number | string
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        const newItems = reorder(items, result.source.index, result.destination.index)
        newItems.forEach((item: arrI,index: number) => {
            item.index = index
        })

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
                            <Button style={{marginTop: '10px'}} onClick={() => dispatch(updateItemsAction(items as Array<object>,props.type))}>Сохранить порядок</Button>
                        </ButtonWrapper>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                    <ul  {...provided.droppableProps}
                                         ref={provided.innerRef}
                                       >
                                        {
                                            items.sort((a: object,b: object) => a.index - b.index).map((item: object, index: number) => {
                                                return (
                                                    <Draggable key={item._id} draggableId={item._id} index={index}>
                                                        {(provided, snapshot) => (
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

  &:disabled {
    opacity: 0.5;
  }
`
