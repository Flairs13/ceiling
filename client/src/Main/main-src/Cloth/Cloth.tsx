import React, {useLayoutEffect} from 'react';
import styled from "styled-components/macro";
import {useDispatch, useSelector} from "react-redux";
import { getItems, getStatus } from '../../../redux/common/src/cloth/cloth-select';
import {getItem} from "../../../redux/common/src/cloth/cloth-action";
import Preloader from "../../../Common/Preloader";




type Props = {
    route: string
    status: string
    items: any
}
const Cloth:React.FC<Props> = (props) => {

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
                                <th style={{width: '70%'}}>Фактура</th>
                                <th colSpan={2}>Цена</th>
                            </tr>
                            <tr>
                                <th>Матовые (MSD Premium)</th>
                                <th style={{width: '15%'}}>отрезы</th>
                                <th>в гарпуне</th>
                            </tr>
                            {tableRender('mat')}
                            <tr>
                                <th>Лаковые (MSD Premium)</th>
                                <th>отрезы</th>
                                <th>в гарпуне</th>
                            </tr>
                            {tableRender('lac')}
                            <tr>
                                <th>Эксклюзивные</th>
                                <th>отрезы</th>
                                <th>в гарпуне</th>
                            </tr>
                            {tableRender('exc')}
                            <tr>
                                <th>Ткань</th>
                                <th colSpan={2}>цена</th>
                            </tr>
                            <tr>
                                <TdDescription>{props.items.cloth.descor.label}</TdDescription>
                                <TdPrice colSpan={2}>{props.items.cloth.descor.price}</TdPrice>
                            </tr>
                            <tr>
                                <th>Дополнительные работы</th>
                                <th colSpan={2}>цена</th>
                            </tr>
                            {Object.entries(props.items.additional).map((i: any,index) => {
                                return (
                                    <tr key={index}>
                                        <TdDescription><p style={index < 3  ? {color: 'blue'} : undefined}>{i[1].label}</p></TdDescription>
                                        <TdPrice colSpan={2}><p style={index < 3 ? {color: 'blue'} : undefined}>{i[1].price}</p></TdPrice>
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
            Object.entries(props.items[key]).map((i: any,index) => {
                if (i[1].label === '') return null
                return (
                    <tr key={index}>
                        <TdDescription><p style={index < 3 && key !== 'exc' ? {color: 'blue'} : undefined}>{i[1].label}</p></TdDescription>
                        <TdPrice><p style={index < 3 && key !== 'exc' ? {color: 'blue'} : undefined}>{i[1].valueCut}</p></TdPrice>
                        <TdPrice><p style={index < 3  && key !== 'exc'? {color: 'blue'} : undefined}>{i[1].valueGarp}</p></TdPrice>
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
const ClothContainer:React.FC<PropsContainer> = (props) => {
    const dispatch = useDispatch()
    let items: any = useSelector(getItems)[0]
    const status = useSelector(getStatus)


    useLayoutEffect(() => {
            dispatch(getItem(props.route))
    },[props.route])


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
  @media (max-width: 500px) {
    font-size: 12px;
  }
`

const Tbody = styled.tbody`
  tr {
    border: 1px solid;
  }

  th {
    border: 1px solid;
    padding: 5px;
    white-space: nowrap;
    background-color: var(--table-back);
    @media (max-width: 500px) {
      padding: 2px;
    }
  }

  td {
    border: 1px solid;
    padding: 5px;
    @media (max-width: 500px) {
      padding: 2px;
    }
  }
`
const TdPrice = styled.td`
  width: 80px;
`
const TdDescription = styled.td`
  text-align: start;
`