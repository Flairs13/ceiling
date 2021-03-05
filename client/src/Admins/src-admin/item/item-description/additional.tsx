import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string
    type: string
    manufacturer: string
    color: string
    size: string
    priceOneUnit: number
    priceOneMetre: number
    priceOnePack: number

}
const Additional:React.FC<Props> = (props) => {
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
            {props.color && <DescriptionItem>
                <dt>Цвет:</dt>
                <dd>{props.color}</dd>
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
            {props.priceOneMetre && <DescriptionItem>
                <dt>Цена за метр:</dt>
                <dd>{props.priceOneMetre}<span>руб</span></dd>
            </DescriptionItem>
            }
            {props.priceOnePack && <DescriptionItem>
                <dt>Цена за упаковку:</dt>
                <dd>{props.priceOneMetre}<span>руб</span></dd>
            </DescriptionItem>
            }
        </>
    );
};

export default Additional;


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
