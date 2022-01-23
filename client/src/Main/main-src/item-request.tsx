import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCollection, getItems, getStatus} from "../../redux/common/src/item/item-select";
import {getItem} from "../../redux/common/src/item/item-action";
import {NavLink} from 'react-router-dom';
import styled from "styled-components/macro";
import Preloader from "../../Common/Preloader";
import NotFound from "../../Common/404";


type Props = {
    route: string
    id: string
}


const ItemRequest: React.FC<Props> = (props) => {

    const arrNav = [
        {name: 'Профили', route: '/profile'},
        {name: 'Kraab-systems', route: '/profile-kraab'},
        {name: 'Flexy', route: '/profile-flexy'},
        {name: 'Комплектующие', route: '/accessories'},
        {name: 'Светодиодная лента', route: '/led'},
        {name: 'Освещение', route: '/light'},
        {name: 'Вставки', route: '/tape'},
        {name: 'Расходный материал', route: '/consumables'},
        {name: 'Инструмент', route: '/tools'},
    ]

    const prefixRub = ['Цена за шт', 'Цена за метр', 'Цена за упаковку']


    const collection = useSelector(getCollection)
    const route = props.route as keyof typeof collection
    const arrFindCollection = collection[route]
    const nameCategory: any = arrNav.filter(i => {
        if (i.route === '/' + props.route) {
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
        if (arrItem.length === 0) {
            dispatch(getItem(props.route))
        }
    }, [props.route])

    const render = () => {
        switch (status) {
            case 'loading': {
                return <Preloader/>
            }

            case 'complete': {
                if (!findItem) return <NotFound/>
                const arrCharacteristics = []
                // Здесь проходимся циклом по найденой коллекции и добавляем объект из ключа и значения исключая значенияб
                //которые не ввел пользователь в админке в новый одъект и потом пушим его в массив,
                for (let i = 0; i < arrFindCollection.length; i++) {
                    const obj: any = {}
                    const key: any = Object.keys(arrFindCollection[i])
                    const value: any = Object.values(arrFindCollection[i])
                    if (findItem[key] !== '' && findItem[key] !== null) {
                        obj[value] = findItem[key]
                        arrCharacteristics.push(obj)
                    }
                }

                return <ItemWrapper>
                    <ImgWrapper>
                        <img src={findItem.image} alt=""/>
                    </ImgWrapper>
                    <DescriptionWrapper>
                        <h1>Характеристики</h1>
                        <DescriptionItem>
                            {arrCharacteristics.map(i => {
                                const arr: any = Object.entries(i)[0]
                                return <DescriptionContainer key={arr[0]}>
                                    <dt>{arr[0]}</dt>
                                    <dd>{arr[1]}{prefixRub.map(i => {
                                        if (i === arr[0]){
                                            return <span key={i} style={{marginLeft: '5px'}}>₽</span>
                                        }
                                    })}</dd>
                                </DescriptionContainer>
                            })}
                        </DescriptionItem>
                        <LinkBack to={'/' + props.route}>Вернуться в категорию: <span>{nameCategory.name}</span></LinkBack>
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




const ItemWrapper = styled.article`
  display: flex;
  margin: 25px 0;
  @media (max-width: 730px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ImgWrapper = styled.div`
  height: 100%;
  img {
    width: 400px;
    @media (max-width: 980px) {
      width: 350px;
    }
    @media (max-width: 830px) {
      width: 320px;
    }
  }
`

const DescriptionWrapper = styled.div`
  margin-left: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 730px) {
    margin-left: 0;
    margin-top: 20px;
  }
  h1 {
    font-size: 30px;
    margin-bottom: 10px;
  }
`

const DescriptionItem = styled.dl`
  @media (max-width: 730px) {
    margin-bottom: 10px;
  }
`

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4px;
  margin-bottom: 4px;

  @media (max-width: 730px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 495px) {
    grid-template-columns: 1fr 1fr;
  }

  dt {
    display: flex;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    align-items: baseline;
    :after {
      display: block;
      content: "";
      width: 100%;
      border-bottom: 1px dashed #e1e2e5;
      margin: 0 8px;
    }
  }
  
  dd {
    margin-left: 0;
  }
`

const LinkBack = styled(NavLink)`
  margin-top: auto;
  color: var(--main-color);
 
  :hover {
    color: var(--main-hover);
  }
  span {
    font-weight: bold;
  }
  
  @media (max-width: 730px) {
    margin-bottom: 15px;
  }
`