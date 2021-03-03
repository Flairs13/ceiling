import React, {useRef} from 'react';
import styled from "styled-components/macro";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {updateItemAction, uploadItemAction} from '../../../redux/Admin/src/profile/item-action';
import {ReactComponent as Img} from '../../../assets/images/no-image.svg'
import {useDispatch, useSelector} from "react-redux";
import {getCollection} from "../../../redux/Admin/src/profile/item-select";
import * as yup from 'yup';




type Props = {
    req: string
    closeModal: (flag: boolean) => void
    getItem: (route: string) => void
}

const ItemAdd: React.FC<Props> = (props) => {
    const dispatch = useDispatch()

    const collection = useSelector(getCollection)
    const route = props.req as keyof typeof collection
    const arrCollection = collection[route]

    const srcImg = useRef('')



    const validationSchema = yup.object().shape({
        file: yup.mixed().required('Загрузите фото'),
        priceOneUnit: yup.number(),
        isBig: yup.boolean(),
        priceOneMetre: yup.number().when('priceOneUnit', {
            is: (value: any) => {
                if (value) return yup.number().notRequired()
            },
            otherwise: yup.number().required('Введите цену за метр, или за шт')

        }),

    });

    const initialValues = {file: '',} as any
     arrCollection.forEach((i) => {
        const key: string = Object.keys(i)[0]
         initialValues[key] = ''
    })

    console.log(initialValues)


    const submit = (values: any) => {
        dispatch(uploadItemAction(values,props.req))
        props.closeModal(false)

    }

    console.log(initialValues)

    return (
        <EditorWrapper>
            <Header>Добавить</Header>
            <Forms>
                <Formik validationSchema={validationSchema}  initialValues={initialValues} onSubmit={submit}>
                    {({values, handleSubmit, setFieldValue,errors,isValid, handleChange,handleBlur,dirty}) => (
                        <Form onSubmit={handleSubmit}>
                            <ImgWrapper>
                                {srcImg.current ? <img src={srcImg.current} alt="#"/> : <PhotoSvgIcon/>}

                            </ImgWrapper>
                            <FormsItem>
                                <Label>Images</Label>
                                <input  id="file" name="file" type="file" onChange={(event: any) => {
                                    setFieldValue("file", event.currentTarget.files[0])
                                    srcImg.current = URL.createObjectURL(event.currentTarget.files[0])

                                }}/>
                                <Error name={'file'} component="div"/>
                            </FormsItem>

                            {arrCollection.map((i,index) => {
                                return (
                                    <FormsItem key={index}>
                                        <Label>{Object.entries(i)[0][1]}</Label>
                                        <Input onChange={handleChange}  type='text' name={Object.entries(i)[0][0]}/>
                                        <Error name={Object.entries(i)[0][0]} component='div'/>

                                    </FormsItem>
                                )
                            })}
                            <ButtonWrapper>
                                <Button type="submit">Сохранить</Button>
                            </ButtonWrapper>
                        </Form>
                    )}
                </Formik>
            </Forms>
        </EditorWrapper>
    );
};

export default ItemAdd;


const PhotoSvgIcon = styled(Img)`
  width: 100%;
  height: 100%;
  fill: #9e9e9e;
`



const EditorWrapper = styled.div`
   width: 500px;
`

const Header = styled.div`
    padding: 0 20px;
    border-bottom: 1px solid #e7e8ec;
    display: block;
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    outline: 0;
    color: black;
`



const Forms = styled.section`
  padding: 30px 10px;
`

const ImgWrapper = styled.div`
  width: 180px;
  margin: 0 auto 15px;
  
  img {
    width: 100%;
  }
`

const FormsItem = styled.div`
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: [labels] 30% [controls] 1fr;
  column-gap: 10px;
  align-items: center;
 
`
const Label = styled.label`
  color: #656565;
  justify-self: end;
  grid-column: labels;
`

const Input = styled(Field)`
  background-color: #ffffff;
  border-radius: 3px;
  border: 1px solid #d3d9de;
  color: black;
  font-size: 14px;
  line-height: 16px;
  max-width: 300px;
  height: 25px;
  grid-column: controls;
`

const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
  grid-column: controls;
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
