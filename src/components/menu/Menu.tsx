import {MenuBody, MenuHeader, MenuTitle, MenuWrapper} from "./Menu.style";
import HOCGenreConstructor from "../HOCGenreConstructor/HOCGenreConstructor";


const Menu = () => {
    const array = [
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 1},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 2},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 3},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 4},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 5},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 6},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 7},
        {title: 'Пепперони', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614548275_66-p-pitstsa-na-belom-fone-102.png', price: '499', id: 8},
    ]

    const salads = [
        {title: 'Цезарь', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://baback.club/uploads/posts/2022-11/thumbs/1667886167_14-baback-club-p-salat-tsezar-risunok-krasivo-21.png', price: '290', id: 10},
        {title: 'Цезарь', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://baback.club/uploads/posts/2022-11/thumbs/1667886167_14-baback-club-p-salat-tsezar-risunok-krasivo-21.png', price: '399', id: 11},
        {title: 'Цезарь', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://baback.club/uploads/posts/2022-11/thumbs/1667886167_14-baback-club-p-salat-tsezar-risunok-krasivo-21.png', price: '290', id: 12},
        {title: 'Цезарь', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://baback.club/uploads/posts/2022-11/thumbs/1667886167_14-baback-club-p-salat-tsezar-risunok-krasivo-21.png', price: '399', id: 13},
        {title: 'Цезарь', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://baback.club/uploads/posts/2022-11/thumbs/1667886167_14-baback-club-p-salat-tsezar-risunok-krasivo-21.png', price: '399', id: 14},
        {title: 'Цезарь', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos harum quia! At ex, numquam! Maxime mollitia temporibus velit.', thumbnail: 'https://baback.club/uploads/posts/2022-11/thumbs/1667886167_14-baback-club-p-salat-tsezar-risunok-krasivo-21.png', price: '290', id: 15},
    ]

    return (
        <MenuBody>
            <MenuWrapper>
                <MenuHeader>
                    <MenuTitle id={'menu'}>
                        <hr/>
                        Меню
                        <hr/>
                    </MenuTitle>
                </MenuHeader>
                <div id={'pizza'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={array} label={'Пицца'}/>
                </div>
                <div id={'salads'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={salads} label={'Салаты'}/>
                </div>
                <div id={'snacks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={array} label={'Закуски'}/>
                </div>
                <div id={'drinks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={salads} label={'Напитки'}/>
                </div>
                <div id={'sauces'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={array} label={'Соусы'}/>
                </div>
            </MenuWrapper>
        </MenuBody>
    )
}

export default Menu
