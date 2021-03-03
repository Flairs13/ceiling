import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string,
    type: string,
    priceOneUnit: number,
    priceOneMetre: number,
    technology: string,

}
const Tape:React.FC<Props> = (props) => {
    return (
        <>
            <DescriptionItem>
                <dt>Наименование:</dt>
                <dd>{props.name}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Тип:</dt>
                <dd>{props.type}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Технология:</dt>
                <dd>{props.technology}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Цена за метр:</dt>
                <dd>{props.priceOneMetre}<span>руб</span></dd>
            </DescriptionItem>
        </>
    );
};

export default Tape;


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
