import React from 'react';
import styled from "styled-components/macro";

type Props = {
    name: string,
    manufacturer: string,
    plinth: string,
    color: string,
    power: string,
    priceOneUnit: number,
    priceOneMetre: number,
    numberLed: number

}
const Led:React.FC<Props> = (props) => {
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
            {props.power && <DescriptionItem>
                <dt>Мощность:</dt>
                <dd>{props.power}</dd>
            </DescriptionItem>
            }
            {props.numberLed && <DescriptionItem>
                <dt>Кол-во диодов на метр:</dt>
                <dd>{props.numberLed}</dd>
            </DescriptionItem>
            }
            {props.color && <DescriptionItem>
                <dt>Цвет:</dt>
                <dd>{props.color}</dd>
            </DescriptionItem>
            }
            {props.priceOneUnit && <DescriptionItem>
                <dt>Цена за упаковку:</dt>
                <dd>{props.priceOneUnit}<span>руб</span></dd>
            </DescriptionItem>
            }
            {props.priceOneMetre && <DescriptionItem>
                <dt>Цена за метр:</dt>
                <dd>{props.priceOneMetre}<span>руб</span></dd>
            </DescriptionItem>
            }
        </>
    );
};

export default Led;


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
