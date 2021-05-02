import React, {useEffect} from 'react';
import styled from "styled-components/macro";
import {Formik,Form,Field} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {getItem, updateTableAction} from '../../../redux/common/src/item/item-action';
import {getItems, getStatus} from "../../../redux/common/src/item/item-select";
import Preloader from "../../../Common/Preloader";

const Cloth: React.FC = () => {

    const dispatch = useDispatch()
    const items: any = useSelector(getItems)[0]
    const status = useSelector(getStatus)

    useEffect(() => {
       dispatch(getItem('cloth'))
    },[])

    const onSubmit = (values: any) => {
        // dispatch(uploadTableAction(values,'cloth'))
        //Это если что чтобы добавить в таблицу новые свойства
        // а так по задумке в базе только один объект который мы просто апдейтим

        dispatch(updateTableAction(values,'cloth',items._id))
    }

    const renderTable = () => {
        switch (status){
            case 'loading': {
                return <Preloader/>
            }

            case 'complete': {
                return (
                    <Formik initialValues={items} onSubmit={onSubmit}>
                        {({handleChange}) => (
                            <Form>
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
                                        {tableRender('mat',handleChange)}
                                        <tr>
                                            <th>Лаковые (MSD Premium)</th>
                                            <th>отрезы</th>
                                            <th>в гарпуне</th>
                                        </tr>
                                        {tableRender('lac',handleChange)}
                                        <tr>
                                            <th>Эксклюзивные</th>
                                            <th>отрезы</th>
                                            <th>в гарпуне</th>
                                        </tr>
                                        {tableRender('exc',handleChange)}
                                        <tr>
                                            <th>Ткань</th>
                                            <th colSpan={2}>цена</th>
                                        </tr>
                                        <tr>
                                            <TdDescription><Input onChange={handleChange} type='text' name={`cloth.descor.label`}/></TdDescription>
                                            <TdPrice colSpan={2}><Input onChange={handleChange} type='number' name={`cloth.descor.price`}/></TdPrice>
                                        </tr>
                                        <tr>
                                            <th>Дополнительные работы</th>
                                            <th colSpan={2}>цена</th>
                                        </tr>
                                        {Object.entries(initialValue.additional).map((i,index) => {
                                            return (
                                                <tr key={index}>
                                                    <TdDescription><Input onChange={handleChange} type='text' name={`additional.${i[0]}.${Object.keys(i[1])[0]}`}/></TdDescription>
                                                    <TdPrice colSpan={2}><Input onChange={handleChange} type='number' name={`additional.${i[0]}.${Object.keys(i[1])[1]}`}/></TdPrice>
                                                </tr>
                                            )
                                        })}
                                    </Tbody>
                                </Table>
                                <ButtonWrapper>
                                    <Button type='submit'>Сохранить</Button>
                                </ButtonWrapper>
                            </Form>
                        )}
                    </Formik>
                )
            }
        }
    }

    const initialValue = {
        mat: {
            white240: {
                label: 'Мат (белый) 140-240',
                valueCut: 78,
                valueGarp: 98,
            },
            white320: {
                label: 'Мат (белый) 270-320',
                valueCut: 78,
                valueGarp: 98,
            },
            white500: {
                label: 'Мат (белый) 400-500',
                valueCut: 108,
                valueGarp: 128,
            },
            color307_501_507: {
                label: 'Мат (цветной 307, 501, 507) 320',
                valueCut: 100,
                valueGarp: 120,
            },
            otherColor: {
                label: 'Мат (другие цвета) 320',
                valueCut: 140,
                valueGarp: 160,
            },
            color500: {
                label: 'Мат (цветной 501) 500',
                valueCut: 145,
                valueGarp: 165,
            },
            additionalField_1: {
                label: '',
                valueCut: 0,
                valueGarp: 0,
            },
            additionalField_2: {
                label: '',
                valueCut: 0,
                valueGarp: 0,
            },

        },
        lac: {
            white240: {
                label: 'Лак (белый) 140-240',
                valueCut: 78,
                valueGarp: 98,
            },
            white320: {
                label: 'Лак (белый) 270-320',
                valueCut: 78,
                valueGarp: 98,
            },
            white500: {
                label: 'Лак (белый) 400-500',
                valueCut: 108,
                valueGarp: 128,
            },
            color307_501_507: {
                label: 'Лак (цветной 307, 501, 507) 320',
                valueCut: 100,
                valueGarp: 120,
            },
            otherColor: {
                label: 'Лак (другие цвета) 320',
                valueCut: 140,
                valueGarp: 160,
            },
            color500: {
                label: 'Лак (цветной 501) 500',
                valueCut: 145,
                valueGarp: 165,
            },
            additionalField_1: {
                label: '',
                valueCut: 0,
                valueGarp: 0,
            },
            additionalField_2: {
                label: '',
                valueCut: 0,
                valueGarp: 0,
            },

        } ,
        exc: {
            finca: {
                label: 'Finca (Венецианская штукатурка)',
                valueCut: 78,
                valueGarp: 98,
            },
            transparent: {
                label: 'Полупрозрачная',
                valueCut: 78,
                valueGarp: 98,
            },
            pongsM: {
                label: 'Pongs M (белый) 270-325',
                valueCut: 108,
                valueGarp: 128,
            },
            pongsS_L: {
                label: 'Pongs S, L (белый) 270-325',
                valueCut: 100,
                valueGarp: 120,
            },
        } ,
        cloth: {
            descor: {
                label: 'Descor (050, 069) 3,1/3,5/4,1/4,5/5,05',
                price: 370,
            },
        },
        additional: {
            angle: {
                label: 'Обработка углов (4шт бесплатно)',
                price: '40'
            },
            curv: {
                label: 'Криволинейная выкройка, м.п',
                price: '140',
            },
            cut: {
                label: 'Внутренний вырез, м.п',
                price: '140',
            },
            overlap: {
                label: 'Перекрой полотна, м.п',
                price: '140',
            },
            solder: {
                label: 'Спайка полотен, м.п',
                price: '140',
            },
        },
    } // оставить для добавления новых полей!


    const tableRender = (nameObj: any,handleChange: any) => {
        const key: keyof typeof initialValue = nameObj
        return (
            Object.entries(initialValue[key]).map((i) => {
                return (
                    <tr>
                        <TdDescription><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1])[0]}`}/></TdDescription>
                        <TdPrice><Input onChange={handleChange} type='number' name={`${nameObj}.${i[0]}.${Object.keys(i[1])[1]}`}/></TdPrice>
                        <TdPrice><Input onChange={handleChange} type='number' name={`${nameObj}.${i[0]}.${Object.keys(i[1])[2]}`}/></TdPrice>
                    </tr>
                )
            })
        )
    }

    return (
        <ClothWrapper>
            <Container>
                {renderTable()}
            </Container>
        </ClothWrapper>
    );
};

export default Cloth;

const ClothWrapper = styled.main`

`

const Table = styled.table`
  border: 1px solid;
  text-align: center;
  width: 100%;
  @media (max-width: 500px){
    font-size: 12px;
  }
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`
const Tbody = styled.tbody`
  tr {
    border: 1px solid;
  }
  th {
   border: 1px solid;
   padding: 5px;
    @media (max-width: 500px){
      padding: 2px;
    }
  }
  td {
   border: 1px solid;
   padding: 5px;
    @media (max-width: 500px){
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

const Input = styled(Field)`
  border: none;
  width: 100%;
`



const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Button = styled.button`
    padding: 7px 16px 8px;
    margin: 0;
    cursor: pointer;
    text-align: center;
    background-color: #5181b8;
    border: 0;
    border-radius: 4px;
    color: #fff;
    &:hover {
    opacity: 0.88;
    }
    &:active {
    background-color: #4a76a8;
    padding-top: 8px;
    padding-bottom: 7px;
    }
    &:disabled{
    opacity: 0.5;
    }
`
