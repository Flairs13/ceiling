import React from 'react';
import styled from "styled-components/macro";

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
const Profile:React.FC<Props> = (props) => {
    return (
        <>
            <DescriptionItem>
                <dt>Наименование:</dt>
                <dd>{props.name}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Материал:</dt>
                <dd>{props.material}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Тип:</dt>
                <dd>{props.type}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Размер:</dt>
                <dd>{props.size}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Технология:</dt>
                <dd>{props.technology}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Вид:</dt>
                <dd>{props.perf}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Вес:</dt>
                <dd>{props.weight}</dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Цена за метр:</dt>
                <dd>{props.priceOneMetre}<span>руб</span></dd>
            </DescriptionItem>
            <DescriptionItem>
                <dt>Цена за шт:</dt>
                <dd>{props.priceOneUnit}<span>руб</span></dd>
            </DescriptionItem>
        </>
    );
};

export default Profile;


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
