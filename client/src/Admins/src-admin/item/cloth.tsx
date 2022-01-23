import React, {useEffect} from 'react';
import styled from "styled-components/macro";
import {Formik, Form, Field} from 'formik';
import {useDispatch, useSelector} from "react-redux";
import {getItem, updateTableAction, uploadTableAction} from '../../../redux/common/src/item/item-action';
import {getItems, getStatus} from "../../../redux/common/src/item/item-select";
import Preloader from "../../../Common/Preloader";

const Cloth: React.FC = () => {

  const dispatch = useDispatch()
  const items: any = useSelector(getItems)[0]
  const status = useSelector(getStatus)

  useEffect(() => {
    dispatch(getItem('cloth'))
  }, [])

  const onSubmit = (values: any) => {
    debugger
    console.log(values)
    // dispatch(uploadTableAction(values,'cloth'))
    //Это если что чтобы добавить в таблицу новые свойства
    // а так по задумке в базе только один объект который мы просто апдейтим

    dispatch(updateTableAction(values, 'cloth', items._id))
  }

  const renderTable = (items: any) => {
    switch (status) {
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
                      <th style={{width: '350px'}} colSpan={4}>ПВХ полотна в гарпуне</th>
                      {/*<th style={{width: '150px'}} colSpan={2}>Цена</th>*/}
                    </tr>
                    <tr>
                      <th>Фактура</th>
                      <th>Цвет</th>
                      <th>Ширина</th>
                      <th>Цена м2</th>
                    </tr>
                    {tableRender('facture', handleChange)}
                    <tr>
                      <th style={{width: '350px'}} colSpan={4}>Ткань</th>
                    </tr>
                    <tr>
                      <th>Фактура</th>
                      <th>Цвет</th>
                      <th>Ширина</th>
                      <th>Цена м2</th>
                    </tr>
                    {tableRender('cloth', handleChange)}
                    <tr>
                      <th>Дополнительные услуги производства</th>
                      <th colSpan={3}>цена</th>
                    </tr>
                    {getTableAdditional('additional', handleChange)}
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

    },
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
    },
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

  const getFields = (count: number, interface1: any) => {
    const nameField = 'additionalField_'
    const obj: any = {}
    for(let i = 0; i < count; i++){
      obj[nameField + i] = interface1
    }
    return obj
  }



  const initialValue1 = {
    facture: getFields(20,{
      label: '',
      color: '',
      width: 0,
      price: 0,
    }),
    cloth: getFields(10,{
      label: '',
      color: '',
      width: 0,
      price: 0,
    }),
    additional: getFields(15,{
      label: '',
      price: 0,
    }),
  }

  const tableRender = (nameObj: any, handleChange: any) => {
    const key: keyof typeof initialValue1 = nameObj
    return (
      Object.entries(initialValue1[key]).map((i) => {
        return (
          <tr>
            <TdDescription><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1] as any)[0]}`}/></TdDescription>
            <TdPrice><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1] as any)[1]}`}/></TdPrice>
            <TdPrice><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1] as any)[2]}`}/></TdPrice>
            <TdPrice><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1] as any)[3]}`}/></TdPrice>
          </tr>
        )
      })
    )
  }

  const getTableAdditional = (nameObj: any, handleChange: any) => {
    const key: keyof typeof initialValue1 = nameObj
    return (
      Object.entries(initialValue1[key]).map((i) => {
        return (
          <tr>
            <TdDescription><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1] as any)[0]}`}/></TdDescription>
            <TdPrice colSpan={3}><Input onChange={handleChange} type='text' name={`${nameObj}.${i[0]}.${Object.keys(i[1] as any)[1]}`}/></TdPrice>
          </tr>
        )
      })
    )
  }

  return (
    <ClothWrapper>
      <Container>
        {renderTable(items)}
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
  @media (max-width: 500px) {
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
  width: 90px;
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

  &:disabled {
    opacity: 0.5;
  }
`
