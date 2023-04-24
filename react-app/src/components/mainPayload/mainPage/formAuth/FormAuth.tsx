import {Formik} from "formik";
import * as Yup from 'yup'
import {
    FormContainer,
    FormCustom,
    FormErrorMessage, FormInput,
    FormLabel, FormSubmitButton
} from "../formRegister/FormRegister.style";
import {FormWrapAuth} from "./FormAuth.style";
import {FC} from "react";
import {useDispatch} from "react-redux";
import AuthService from "../../../../services/AuthService";
import {loginUser, setAuth} from "../../../../actions/actions";

const FormAuth: FC = () => {
    const dispatch = useDispatch()
    const {login} = AuthService()

    const handleSubmit = async (email: string, password: string) => {
        try {
            const response = await login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(loginUser(response.data.user))
            dispatch(setAuth(true))
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    return (
        <>
        <Formik
            initialValues={
                {
                    password: '',
                    email: ''
                }
            }

            validationSchema={Yup.object({
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
                <FormCustom>
                    <h1>Авторизация</h1>
                    <FormWrapAuth>

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

                    </FormWrapAuth>
                    <FormSubmitButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                        isSubmitting = true
                        await handleSubmit(values.email, values.password)
                        setTimeout(() => resetForm(), 500)
                    }}>Войти</FormSubmitButton>
                </FormCustom>
            )}
        </Formik>
            </>
    )
}

export default FormAuth;
