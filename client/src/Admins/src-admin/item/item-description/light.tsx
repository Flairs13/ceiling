import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string,
    manufacturer: string,
    plinth: string,
    color: string,
    power: string,
    priceOneUnit: number,

}
const Light:React.FC<Props> = (props) => {
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
                <dt>Цоколь:</dt>
                <dd>{props.plinth}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Цвет:</dt>
                <dd>{props.color}</dd>
            </DescriptionItem>
            {props.power && <DescriptionItem>
                                <dt>Мощность:</dt>
                                <dd>{props.power}</dd>
                             </DescriptionItem>
            }
            <DescriptionItem>
                <dt>Цена за шт:</dt>
                <dd>{props.priceOneUnit}<span>руб</span></dd>
            </DescriptionItem>
        </>
    );
};

export default Light;


const DescriptionItem = styled.div`
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
