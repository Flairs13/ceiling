import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string,
    manufacturer: string,
    size: string,
    priceOneUnit: number,

}
const Accessories:React.FC<Props> = (props) => {
    return (
        <>
            <DescriptionItem>
                <dt>Наименование:</dt>
                <dd>{props.name}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Производитель:</dt>
                <dd>{props.manufacturer}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Размер:</dt>
                <dd>{props.size}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Цена за шт:</dt>
                <dd>{props.priceOneUnit}<span>руб</span></dd>
            </DescriptionItem>
        </>
    );
};

export default Accessories;


const DescriptionItem = styled.div`
  font-size: 15px;
  display: flex;
  margin-bottom: 10px;
  dt {
    margin-right: 5px;
    color: #828282;
  } 
  dd {
    color: #2a5885;;
    span {
      margin-left: 2px;
    }
  }
`
