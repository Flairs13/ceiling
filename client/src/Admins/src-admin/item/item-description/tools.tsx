import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string
    type: string
    manufacturer: string
    size: string
    priceOneUnit: number


}
const Tools:React.FC<Props> = (props) => {
    return (
        <>
            {props.name && <DescriptionItem>
                <dt>Наименование:</dt>
                <dd>{props.name}</dd>
            </DescriptionItem>
            }
            {props.type && <DescriptionItem>
                <dt>Тип:</dt>
                <dd>{props.type}</dd>
            </DescriptionItem>
            }
            {props.manufacturer && <DescriptionItem>
                <dt>Производитель:</dt>
                <dd>{props.manufacturer}</dd>
            </DescriptionItem>
            }
            {props.size && <DescriptionItem>
                <dt>Размер:</dt>
                <dd>{props.size}</dd>
            </DescriptionItem>
            }

            {props.priceOneUnit && <DescriptionItem>
                <dt>Цена за шт:</dt>
                <dd>{props.priceOneUnit}<span>руб</span></dd>
            </DescriptionItem>
            }
        </>
    );
};

export default Tools;


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
