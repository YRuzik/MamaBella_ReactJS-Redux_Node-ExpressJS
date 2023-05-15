import {useParams} from "react-router-dom";
import {PBI, PBIChangeButton, PBIInput, PBIInputLabel, PBISaveButton, PBIThumbnail} from "./ProductByID.style";
import UserService from "../../../services/UserService";
import {useEffect, useState} from "react";
import {IUser} from "../../../interfaces/AuthInterfaces";
import ProductService from "../../../services/ProductService";
import {products} from "../../../interfaces/ProductsInterfaces";
import {loginUser, setAdminLayout, setAuth} from "../../../actions/actions";
import {useDispatch} from "react-redux";
import LabelBackButton from "../../labelBackButton/LabelBackButton";
import * as Yup from "yup";
import {
    FormContainer,
    FormCustom, FormErrorMessage,
    FormInput,
    FormLabel, FormSubmitButton
} from "../../mainPayload/mainPage/formRegister/FormRegister.style";
import {FormWrapAuth} from "../../mainPayload/mainPage/formAuth/FormAuth.style";
import {Field, Form, Formik} from "formik";
import {AddressesAddMoreButton} from "../../mainPayload/personalAccountPage/addresses/Addresses.style";

const ProductByID = () => {
    const {id} = useParams<string>()
    const {getProductsID, changeProductsID} = ProductService();
    const [product, setProduct] = useState<products>();
    const [disableInputs, setDisableInputs] = useState(true)
    const dispatch = useDispatch()

    const handleSubmit = async (id: string, data: object) => {
        try {
            await changeProductsID(id, data)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    const checkCategory = (category: string) => {
        switch (category){
            case 'Пицца':
                return 1

            case 'Салаты':
                return 2

            case 'Закуски':
                return 3

            case 'Напитки':
                return 4

            case 'Соусы':
                return 5

            default: return 0
        }
    }

    useEffect(() => {
        dispatch(setAdminLayout(true))
    }, [])

    useEffect(() => {
        getProductsID(id ?? '').then(data => setProduct(data.data[0]))
    }, [])
    return (
        <>
            <LabelBackButton label={'Просмотр товара'}/>
        <PBI>
            <PBIThumbnail>
                <img width={'90%'} src={product?.thumbnail}/>
            </PBIThumbnail>
            <Formik
                initialValues={
                    {
                        title: product?.title,
                        description: product?.description,
                        category: product?.category,
                        weight: product?.weight,
                        size: product?.size,
                        price: product?.price,
                    }
                }

                enableReinitialize={true}

                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Обязательное поле!'),
                    description: Yup.string()
                        .required('Обязательное поле!'),
                    category: Yup.string()
                        .required('Обязательное поле!'),
                    weight: Yup.string()
                        .required('Обязательное поле!'),
                    size: Yup.string()
                        .required('Обязательное поле!'),
                    price: Yup.string()
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
                        <div>

                            <PBIInputLabel>
                                <div>Название</div>
                                <PBIInput
                                    disabled={disableInputs}
                                    name={"title"}
                                    className="form-control"
                                    id={"text"}
                                    placeholder="&nbsp;"
                                />
                                <FormErrorMessage name={'title'} component={'div'}/>
                            </PBIInputLabel>

                            <PBIInputLabel>
                                <div>Описание</div>
                                <PBIInput
                                    disabled={disableInputs}
                                    name={"description"}
                                    className="form-control"
                                    id={"description"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <FormErrorMessage name={'description'} component={'div'}/>
                            </PBIInputLabel>

                            <PBIInputLabel>
                                <div>Категория</div>
                                <PBIInput
                                    disabled={disableInputs}
                                    name={"category"}
                                    className="form-control"
                                    style={{outline: 'none', border: 'none', boxShadow: 'none', backgroundColor: 'transparent'}}
                                    id={"category"}
                                    as={'select'}
                                    value={values.category}
                                    onChange={(v) => {values.category = v.currentTarget.value}}
                                >
                                    <option style={{color: "black"}}>Пицца</option>
                                    <option style={{color: "black"}}>Салаты</option>
                                    <option style={{color: "black"}}>Закуски</option>
                                    <option style={{color: "black"}}>Напитки</option>
                                    <option style={{color: "black"}}>Соусы</option></PBIInput>
                                <FormErrorMessage name={'category'} component={'div'}/>
                            </PBIInputLabel>

                            <PBIInputLabel>
                                <div>Вес</div>
                                <PBIInput
                                    disabled={disableInputs}
                                    name={"weight"}
                                    className="form-control"
                                    id={"weight"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <FormErrorMessage name={'weight'} component={'div'}/>
                            </PBIInputLabel>

                            <PBIInputLabel>
                                <div>Размер</div>
                                <PBIInput
                                    disabled={disableInputs || product?.size == 0}
                                    name={"size"}
                                    className="form-control"
                                    id={"size"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <FormErrorMessage name={'size'} component={'div'}/>
                            </PBIInputLabel>

                            <PBIInputLabel>
                                <div>Цена</div>
                                <PBIInput
                                    disabled={disableInputs}
                                    name={"price"}
                                    className="form-control"
                                    id={"price"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <FormErrorMessage name={'price'} component={'div'}/>
                            </PBIInputLabel>
                            <div style={{display: 'flex', justifyContent: 'end', paddingRight: '10%'}}>
                                {!disableInputs ? <PBISaveButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                    isSubmitting = true
                                    const data = {
                                        title: values.title,
                                        description: values.description,
                                        category: checkCategory(values.category!),
                                        weight: Number(values.weight),
                                        size: Number(values.size),
                                        price: Number(values.price),
                                    }
                                    await handleSubmit(id!,data)
                                    setTimeout(() => resetForm(), 500)
                                    setDisableInputs(true)
                                }}>Сохранить</PBISaveButton> : null}

                                {disableInputs ? <PBIChangeButton onClick={() => setDisableInputs(false)}>Изменить</PBIChangeButton> : null}
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </PBI>
        </>
    )
}

export default ProductByID
