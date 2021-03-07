import {CircularProgress} from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Container } from '../../Common/CSS/src'
import { getItem } from '../../redux/Admin/src/profile/item-action'
import { getItems, getStatus } from '../../redux/Admin/src/profile/item-select'
import MainItem from './main-item'

type Props = {
  route: string
}

const MainItemContainer:React.FC<Props> = (props) => {

    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getItem(props.route))
  }, [props.route])


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
                                <Container>
                                    <ListWrapper>
                                        <MainItem route={props.route} {...item}/>
                                    </ListWrapper>
                                </Container>



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
  )
}

export default MainItemContainer


const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  
`

const ListWrapper = styled.ul`
    margin-top: 20px;
`
