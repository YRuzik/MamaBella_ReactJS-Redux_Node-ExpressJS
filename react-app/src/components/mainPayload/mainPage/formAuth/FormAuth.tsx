import {Formik} from "formik";
import * as Yup from 'yup'
import {
    FormContainer,
    FormCustom,
    FormErrorMessage, FormInput,
    FormLabel, FormSubmitButton
} from "../formRegister/FormRegister.style";
import {FormWrapAuth} from "./FormAuth.style";
import {FC, useState} from "react";
import {useDispatch} from "react-redux";
import AuthService from "../../../../services/AuthService";
import {loginUser, setAuth} from "../../../../actions/actions";
import UserService from "../../../../services/UserService";

const FormAuth: FC = () => {
    const dispatch = useDispatch()
    const {login} = AuthService()
    const {verifyEmail} = UserService()
    const [errors, setErrors] = useState('')
    const [changePassword, setChangePassword] = useState(false)
    const [success, setSuccess] = useState('')

    const handleSubmit = async (email: string, password: string) => {
        try {
            const response = await login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            dispatch(loginUser(response.data.user))
            dispatch(setAuth(true))
        } catch (e) {
            setErrors(e.response?.data?.message);
        }
    }

    const handleSubmitChange = async (email: string) => {
        try {
            const response = await verifyEmail(email).then(() => setSuccess('Сообщение успешно отправлено, пожалуйста, проверьте свою эл. почту'))
        } catch (e) {
            setErrors(e.response?.data?.message);
        }
    }

    return (
        <>
            {changePassword ?
                <Formik
                    initialValues={
                        {
                            email: ''
                        }
                    }

                    validationSchema={Yup.object({
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
                            <h1>Смена пароля</h1>
                            {success.length > 1 ?
                                <p>{success}</p>
                                :
                                <>
                                    <p>Введите эл. почту для получения письма со сменой пароля</p>
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

                                        {errors.length > 0 ? <FormContainer>
                                            <h4 style={{color: 'red'}}>{errors}</h4>
                                        </FormContainer> : null}
                                    </FormWrapAuth>
                                    <FormSubmitButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                        isSubmitting = true
                                        await handleSubmitChange(values.email)
                                        setTimeout(() => resetForm(), 500)
                                    }}>Отправить</FormSubmitButton>
                                </>
                            }
                        </FormCustom>
                    )}
                </Formik>
                :
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
                                <div style={{textDecoration: 'underline', color: 'blue', cursor: "pointer"}} onClick={() => setChangePassword(true)}>Забыли пароль?</div>
                                {errors.length > 0 ? <FormContainer>
                                    <h4 style={{color: 'red'}}>{errors}</h4>
                                </FormContainer> : null}
                            </FormWrapAuth>
                            <FormSubmitButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.email, values.password)
                                setTimeout(() => resetForm(), 500)
                            }}>Войти</FormSubmitButton>
                        </FormCustom>
                    )}
                </Formik>
            }
            </>
    )
}

export default FormAuth;
