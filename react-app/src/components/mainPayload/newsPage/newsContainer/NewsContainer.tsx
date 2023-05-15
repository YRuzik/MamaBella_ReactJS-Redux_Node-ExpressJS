import {PersonalAccountContainer} from "../../personalAccountPage/PersonalAccountPage.style";
import {Grid} from "@mui/material";
import NewsItem from "../newsItem/NewsItem";
import {useEffect, useState} from "react";
import UserService from "../../../../services/UserService";
import {INews} from "../../../../interfaces/AuthInterfaces";

const NewsContainer = () => {
    const [news, setNews] = useState<INews[]>([])
    const {takeNews} = UserService()

    useEffect(() => {
        takeNews().then((data) => setNews(data.data))
    }, [])
    return (
        <PersonalAccountContainer style={{paddingBottom: '1rem'}}>
            <h1 style={{color: "white", textAlign: "start", paddingBottom: '1rem'}}>Новости</h1>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {news.map(({...props}: any, index: number) => (
                    <Grid xs={2} sm={4} md={4} key={index} item={true}>
                        <NewsItem {...props}/>
                    </Grid>
                ))}
            </Grid>
        </PersonalAccountContainer>
    )
}

export default NewsContainer;
