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

const FormAuth: FC = () => {
    return (
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
                    <FormSubmitButton type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={() => {
                        isSubmitting = true
                        setTimeout(() => resetForm(), 500)
                    }}>Войти</FormSubmitButton>
                </FormCustom>
            )}
        </Formik>
    )
}

export default FormAuth;
