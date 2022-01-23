import React, {useLayoutEffect} from 'react';
import styled from "styled-components/macro";
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from '../../../redux/common/src/cloth/cloth-select';
import {getItem} from "../../../redux/common/src/cloth/cloth-action";
import Preloader from "../../../Common/Preloader";


type Props = {
  route: string
  status: string
  items: any
}
const Cloth: React.FC<Props> = (props) => {

  const renderTable = () => {
    switch (props.status) {
      case 'loading': {
        return <Preloader/>
      }

      case 'complete': {
        return (
          <Table>
            <Tbody>
              <tr>
                <ThHeader colSpan={4}>ПВХ полотна в гарпуне</ThHeader>
              </tr>
              <TrColumn>
                <th style={{width: '70%'}}>Фактура</th>
                <th>Цвет</th>
                <th>Ширина</th>
                <th>Цена м2</th>
              </TrColumn>
              {tableRender('facture')}
              <tr>
                <ThHeader colSpan={4}>Ткань</ThHeader>
              </tr>
              <TrColumn>
                <th style={{width: '70%'}}>Фактура</th>
                <th>Цвет</th>
                <th>Ширина</th>
                <th>Цена м2</th>
              </TrColumn>
              {tableRender('cloth')}
              <tr>
                <th>Дополнительные работы</th>
                <th colSpan={3}>цена</th>
              </tr>
              {Object.entries(props.items.additional).map((i: any,index) => {
                if (i[1].label === '') return null
                  return (
                      <tr key={index}>
                          <TdDescription><p>{i[1].label}</p></TdDescription>
                          <TdPrice colSpan={3}><p>{i[1].price}</p></TdPrice>
                      </tr>
                  )
              })}
            </Tbody>
          </Table>
        )
      }
      default: {
        return <Preloader/>
      }
    }
  }

  const tableRender = (nameObj: any) => {
    const key: keyof typeof props.items = nameObj
    return (
      Object.entries(props.items[key]).map((i: any, index) => {
        if (i[1].label === '') return null
        return (
          <tr key={index}>
            <TdDescription><p>{i[1].label}</p></TdDescription>
            <TdPrice><p>{i[1].color}</p></TdPrice>
            <TdPrice><p>{i[1].width}</p></TdPrice>
            <TdPrice><p>{i[1].price}</p></TdPrice>
          </tr>
        )
      })
    )
  }


  return (
    renderTable()
  );
};


type PropsContainer = {
  route: string
}
const ClothContainer: React.FC<PropsContainer> = (props) => {
  const dispatch = useDispatch()
  let items: any = useSelector(getItems)[0]
  const status = useSelector(getStatus)


  useLayoutEffect(() => {
    dispatch(getItem(props.route))
  }, [props.route])


  return (
    <Cloth route={props.route} items={items} status={status}/>
  );
};

export default ClothContainer;


const Table = styled.table`
  margin: 40px 0;
  border: 1px solid;
  text-align: center;
  width: 100%;
  @media (max-width: 810px) {
    font-size: 12px;
  }
  @media (max-width: 450px) {
    font-size: 11px;
  }
  @media (max-width: 415px) {
    font-size: 10px;
  }
  @media (max-width: 390px) {
    font-size: 9px;
  }
`

const Tbody = styled.tbody`
  tr {
    border: 1px solid;
  }

  th {
    padding: 5px;
    white-space: nowrap;
    background-color: var(--table-back);
    @media (max-width: 810px) {
      padding: 2px;
    }
    @media (max-width: 450px) {
      padding: 1px;
    }
  }

  td {
    border: 1px solid;
    padding: 5px;
    white-space: normal;
    @media (max-width: 810px) {
      padding: 2px;
    }
    @media (max-width: 450px) {
      padding: 1px;
    }
  }
`
const TdPrice = styled.td`
  width: 80px;
`
const TdDescription = styled.td`
  text-align: start;
`
const ThHeader = styled.th`
  background-color: black !important;
  color: white ;
  opacity: 0.75;
`
const TrColumn = styled.tr`
  th {
    border: 1px solid;
  }
`