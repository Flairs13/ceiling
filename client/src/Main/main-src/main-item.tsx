import React from 'react'
import styled from 'styled-components/macro'
import Accessories from '../../Admins/src-admin/item/item-description/accessories'
import Additional from '../../Admins/src-admin/item/item-description/additional'
import Constructions from '../../Admins/src-admin/item/item-description/constructions'
import Consumables from '../../Admins/src-admin/item/item-description/consumables'
import Led from '../../Admins/src-admin/item/item-description/led'
import Light from '../../Admins/src-admin/item/item-description/light'
import Profile from '../../Admins/src-admin/item/item-description/profile'
import Tape from '../../Admins/src-admin/item/item-description/tape'
import Tools from '../../Admins/src-admin/item/item-description/tools'
import {useHistory} from "react-router-dom";
import {descriptionRender} from "../../Common/descriptionSchema";

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
                {descriptionRender(props,props.route)}
            </DescriptionWrapper>
        </ItemWrapper>
    )
}

export default MainItem


const ItemWrapper = styled.li`
  display: flex;
  border: 1px solid var(--main-border);
  border-radius: 5px;
`

const ImgWrapper = styled.div`
  width: 250px;
  

  img {
    width: 100%;
    height: 100%;
  }
`

const DescriptionWrapper = styled.dl`
  font-size: 17px;
`

