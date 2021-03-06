import React, {useRef} from 'react';
import styled from "styled-components/macro";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {updateItemAction} from '../../../redux/common/src/item/item-action';
import {useDispatch} from "react-redux";
import {IconButton} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';
import { toStringItemTitle } from '../../../Common/functions';

type Props = {
    image: string
    req: string
    _id: string
    closeModal: (flag: boolean) => void
}

const ItemEditor: React.FC<Props> = (props) => {
    const srcImg = useRef(props.image)
    const dispatch = useDispatch()
    const exceptions = ['_id', 'image', '__v', 'req', 'getItem','closeModal','fnc']
    const inputsArray = toStringItemTitle({...props},exceptions)


    const submit = (values: any) => {
        dispatch(updateItemAction(values, props.req, props._id))
    }



    return (
        <EditorWrapper>
            <Header>
                <p>Редактировать</p>
                <IconButton onClick={() => props.closeModal(false)} aria-label="delete">
                    <ClearIcon />
                </IconButton>
            </Header>
            <Forms>
                <Formik initialValues={Object.fromEntries(inputsArray)} onSubmit={submit}>
                    {({setFieldValue, handleChange, handleBlur, dirty}) => (
                        <Form>
                            <ImgWrapper>
                                <img src={srcImg.current} alt="#"/>
                            </ImgWrapper>
                            <FormsItem>
                                <Label>Images</Label>
                                <input id="file" name="file" type="file" onChange={(event: any) => {
                                    setFieldValue("file", event.currentTarget.files[0])
                                    srcImg.current = URL.createObjectURL(event.currentTarget.files[0])

                                }}/>
                            </FormsItem>

                            {inputsArray.map((i, index) => {

                                return (
                                    <FormsItem key={index}>
                                        <Label>{i[0]}</Label>
                                        <Input onChange={handleChange} onBlur={handleBlur} type='text' name={i[0]}/>
                                    </FormsItem>
                                )
                            })}
                            <ButtonWrapper>
                                <Button disabled={!dirty} type="submit">Сохранить</Button>
                            </ButtonWrapper>
                        </Form>
                    )}
                </Formik>
            </Forms>
        </EditorWrapper>
    );
};

export default ItemEditor;


const EditorWrapper = styled.div`
   width: 500px;
   @media(max-width: 738px) {
    min-width: 200px;
    max-width: 350px;
  }
`

const Header = styled.div`
    padding: 0 20px;
    border-bottom: 1px solid #e7e8ec;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    line-height: 54px;
    font-size: 16px;
    outline: 0;
    color: black;
`


const Forms = styled.section`
  padding: 30px 10px;
    @media(max-width: 738px) {
    max-height: 400px;
    overflow-y: auto;
  }
`

const ImgWrapper = styled.div`
  width: 180px;
  margin: 0 auto 15px;
  
  img {
    width: 100%;
  }
   @media(max-width: 738px) {
    width: 90px;
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
   @media(max-width: 738px) {
    justify-self: start;
  }
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
  
    @media(max-width: 738px) {
    width: 100%;
    justify-self: end;
  }
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
