import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../redux/Admin/src/profile/item-select";
import {getItem} from "../../redux/Admin/src/profile/item-action";
import {NavLink} from 'react-router-dom';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components/macro";
import { descriptionRender } from '../../Common/descriptionSchema';

type Props = {
    route: string
    id: string
}

const ItemRequest:React.FC<Props> = (props) => {

    const arrNav = [
        {name: 'Профили', route: '/profile'},
        {name: 'Вставки', route: '/tape'},
        {name: 'Комплектующие', route: '/accessories'},
        {name: 'Светильники', route: '/light'},
        {name: 'Конструкции', route: '/constructions'},
        {name: 'Ленты и пульты', route: '/led'},
        {name: 'Расходники', route: '/consumables'},
        {name: 'Инструменты', route: '/tools'},
        {name: 'Дополнительное', route: '/additional'},
    ]

    const nameCategory:any = arrNav.filter(i => {
        if (i.route === '/' + props.route){
            return true
        }
    })[0]


    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)
    const findItem: any = arrItem.filter((i: any) => {
        if (i._id === props.id) return true
    })[0]

    const dispatch = useDispatch()
    useEffect(() => {
        if (arrItem.length === 0){
            dispatch(getItem(props.route))
        }
    }, [props.route])

    const render = () => {
        switch (status){
            case 'loading': {
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }

            case 'complete': {
                return <ItemWrapper>
                    <ImgWrapper>
                        <img src={findItem.image} alt=""/>
                    </ImgWrapper>
                    <DescriptionWrapper>
                        {descriptionRender(findItem,props.route)}
                        <NavLink to={'/' + props.route}>Вернуться в категорию: {nameCategory.name}</NavLink>
                    </DescriptionWrapper>

                </ItemWrapper>
            }
        }
    }

    return (
        <div>
            {render()}
        </div>
    );
};

export default ItemRequest;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;
  
`
const ItemWrapper = styled.article`
    display: flex;
    margin-top: 30px;
`

const ImgWrapper = styled.div`
    width: 400px;
  img {
    width: 100%;
   
  }
`

const DescriptionWrapper = styled.div`
  h1 {
    font-size: 30px;
  }
  
  div {
    font-size: 32px;
    dt {
      
    }
    
    dd {
      font-weight: bold;
      white-space: nowrap;
    }
  }
`