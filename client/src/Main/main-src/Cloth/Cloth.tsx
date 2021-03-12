import React, {useEffect, useMemo} from 'react';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components/macro";
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/Admin/src/profile/item-select";
import {getItem, setStatus} from "../../../redux/Admin/src/profile/item-action";


type Props = {
    route: string
}
const Cloth:React.FC<Props> = (props) => {
    const dispatch = useDispatch()
    const items: any = useSelector(getItems)[0]
    const status = useSelector(getStatus)

    console.log(items)

    useEffect(() => {
        dispatch(getItem(props.route))
    },[props.route])


    const renderTable = () => {
        switch (status) {
            case 'loading': {
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }

            case 'complete': {
                return (
                    <Table>
                        <Tbody>
                            <tr>
                                <th style={{width: '350px'}}>Фактура</th>
                                <th style={{width: '150px'}} colSpan={2}>Цена</th>
                            </tr>
                            <tr>
                                <th>Матовые (MSD Premium)</th>
                                <th>отрезы</th>
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
                                <TdDescription>{items.cloth.descor.label}</TdDescription>
                                <TdPrice colSpan={2}>{items.cloth.descor.price}</TdPrice>
                            </tr>
                            <tr>
                                <th>Дополнительные работы</th>
                                <th colSpan={2}>цена</th>
                            </tr>
                            {Object.entries(items.additional).map((i: any,index) => {
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
                return <LoadingWrapper>
                    <CircularProgress style={{width: '200px', height: '200px', marginTop: '120px'}}/>
                </LoadingWrapper>
            }
        }
    }

    const tableRender = (nameObj: any) => {
        const key: keyof typeof items = nameObj
        return (
            Object.entries(items[key]).map((i: any,index) => {
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
        <div>
            {renderTable()}
        </div>
    );
};

export default Cloth;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`

const Table = styled.table`
  margin: 20px 0;
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