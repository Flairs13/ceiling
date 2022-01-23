import React from 'react';
import styled from "styled-components/macro";
import { toStringItemTitle } from '../../../../Common/functions';



type Props = {
    priceOneUnit: number,
    priceOneMetre: number,
    priceOnePack: number,
}




const DescriptionItem: React.FC<Props> = (props) => {
    const exceptions = ['_id', 'image', '__v', 'route','priceOneUnit','priceOneMetre','req','index']
    const inputsArray = toStringItemTitle({...props},exceptions)

    const titleArr: any = []
    inputsArray.forEach((i: any) => {
        if (i[1] !== '' && i[1] !== null){
            titleArr.push(i[1])
        }

    })


    return (
        <DescriptionItemWrapper>
            <Title>{titleArr.join(', ')}</Title>
            <Price>
                {props.priceOneMetre && <p>{props.priceOneMetre}<span>₽/метр.</span></p>}
                {props.priceOneUnit && <p>{props.priceOneUnit}<span>₽/шт.</span></p>}
                {props.priceOnePack && <p>{props.priceOnePack}<span>₽/упаковка.</span></p>}

            </Price>
        </DescriptionItemWrapper>
    );
};

export default DescriptionItem;


const DescriptionItemWrapper = styled.div`
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
      @media (max-width: 500px){
          font-size: 20px;
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
    @media (max-width: 500px){
        font-size: 17px;
    }
`