import {
    OplataBody, OplataButtonStyle,
    OplataContainer, OplataError, OplataField,
    OplataFieldLabel, OplataFieldSelect, OplataMinFields,
    OplataProducts,
    OplataReqvisits,
    OplataTitle, SharedSumAndBuy
} from "./Oplata.style";
import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import {IAddresses, ICart, IUser} from "../../../../interfaces/AuthInterfaces";
import UserService from "../../../../services/UserService";
import {useNavigate} from "react-router-dom";

type CurrentUser = {
    curUser: IUser;
    isAuth: boolean;
}

const Oplata = () => {
    const {curUser, isAuth} = useSelector((state: CurrentUser) => state)
    const [cart, setCart] = useState<ICart[]>([])
    const [sum, setSum] = useState(0)
    const [address, setAddress] = useState('')
    const navigate = useNavigate()

    const [addresses, setAddresses] = useState<IAddresses[]>([])

    const {takeAddress, createOrder} = UserService()

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')!))
        if (curUser.id) takeAddress(curUser.id).then((data) => {
            setAddresses(data.data)
        })
    }, [curUser])

    useEffect(() => {
        let tmpSum = 0
        cart.forEach((e) => tmpSum += (e.quantity * +e.price))
        setSum(tmpSum)

        console.log(cart)
    }, [cart])

    const handleSubmit = async (email: string, first_name: string, last_name: string, address: string) => {
        try {
            await createOrder(+curUser.id, address, email, first_name, last_name, localStorage.getItem('cart')!, sum)
            navigate(`/personal-account/${curUser.id}`)
        } catch (e) {
            console.log()
        }
    }

    return (
        <OplataContainer>
            <OplataTitle>
                <h1 style={{paddingBottom: '1rem'}}>Оформление заказа</h1>
                <hr style={{border: '1px solid orange'}}/>
            </OplataTitle>
            <OplataBody>
                <div style={{textAlign: 'center', width: '50%'}}>
                    <h2 style={{paddingTop: '1rem'}}>Товары</h2>
                    <OplataProducts>
                        {cart.map(({...props}: any, index: number) => (
                            <ProductItem {...props} key={index}/>
                        ))}
                    </OplataProducts>
                </div>
                <OplataReqvisits>
                    <Formik
                        initialValues={
                            {
                                card_number: '',
                                cvc_code: '',
                                email: curUser.email,
                                address: address,
                                first_name: curUser.first_name,
                                last_name: curUser.last_name,
                                date_card: ''
                            }
                        }

                        enableReinitialize={true}

                        validationSchema={Yup.object({
                            card_number: Yup.string()
                                .min(16, 'Введите карту в корректном формате')
                                .max(16, 'Введите карту в корректном формате')
                                .required('Обязательное поле!'),
                            cvc_code: Yup.string()
                                .min(3, 'Введите код в корректном формате')
                                .max(3, 'Введите код в корректном формате')
                                .required('Обязательное поле!'),
                            email: Yup.string()
                                .email('Некорректная эл. почта!')
                                .required('Обязательное поле!'),
                            address: Yup.string()
                                .required('Обязательное поле!'),
                            first_name: Yup.string()
                                .required('Обязательное поле!'),
                            last_name: Yup.string()
                                .required('Обязательное поле!'),
                            date_card: Yup.string()
                                .required('Обязательное поле!'),
                        })}

                        onSubmit={
                            values => console.log(JSON.stringify(values))
                        }>
                        {({
                              values,
                              isValid,
                              dirty,
                              isSubmitting,
                              resetForm
                          }) => (
                            <Form>
                                <h2>Реквизиты</h2>
                                <div>

                                    <OplataMinFields>
                                        <OplataFieldLabel>
                                            <div><label>Имя</label></div>
                                            <OplataField
                                                name={"first_name"}
                                                className="form-control"
                                                id={"first_name"}
                                                placeholder="&nbsp;"
                                            />
                                            <OplataError name={'first_name'} component={'div'}/>
                                        </OplataFieldLabel>
                                        <div style={{padding: '0 0 0 0'}}></div>
                                        <OplataFieldLabel>
                                            <div><label>Фамилия</label></div>
                                            <OplataField
                                                name={"last_name"}
                                                className="form-control"
                                                id={"last_name"}
                                                placeholder="&nbsp;"
                                            />
                                            <OplataError name={'last_name'} component={'div'}/>
                                        </OplataFieldLabel>
                                    </OplataMinFields>

                                    <OplataFieldLabel>
                                        <div><label>Эл. почта</label></div>
                                        <OplataField
                                            name={"email"}
                                            className="form-control"
                                            id={"email"}
                                            placeholder="&nbsp;"
                                        />
                                        <OplataError name={'email'} component={'div'}/>
                                    </OplataFieldLabel>

                                    <hr style={{border: '1px solid orange', margin: '0.5rem 0 0.5rem 0', opacity: '0.5'}}/>

                                    <OplataFieldLabel>
                                        <div><label>Адрес</label></div>
                                        <OplataFieldSelect
                                            name={"address"}
                                            className="form-control"
                                            id={"address"}
                                            as={'select'}
                                            value={address}
                                            onChange={(v) => {setAddress( v.currentTarget.value)}}
                                        >
                                            {addresses.map((e, i) => {
                                                return <option key={i} style={{color: "black"}}>{e.address}</option>
                                            })}
                                        </OplataFieldSelect>
                                        <OplataError name={'address'} component={'div'}/>
                                    </OplataFieldLabel>

                                    <OplataFieldLabel>
                                        <div><label>Номер карты</label></div>
                                        <OplataField
                                            name={"card_number"}
                                            className="form-control"
                                            id={"card_number"}
                                            placeholder="&nbsp;"
                                        />
                                        <OplataError name={'card_number'} component={'div'}/>
                                    </OplataFieldLabel>

                                    <OplataMinFields>
                                        <OplataFieldLabel>
                                            <div><label>Дата на карте</label></div>
                                            <OplataField
                                                name={"date_card"}
                                                className="form-control"
                                                id={"date_card"}
                                                placeholder="&nbsp;"
                                            />
                                            <OplataError name={'date_card'} component={'div'}/>
                                        </OplataFieldLabel>
                                        <div style={{padding: '0 0 0 0'}}></div>
                                        <OplataFieldLabel>
                                            <div><label>CVC код</label></div>
                                            <OplataField
                                                name={"cvc_code"}
                                                className="form-control"
                                                id={"cvc_code"}
                                                type={'password'}
                                                placeholder="&nbsp;"
                                            />
                                            <OplataError name={'cvc_code'} component={'div'}/>
                                        </OplataFieldLabel>
                                    </OplataMinFields>

                                </div>
                                <div style={{marginTop: '11rem'}}>
                                    <hr style={{border: '1px solid orange', margin: '0.5rem 0 0.5rem 0', opacity: '0.5'}}/>
                                    <SharedSumAndBuy>
                                        <div style={{verticalAlign: 'center', lineHeight:'3rem'}}>
                                            Общая сумма - {sum} ₽
                                        </div>
                                        <div>
                                            <OplataButtonStyle type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                                isSubmitting = true
                                                await handleSubmit(values.email, values.first_name, values.last_name, values.address)
                                                setTimeout(() => resetForm(), 500)
                                            }}>Оплатить</OplataButtonStyle>
                                        </div>
                                    </SharedSumAndBuy>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </OplataReqvisits>
            </OplataBody>
        </OplataContainer>
    )
}

export default Oplata

type props = {
    thumbnail: string;
    category: string;
    price: number;
    quantity: number;
    size: number;
    title: string;
    weight: number;
}

export const ProductItem: FC<props> = ({thumbnail, category, price, quantity, size, title, weight}) => {
    return (
        <>
            <hr style={{margin: '0 0 1rem 0'}}/>
            <ProductContainer>
                <ProductThumbnail>
                    <img src={thumbnail} width={'100%'}/>
                </ProductThumbnail>
                <ProductBody>
                    <ProductTitle>
                        {title}
                    </ProductTitle>
                    <div style={{opacity: '0.75'}}>
                        {category} {size !== 0 ? size + ' см.' : null} {weight} гр.
                    </div>
                    <ProductQuantityPrice>
                        <div>
                            x{quantity}
                        </div>
                        <div>
                            Цена - {quantity * price}
                        </div>
                    </ProductQuantityPrice>
                </ProductBody>
            </ProductContainer>
        </>
    )
}

const ProductContainer = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`

const ProductThumbnail = styled.div`
  width: 20%;
`

const ProductTitle = styled.div`
  font-weight: bold;
`

const ProductQuantityPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`

const ProductBody = styled.div`
  text-align: end;
  width: 100%;
`
