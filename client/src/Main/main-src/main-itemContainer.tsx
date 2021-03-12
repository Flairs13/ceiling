import {CircularProgress} from '@material-ui/core'
import React, {useEffect, useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components/macro'
import {Container} from '../../Common/CSS/src'
import {getItem, setStatus} from '../../redux/Admin/src/profile/item-action'
import {getItems, getStatus} from '../../redux/Admin/src/profile/item-select'
import MainItem from './main-item'

type Props = {
    route: string
}

const MainItemContainer: React.FC<Props> = (props) => {

    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getItem(props.route))
    }, [props.route])

    useMemo(() => {
        dispatch(setStatus('loading'))
    },[props.route])

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
                            arrItem.map((item: any) => {
                                return (
                                    <MainItem route={props.route} {...item}/>
                                )
                            }).reverse()
                        }

                    </ListWrapper>
                )
            }
            default: {
                return <span>загрузка</span>
            }
        }
    }

    return (
        render()
    )
}

export default MainItemContainer


const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const ListWrapper = styled.ul`
  padding: 15px 0;
  
  
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

