import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string,
    type: string,
    priceOneUnit: number,
    priceOneMetre: number,
    technology: string,

}
const Tape: React.FC<Props> = (props) => {
    return (
        <DescriptionItem>
            <Title>{props.name + ','}{props.type ? props.type + ',' : null}{props.technology ? props.technology + ',' : null}</Title>
            <Price>
                <p>{props.priceOneMetre}<span>₽/метр.</span></p>
            </Price>
        </DescriptionItem>
    )
};

export default Tape;


const DescriptionItem = styled.div`
  display: flex;
  justify-content: space-between;
`
const Price = styled.div`
  color: rgb(51, 51, 51);
  font-weight: bold;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    flex-direction: initial !important;
  }

  p {
    font-size: 30px;

    :first-child {
      margin-bottom: 20px;
      @media (max-width: 800px) {
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
  max-width: 400px;
  font-weight: normal;
  font-size: 20px;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`