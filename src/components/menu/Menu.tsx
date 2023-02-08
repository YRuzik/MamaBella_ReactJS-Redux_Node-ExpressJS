import {MenuBody, MenuHeader, MenuTitle, MenuWrapper} from "./Menu.style";
import HOCGenreConstructor from "../HOCGenreConstructor/HOCGenreConstructor";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import mainService from "../../services/MainService";
import {myPizzaSorted, pizzaFetched, saladsFetched} from "../../actions/actions";
import {pizza, salads} from "../../interfaces/interfaces";
import ModalProduct from "../modalProduct/ModalProduct";


const Menu = () => {
    const {pizza, sortedPizza, salads}: any = useSelector(state => state)
    const {getPizza, getSalads} = mainService()
    const dispatch = useDispatch()

    const removeDuplicates = ((array: pizza[]) => {
        const myArray: pizza[] = []
        let title = ''
        array.forEach((item, index) => {
            if (item.title !== title) {
                title = item.title
                myArray.push(item)
            }
        })
        dispatch(myPizzaSorted(myArray))
    })

    useEffect(() => {
        getPizza().then((data: pizza[]) => {
            dispatch(pizzaFetched(data))
        })
        getSalads().then((data: salads[]) => {
            dispatch(saladsFetched(data))
        })
    }, [])

    useEffect(() => {
        removeDuplicates(pizza)
    }, [pizza])

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
                    <HOCGenreConstructor array={sortedPizza} label={'Пицца'}/>
                </div>
                <div id={'salads'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={salads} label={'Салаты'}/>
                </div>
                <div id={'snacks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={pizza} label={'Закуски'}/>
                </div>
                <div id={'drinks'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={salads} label={'Напитки'}/>
                </div>
                <div id={'sauces'} style={{scrollMargin: '80px'}}>
                    <HOCGenreConstructor array={pizza} label={'Соусы'}/>
                </div>
            </MenuWrapper>
        </MenuBody>
        </>
    )
}

export default Menu
