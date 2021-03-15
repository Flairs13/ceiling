import React from 'react'
import styled from 'styled-components/macro'
import Accessories from '../../Admins/src-admin/item/item-description/accessories'
import Additional from '../../Admins/src-admin/item/item-description/additional'
import Constructions from '../../Admins/src-admin/item/item-description/constructions'
import Consumables from '../../Admins/src-admin/item/item-description/consumables'
import Led from '../../Admins/src-admin/item/item-description/led'
import Light from '../../Admins/src-admin/item/item-description/light'
import Profile from '../../Admins/src-admin/item/item-description/DescriptionItem'
import Tape from '../../Admins/src-admin/item/item-description/tape'
import Tools from '../../Admins/src-admin/item/item-description/tools'
import {useHistory} from "react-router-dom";
import {descriptionRender} from "../../Common/descriptionSchema";
import DescriptionItem from '../../Admins/src-admin/item/item-description/DescriptionItem'

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
    route: string
}

const MainItem: React.FC<Props> = (props) => {

    const history = useHistory()
    const test = () => {
        history.push( history.location.pathname + '/' + props._id)

    }



    return (
        <ItemWrapper>
            <ImgWrapper onClick={test}>
                <img src={props.image} alt="#"/>
            </ImgWrapper>
            <DescriptionWrapper>
                <DescriptionItem {...props}/>
            </DescriptionWrapper>
        </ItemWrapper>
    )
}

export default MainItem


const ItemWrapper = styled.li`
  display: flex;
  box-shadow: 0 1px 0 0 #d3d9de,0 0 0 1px #e7e8ec;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  @media (max-width: 800px){
    flex-direction: column;
    align-items: center;
  }
`

const ImgWrapper = styled.div`
  
  img {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 800px){
    margin-bottom: 10px;
  }
`

const DescriptionWrapper = styled.div`
  font-size: 18px;
  margin-left: 15px;
  width: 100%;

  @media (max-width: 800px){
    margin-left: 0;
    font-size: 15px;
  }
  
  div {
    @media (max-width: 800px){
      flex-direction: column;
    }
  }
  
`

