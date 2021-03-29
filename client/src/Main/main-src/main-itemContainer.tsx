import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/macro'
import {getItem} from '../../redux/common/src/item/item-action'
import {getItems, getStatus} from '../../redux/common/src/item/item-select'
import MainItem from './main-item'
import Preloader from "../../Common/Preloader";

type Props = {
    arrItem: any
    status: string
}

const MainItemRender: React.FC<Props> = React.memo((props) => {


    const render = () => {
        switch (props.status) {
            case 'loading': {
                return <Preloader/>
            }
            case 'complete': {
                return (
                    <ListWrapper>

                        {
                            props.arrItem.sort((a: any, b: any) => a.index - b.index).map((item: any) => {
                                return (
                                    <MainItem key={item._id} {...item}/>
                                )
                            })
                        }

                    </ListWrapper>
                )
            }
            default: {
                return <Preloader/>
            }
        }
    }

    return (
        render()
    )
})

type PropsContainer = {
    route: string
}
const MainItemContainer: React.FC<PropsContainer> = (props) => {

    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(props.route))

    }, [props.route])

    return (
        <MainItemRender arrItem={arrItem} status={status}/>
    );
};

export default MainItemContainer;


const ListWrapper = styled.ul`
  padding: 15px 1px;


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

