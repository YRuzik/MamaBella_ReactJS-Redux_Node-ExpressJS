import {NewsInfoBody, NewsInfoContainer, NewsInfoText, NewsInfoThumbnail, NewsInfoTitle} from "./NewsInfo.style";
import {FC} from "react";

type GreetingsProps = {
    thumbnail: string
}

const NewsInfo: FC = () => {
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque explicabo necessitatibus veniam vitae! Adipisci autem, cum ipsam non quaerat repellendus. Praesentium, sunt, suscipit! Accusamus autem dignissimos distinctio doloribus eaque, facilis fugit ipsum modi, nihil nobis numquam porro provident reiciendis, rerum suscipit temporibus vitae voluptates voluptatibus? Aliquid commodi eligendi excepturi magnam, nobis tempora tempore. Ab corporis cupiditate debitis esse, fugiat ipsa iusto obcaecati odit, porro reprehenderit sapiente similique soluta temporibus veritatis voluptatem! Deserunt eius laborum laudantium libero minima mollitia voluptate. A animi autem beatae deleniti dicta, eum harum illo iure modi natus nulla odio quas recusandae, vitae, voluptatibus? Debitis, quibusdam?'

    return (
        <NewsInfoContainer>
            <NewsInfoThumbnail src={'https://sushi-pizza-burger.ru/wp-content/uploads/2022/04/domashnyaya-1536x1024.jpg'}/>
            <NewsInfoBody>
                <hr/>
                <NewsInfoTitle>
                    Супер Новость
                </NewsInfoTitle>
                <hr/>
                <NewsInfoText>
                    <p>
                        {text}
                    </p>
                </NewsInfoText>
            </NewsInfoBody>
        </NewsInfoContainer>
    )
}

export default NewsInfo;
