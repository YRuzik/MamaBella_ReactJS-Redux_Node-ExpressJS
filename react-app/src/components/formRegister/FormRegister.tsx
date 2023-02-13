import {Formik} from "formik";
import * as Yup from 'yup'
import {
    FormContainer, FormContainerSmall, FormContainerWrapper,
    FormCustomRegister,
    FormErrorMessage, FormInput,
    FormLabel, FormSubmitButton, FormWrap
} from "./FormRegister.style";
import {FC, useState} from "react";
import AuthService from "../../services/AuthService";
import SuccessRegisterModal from "../successRegisterModal/SuccessRegisterModal";

type GreetingProps = {
    closeModal: () => void;
    setSuccess: () => void;
}

const FormRegister: FC<GreetingProps> = ({closeModal, setSuccess}) => {
    const {registration} = AuthService()

    const handleSubmit = async (email: string, password: string, first_name: string, last_name: string, username: string) => {
        try {
            await registration(username, first_name, last_name, email, password)
            closeModal()
            setSuccess()
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    return (
        <>
            <Formik
                initialValues={
                    {
                        first_name: '',
                        last_name: '',
                        username: '',
                        password: '',
                        email: ''
                    }
                }

                validationSchema={Yup.object({
                    first_name: Yup.string()
                        .required('Обязательное поле!'),
                    last_name: Yup.string()
                        .required('Обязательное поле!'),
                    username: Yup.string()
                        .min(2, 'Минимум 2 символа!')
                        .required('Обязательное поле!'),
                    password: Yup.string()
                        .min(6, 'Длина пароля должна быть больше 6 символов!')
                        .required('Обязательное поле!'),
                    email: Yup.string()
                        .email('Некорректная эл. почта!')
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
                <FormCustomRegister>
                    <h1>Регистрация</h1>
                    <FormWrap>
                        <FormContainerWrapper>

                            <FormContainerSmall>
                                <FormInput
                                    name={"first_name"}
                                    className="form-control"
                                    id={"first_name"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <FormLabel htmlFor={'first_name'}>Имя</FormLabel>
                                <FormErrorMessage name={'first_name'} component={'div'}/>
                            </FormContainerSmall>

                            <FormContainerSmall>
                                <FormInput
                                    name={"last_name"}
                                    className="form-control"
                                    id={"last_name"}
                                    type={'text'}
                                    placeholder="&nbsp;"
                                />
                                <FormLabel htmlFor={'last_name'}>Фамилия</FormLabel>
                                <FormErrorMessage name={'last_name'} component={'div'}/>
                            </FormContainerSmall>

                        </FormContainerWrapper>

                        <FormContainer>
                            <FormInput
                                name={"username"}
                                className="form-control"
                                id={"username"}
                                type={'text'}
                                placeholder="&nbsp;"
                            />
                            <FormLabel>Логин</FormLabel>
                            <FormErrorMessage name={'username'} component={'div'}/>
                        </FormContainer>

                        <FormContainer>
                            <FormInput
                                name={"password"}
                                className="form-control"
                                id={"password"}
                                type={'password'}
                                placeholder="&nbsp;"
                            />
                            <FormLabel>Пароль</FormLabel>
                            <FormErrorMessage name={'password'} component={'div'}/>
                        </FormContainer>

                        <FormContainer>
                            <FormInput
                                name={"email"}
                                className="form-control"
                                id={"email"}
                                placeholder="&nbsp;"
                            />
                            <FormLabel>Эл. почта</FormLabel>
                            <FormErrorMessage name={'email'} component={'div'}/>
                        </FormContainer>
                    </FormWrap>
                <FormSubmitButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                    isSubmitting = true
                    await handleSubmit(values.email, values.password, values.first_name, values.last_name, values.username)
                    setTimeout(() => resetForm(), 500)
                }}>Зарегестрироваться</FormSubmitButton>
                </FormCustomRegister>
                    )}
            </Formik>
        </>
    )
}

export default FormRegister;
