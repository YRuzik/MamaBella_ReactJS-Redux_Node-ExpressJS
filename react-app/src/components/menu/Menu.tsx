import {MenuBody, MenuHeader, MenuTitle, MenuWrapper} from "./Menu.style";
import HOCGenreConstructor from "../HOCGenreConstructor/HOCGenreConstructor";
import {FC, useCallback, useEffect, useState} from "react";
import mainService from "../../services/ProductService";
import {drinks, pizza, products, salads, snacks} from "../../interfaces/ProductsInterfaces";
import {useDispatch} from "react-redux";
import {productsFetched} from "../../actions/actions";

const Menu: FC = () => {
    const [sortedProducts, setSortedProducts] = useState<products[]>([])
    const {getProducts} = mainService()
    const dispatch = useDispatch()

    const deleteDuplicates = (inputArray: products[]) => {
        let title = ''
        const myArray: products[] = []
        inputArray.forEach((obj) => {
            if (title !== obj.title) {
                title = obj.title
                myArray.push(obj)
            }
        })
        return myArray
    }

    const takeAllData = useCallback(async () => {
        getProducts().then((data) => {
            dispatch(productsFetched(data.data))
            setSortedProducts(deleteDuplicates(data.data))
        })
    }, [])

    useEffect(() => {
        takeAllData()
    }, [])

    return (
        <>
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
                    <HOCGenreConstructor array={sortedProducts} label={'Пицца'}/>
                </div>
                <div id={'salads'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={sortedProducts} label={'Салаты'}/>
                </div>
                <div id={'snacks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={sortedProducts} label={'Закуски'}/>
                </div>
                <div id={'drinks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={sortedProducts} label={'Напитки'}/>
                </div>
                <div id={'sauces'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={sortedProducts} label={'Соусы'}/>
                </div>
            </MenuWrapper>
        </MenuBody>
        </>
    )
}

export default Menu
