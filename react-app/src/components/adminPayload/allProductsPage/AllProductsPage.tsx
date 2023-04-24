import LabelBackButton from "../../labelBackButton/LabelBackButton";
import {useDispatch, useSelector} from "react-redux";
import {FC, useCallback, useEffect, useState} from "react";
import {productsFetched, setAdminLayout} from "../../../actions/actions";
import {
    TBody,
    TBodyTD,
    TBodyTR,
    THead,
    THeadLabels,
    UserTableContainer,
    UserTableWrapper
} from "../userTable/UserTable.style";
import {UserTableItem} from "../userTable/UserTable";
import {products} from "../../../interfaces/ProductsInterfaces";
import {IUser} from "../../../interfaces/AuthInterfaces";
import {useNavigate} from "react-router-dom";
import mainService from "../../../services/ProductService";
import {UAContainer} from "../userAddresses/UserAddresses.style";

type prods = {
    products: products[]
}

const AllProductsPage = () => {
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
        dispatch(setAdminLayout(true))
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
            <LabelBackButton label={'Все продукты'}/>
                <UserTableWrapper style={{maxHeight: '45rem', overflowY: "scroll"}}>
                    <UserTableContainer>
                        <THead>
                            <tr>
                                <THeadLabels>Картинка</THeadLabels>
                                <THeadLabels>ID</THeadLabels>
                                <THeadLabels>Название</THeadLabels>
                                <THeadLabels>Описание</THeadLabels>
                                <THeadLabels>Категория</THeadLabels>
                                <THeadLabels>Цена</THeadLabels>
                                <THeadLabels>Вес</THeadLabels>
                                <THeadLabels>Размер</THeadLabels>
                            </tr>
                        </THead>
                        <TBody>
                            {sortedProducts.map(({...props}: any, index: number) => (
                                <ProductsTableItem {...props} key={index}/>
                            ))}
                        </TBody>
                    </UserTableContainer>
                </UserTableWrapper>
        </>
    )
}

export default AllProductsPage

export const ProductsTableItem: FC<products> = ({id, product_id, price, description, thumbnail, size, category, weight, title}) => {

    const navigate = useNavigate();

    const checkLength = (stroke: string) => {
        if(stroke.length > 30) {
            return stroke.slice(0, 30) + '...'
        }
        return stroke
    }

    return (
        <TBodyTR onClick={() => navigate(`/admin/users/${id}`)}>
            <TBodyTD style={{width: '16%', height: '120%'}}>
                <img width={'80%'} src={thumbnail}/>
            </TBodyTD>
            <TBodyTD style={{opacity: '0.6'}}>
                {product_id}
            </TBodyTD>
            <TBodyTD>
                {checkLength(title)}
            </TBodyTD>
            <TBodyTD>
                {checkLength(description)}
            </TBodyTD>
            <TBodyTD>
                {checkLength(category)}
            </TBodyTD>
            <TBodyTD>
                {`${price} ₽`}
            </TBodyTD>
            <TBodyTD>
                {weight + ' г.'}
            </TBodyTD>
            <TBodyTD>
                {size !== 0 ? size + ' см.' : '-'}
            </TBodyTD>
        </TBodyTR>

    )
}
