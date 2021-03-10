import React from 'react';
import styled from "styled-components/macro";
import { toStringItemTitle } from '../../../../Common/functions';

type Props = {
    name: string,
    material: string,
    type: string,
    size: string,
    priceOneUnit: number,
    priceOneMetre: number,
    technology: string,
    perf: string,
    weight: string,

}
const Profile: React.FC<Props> = (props) => {

    const exceptions = ['_id', 'image', '__v', 'route','priceOneUnit','priceOneMetre','req']
    const inputsArray = toStringItemTitle({...props},exceptions)


    const titleArr: any = []
    inputsArray.forEach(i => {
        titleArr.push(i[1])
    })


    return (
        <DescriptionItem>
            <Title>{titleArr.join(', ')}</Title>
            <Price>
                <p>{props.priceOneMetre}<span>₽/метр.</span></p>
                <p>{props.priceOneUnit}<span>₽/шт.</span></p>
            </Price>
        </DescriptionItem>
    );
};

export default Profile;


const DescriptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 835px){
    flex-direction: column;
  }
`
const Price = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;
  @media (max-width: 800px){
    display: flex;
    justify-content: space-between;
    flex-direction: initial !important;
  }
 
  p {
   font-size: 30px;
    :first-child {
      margin-bottom: 20px;
      @media (max-width: 800px){
        margin-bottom: 0;
      }
    }
    span {
      font-size: 18px;
      margin-left: 5px;
    }
  }
 
`

const Title = styled.h2`
    max-width: 430px;
    font-weight: normal;
    font-size: 20px;
  @media (max-width: 800px){
    margin-bottom: 15px;
  }
`