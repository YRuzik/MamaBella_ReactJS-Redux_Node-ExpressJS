import LabelBackButton from "../../labelBackButton/LabelBackButton";
import {useDispatch} from "react-redux";
import {FC, useEffect, useState} from "react";
import {setAdminLayout} from "../../../actions/actions";
import {
    TBody,
    TBodyTD,
    TBodyTR,
    THead,
    THeadLabels,
    UserTableContainer,
    UserTableWrapper
} from "../userTable/UserTable.style";
import {useNavigate} from "react-router-dom";
import {INews} from "../../../interfaces/AuthInterfaces";
import UserService from "../../../services/UserService";

const AllNewsPage = () => {

    const dispatch = useDispatch()
    const [news, setNews] = useState<INews[]>([])
    const {takeNews} = UserService()

    useEffect(() => {
        dispatch(setAdminLayout(true))
        takeNews().then((data) => setNews(data.data))
    }, [])

    return (
        <>
            <LabelBackButton label={'Все новости'}/>
            <UserTableWrapper style={{maxHeight: '45rem', overflowY: "scroll"}}>
                <UserTableContainer>
                    <THead>
                        <tr>
                            <THeadLabels>Картинка</THeadLabels>
                            <THeadLabels>ID</THeadLabels>
                            <THeadLabels>Название</THeadLabels>
                            <THeadLabels>Описание</THeadLabels>
                        </tr>
                    </THead>
                    <TBody>
                        {news.map(({...props}: any, index: number) => (
                            <NewsTableItem {...props} key={index}/>
                        ))}
                    </TBody>
                </UserTableContainer>
            </UserTableWrapper>
        </>
    )
}

export default AllNewsPage

const NewsTableItem: FC<INews> = ({id, description, thumbnail, title}) => {

    const navigate = useNavigate();

    const checkLength = (stroke: string) => {
        if(stroke.length > 30) {
            return stroke.slice(0, 30) + '...'
        }
        return stroke
    }

    return (
        <TBodyTR onClick={() => navigate(`/admin/news/${id}`)}>
            <TBodyTD style={{width: '16%', height: '120%'}}>
                <img width={'80%'} src={thumbnail}/>
            </TBodyTD>
            <TBodyTD style={{opacity: '0.6'}}>
                {id}
            </TBodyTD>
            <TBodyTD>
                {checkLength(title)}
            </TBodyTD>
            <TBodyTD>
                {checkLength(description)}
            </TBodyTD>
        </TBodyTR>

    )
}
