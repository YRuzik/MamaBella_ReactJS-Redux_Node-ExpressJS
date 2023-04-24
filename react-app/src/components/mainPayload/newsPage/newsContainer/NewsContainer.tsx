import {PersonalAccountContainer} from "../../personalAccountPage/PersonalAccountPage.style";
import {Grid} from "@mui/material";
import NewsItem from "../newsItem/NewsItem";

const NewsContainer = () => {
    const array = [
        {thumbnail: 'https://sushi-pizza-burger.ru/wp-content/uploads/2022/04/domashnyaya-1536x1024.jpg'},
        {thumbnail: 'https://telegra.ph/file/3e4b55f3561026ed2706f.jpg'},
        {thumbnail: 'https://okeansushi.ru/templates/sushi/blog/pitstsa-margarita-istoriya-sostav-retsept-3.jpg'},
        {thumbnail: 'http://elite-sokolniki.ru/img/pucamargaruta.jpg'},
        {thumbnail: 'https://p0.zoon.ru/preview/ZovKdhRXs3X-9ac3dPhcoA/2400x1500x85/1/c/d/original_5ffe2d03d5094f3a8c274020_60b326b92c0fc.jpg'},
        {thumbnail: 'https://kartinkin.net/uploads/posts/2021-03/1617152716_9-p-pitstsa-pepperoni-krasivo-12.jpg'},
        {thumbnail: 'https://cdn.puzzlegarage.com/img/puzzle/11/1809_preview_r.v1.jpg'},
        {thumbnail: 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663776384_1-mykaleidoscope-ru-p-motsarella-dlya-pitstsi-yeda-krasivo-1.jpg'},
        {thumbnail: 'https://sushi-pizza-burger.ru/wp-content/uploads/2022/04/domashnyaya-1536x1024.jpg'},
    ]
    return (
        <PersonalAccountContainer style={{paddingBottom: '1rem'}}>
            <h1 style={{color: "white", textAlign: "start", paddingBottom: '1rem'}}>Новости</h1>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {array.map(({...props}: any, index: number) => (
                    <Grid xs={2} sm={4} md={4} key={index} item={true}>
                        <NewsItem {...props}/>
                    </Grid>
                ))}
            </Grid>
        </PersonalAccountContainer>
    )
}

export default NewsContainer;
