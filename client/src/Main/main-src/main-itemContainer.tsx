import {CircularProgress} from '@material-ui/core'
import React, {useEffect, useLayoutEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/macro'
import {getItem, setItem, setStatus} from '../../redux/Admin/src/profile/item-action'
import {getItems, getStatus} from '../../redux/Admin/src/profile/item-select'
import MainItem from './main-item'

type Props = {
    arrItem: any
    status: string
}

const MainItemRender: React.FC<Props> = React.memo((props) => {


    const render = () => {
        switch (props.status) {
            case 'loading': {
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }
            case 'complete': {
                return (
                    <ListWrapper>

                        {
                            props.arrItem.map((item: any) => {
                                return (
                                    <MainItem {...item}/>
                                )
                            }).reverse()
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
    )
})

type PropsContainer = {
    route: string
}
const MainItemContainer:React.FC<PropsContainer> = (props) => {

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


const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

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

