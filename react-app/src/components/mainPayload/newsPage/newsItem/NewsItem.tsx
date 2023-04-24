import {NewsItemBody, NewsItemContainer, NewsItemText, NewsItemThumbnail, NewsItemTitle} from "./NewsItem.style";
import {FC} from "react";
import {Link} from "react-router-dom";

type GreetingsProps = {
    thumbnail: string;
}

const NewsItem: FC<GreetingsProps> = ({thumbnail}) => {
    const id = '1'
    return (
        <Link to={`/news/${id}`}>
            <NewsItemContainer>
                <NewsItemThumbnail src={thumbnail}/>
                <NewsItemBody>
                    <NewsItemTitle>
                        Супер новость
                    </NewsItemTitle>
                    <hr/>
                    <NewsItemText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus.
                    </NewsItemText>
                </NewsItemBody>
            </NewsItemContainer>
        </Link>
    )
}

export default NewsItem;
