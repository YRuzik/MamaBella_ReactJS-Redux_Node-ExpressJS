import {NewsInfoBody, NewsInfoContainer, NewsInfoText, NewsInfoThumbnail, NewsInfoTitle} from "./NewsInfo.style";
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserService from "../../../../services/UserService";
import {INews} from "../../../../interfaces/AuthInterfaces";

const NewsInfo: FC = () => {
    const {id} = useParams()
    const {takeNewsByID} = UserService()
    const [news, setNews] = useState<INews>()

    useEffect(() => {
        if (id !== null)
            takeNewsByID(id!).then((data) => setNews(data.data[0]))
    }, [])

    return (

        <NewsInfoContainer>
            <NewsInfoThumbnail src={news?.thumbnail}/>
            <NewsInfoBody>
                <hr/>
                <NewsInfoTitle>
                    {news?.title}
                </NewsInfoTitle>
                <hr/>
                <NewsInfoText>
                    <p>
                        {news?.description}
                    </p>
                </NewsInfoText>
            </NewsInfoBody>
        </NewsInfoContainer>
    )
}

export default NewsInfo;
