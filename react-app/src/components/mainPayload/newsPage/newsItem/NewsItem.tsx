import {NewsItemBody, NewsItemContainer, NewsItemText, NewsItemThumbnail, NewsItemTitle} from "./NewsItem.style";
import {FC} from "react";
import {Link} from "react-router-dom";

type GreetingsProps = {
    thumbnail: string;
    title: string;
    id: number;
    description: string;
}

const NewsItem: FC<GreetingsProps> = ({thumbnail, title, description, id}) => {
    return (
        <Link to={`/news/${id}`}>
            <NewsItemContainer>
                <NewsItemThumbnail src={thumbnail}/>
                <NewsItemBody>
                    <NewsItemTitle>
                        {title}
                    </NewsItemTitle>
                    <hr/>
                    <NewsItemText>
                        {description.length > 30 ? description.slice(0, 60) + '...' : description}
                    </NewsItemText>
                </NewsItemBody>
            </NewsItemContainer>
        </Link>
    )
}

export default NewsItem;
