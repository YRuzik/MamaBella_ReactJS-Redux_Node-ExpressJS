import {AddressesAddMoreButton, AddressesContainer} from "./Addresses.style";
import AddressesItem from "../addressesItem/AddressesItem";
import {useDispatch, useSelector} from "react-redux";
import AuthService from "../../../../services/AuthService";
import {loginUser, setAuth} from "../../../../actions/actions";
import * as Yup from "yup";
import {
    FormContainer,
    FormCustom,
    FormErrorMessage,
    FormInput,
    FormLabel, FormSubmitButton
} from "../../mainPage/formRegister/FormRegister.style";
import {FormWrapAuth} from "../../mainPage/formAuth/FormAuth.style";
import {Form, Formik} from "formik";
import {UIFormikCustom, UIFormikCustomError, UIFormikInput} from "../userInfo/UserInfo.style";
import UserService from "../../../../services/UserService";
import {IAddresses, IUser} from "../../../../interfaces/AuthInterfaces";
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import OrderItem from "../../mainPage/orderItem/OrderItem";

type CurrentUser = {
    curUser: IUser;
}

const Addresses = () => {
    const {curUser} = useSelector((state: CurrentUser) => state)
    const {addAddress, takeAddress, deleteAddress} = UserService()

    const [addresses, setAddresses] = useState<IAddresses[]>([])

    const handleSubmit = async (address: string) => {
        try {
            await addAddress(address, curUser.id)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    useEffect(() => {
        takeAddress(curUser.id).then(data => setAddresses(data.data))
    }, [handleSubmit, deleteAddress])

    return (
        <AddressesContainer>
            <h1>Адреса</h1>
            <Formik

                initialValues={
                    {
                        address: ''
                    }
                }

                validationSchema={Yup.object({
                    address: Yup.string()
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
                    <UIFormikCustom>
                        <div>

                            <div>
                                <UIFormikInput
                                    disabled={isSubmitting}
                                    name={"address"}
                                    className="form-control"
                                    id={"address"}
                                    placeholder="&nbsp;"
                                />
                                <UIFormikCustomError name={'address'} component={'div'}/>
                            </div>

                        </div>
                        <AddressesAddMoreButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                            isSubmitting = true
                            await handleSubmit(values.address)
                            setTimeout(() => resetForm(), 500)
                        }}>Добавить адрес</AddressesAddMoreButton>
                    </UIFormikCustom>
                )}
            </Formik>
            {addresses.map(({...props}: any, index: number) => (
                <AddressesItem {...props} onDelete={(id: string) => deleteAddress(id)} key={index}/>
            ))}
        </AddressesContainer>
    )
}

export default Addresses
