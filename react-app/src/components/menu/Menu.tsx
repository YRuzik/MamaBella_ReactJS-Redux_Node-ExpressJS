import {MenuBody, MenuHeader, MenuTitle, MenuWrapper} from "./Menu.style";
import HOCGenreConstructor from "../HOCGenreConstructor/HOCGenreConstructor";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import mainService from "../../services/ProductService";
import {drinksFetched, pizzaFetched, saladsFetched, snacksFetched, sousesFetched} from "../../actions/actions";
import {drinks, pizza} from "../../interfaces/ProductsInterfaces";

const Menu = () => {
    const {pizza, salads, drinks, snacks, souses}: any = useSelector(state => state)
    const {getPizza, getSalads, getDrinks, getSnacks, getSouses} = mainService()
    const dispatch = useDispatch()

    const removeDuplicates = ((array: pizza[]) => {
        const myArray: pizza[] = []
        let title = ''
        array.forEach((item) => {
            if (item.title !== title) {
                title = item.title
                myArray.push(item)
            }
        })
        dispatch(pizzaFetched(myArray))
    })

    const takeAllData = useCallback(async (): Promise<any> => {
        await getPizza().then((data) => removeDuplicates(data.data))
        await getSalads().then((data) => dispatch(saladsFetched(data.data)))
        await getDrinks().then((data) => {
            const myArray: drinks[] = []
            let title = ''
            data.data.forEach((item) => {
                if (item.title !== title) {
                    title = item.title
                    myArray.push(item)
                }
            })
            dispatch(drinksFetched(myArray))
        })
        await getSnacks().then((data) => dispatch(snacksFetched(data.data)))
        await getSouses().then((data) => dispatch(sousesFetched(data.data)))
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
                    <HOCGenreConstructor array={pizza} label={'Пицца'}/>
                </div>
                <div id={'salads'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={salads} label={'Салаты'}/>
                </div>
                <div id={'snacks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={snacks} label={'Закуски'}/>
                </div>
                <div id={'drinks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={drinks} label={'Напитки'}/>
                </div>
                <div id={'sauces'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={souses} label={'Соусы'}/>
                </div>
            </MenuWrapper>
        </MenuBody>
        </>
    )
}

export default Menu
