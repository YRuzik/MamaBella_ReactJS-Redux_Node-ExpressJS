import LabelBackButton from "../../labelBackButton/LabelBackButton";
import {
    UBIButtonControl,
    UBIButtonDelete,
    UBIContainer,
    UBIFlex,
    UBILabel,
    UBIPersonalData
} from "../userByID/UserByID.style";
import UserAddresses from "../userAddresses/UserAddresses";
import {useParams} from "react-router-dom";
import UserService from "../../../services/UserService";
import {useEffect, useState} from "react";
import {INews} from "../../../interfaces/AuthInterfaces";
import {useDispatch} from "react-redux";
import {setAdminLayout} from "../../../actions/actions";

const NewsByID = () => {

    const dispatch = useDispatch()
    const {id} = useParams()
    const {takeNewsByID} = UserService()
    const [news, setNews] = useState<INews>()

    useEffect(() => {
        dispatch(setAdminLayout(true))
        if (id !== null)
            takeNewsByID(id!).then((data) => setNews(data.data[0]))
    }, [])

    return (
        <UBIContainer>
            <LabelBackButton label={'Данные о новости'}/>
            <UBIFlex style={{marginTop:'14%'}}>
                <div style={{display: 'block'}}>
                <h1>Фото</h1>
                <img src={news?.thumbnail}/>
                </div>
                <div style={{display: 'block', padding: '0 1rem 0 1rem'}}>
                    <h1>Название</h1>
                    <p>{news?.title }</p>
                </div>
                <div style={{display: 'block'}}>
                    <h1>Описание</h1>
                    <p>{news?.description}</p>
                </div>
            </UBIFlex>
        </UBIContainer>
    )
}

export default NewsByID
