import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/Admin/src/profile/item-select";
import {getItem} from "../../../redux/Admin/src/profile/item-action";


type Props = {
    type: string
}
const Item: React.FC<Props> = (props) => {
    const arrItem = useSelector(getItems)
    const status = useSelector(getStatus)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('render ' + props.type)
        dispatch(getItem(props.type))
    }, [props.type])

    const history = useHistory()


    const render = () => {
        switch (status) {
            case 'loading': {
                return <span>загрузка</span>
            }
            case 'complete': {
                return (
                    <>
                        {
                            arrItem.map((item: any) => {
                                return (
                                    <div key={item.id}>
                                        <span>{item.name}</span>
                                        <img src={item.image} alt="img"/>
                                    </div>


                                )
                            })
                        }
                    </>
                )
            }
            default: {
               return <span>загрузка</span>
            }
        }
    }


    return (
        render()
    );
};

export default Item
