import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string
    manufacturer: string
    size: string
    thickness: string
    priceOneUnit: number
    priceOneMetre: number
    priceOnePack: number

}
const Consumables:React.FC<Props> = (props) => {
    return (
        <>
            {props.name && <DescriptionItem>
                <dt>Наименование:</dt>
                <dd>{props.name}</dd>
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
            {props.thickness && <DescriptionItem>
                <dt>Толщина:</dt>
                <dd>{props.thickness}</dd>
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

export default Consumables;


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
