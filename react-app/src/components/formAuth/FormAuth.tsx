import {Formik} from "formik";
import * as Yup from 'yup'
import {
    FormContainer,
    FormCustom,
    FormErrorMessage,
    FormLabel,
    FormLargeInput,
    FormSmallInput,
    FormWrapper
} from "./FormAuth.style";

const FormAuth = () => {
    return (
        <Formik
            initialValues={
                {
                    first_name: '',
                    last_name: '',
                    username: '',
                    password: '',
                    email: '',
                    address: ''
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
                address: Yup.string()
                    .min(5, 'Некорректный адрес!')
                    .required('Обязательное поле!'),
            })}

            onSubmit={
                values => console.log(JSON.stringify(values))
            }>

            <FormCustom>
                <h1>Регистрация</h1>
                <FormContainer>
                    <FormLabel>Инициалы</FormLabel>
                    <FormSmallInput
                        name={"first_name"}
                        className="form-control"
                        id={"first_name"}
                        placeholder={'Иван'}
                    />

                    <FormSmallInput
                        name={"last_name"}
                        className="form-control"
                        id={"last_name"}
                        placeholder={'Иваныч'}
                    />
                </FormContainer>

                <FormContainer>
                    <FormLabel>Логин</FormLabel>
                    <FormLargeInput
                        name={"username"}
                        className="form-control"
                        id={"username"}
                        placeholder={'pizzaSlayer2004'}
                    />
                </FormContainer>

                <FormContainer>
                    <FormLabel>Пароль</FormLabel>
                    <FormLargeInput
                        name={"password"}
                        className="form-control"
                        id={"password"}
                        type={'password'}
                        placeholder={'******'}
                    />
                </FormContainer>

                <FormContainer>
                    <FormLabel>Эл. почта</FormLabel>
                    <FormLargeInput
                        name={"email"}
                        className="form-control"
                        id={"email"}
                        placeholder={'superdestroyer@gmail.com'}
                    />
                </FormContainer>

                <FormContainer>
                    <FormLabel>Адрес</FormLabel>
                    <FormWrapper>
                        <FormLargeInput
                            name={"address"}
                            className="form-control"
                            id={"address"}
                            placeholder={'г. Владимир, ул. Парирум, д. 15, кв. 25'}
                        />
                        <FormErrorMessage name={'address'} component={'div'}/>
                    </FormWrapper>
                </FormContainer>
            </FormCustom>

        </Formik>
    )
}

export default FormAuth;
