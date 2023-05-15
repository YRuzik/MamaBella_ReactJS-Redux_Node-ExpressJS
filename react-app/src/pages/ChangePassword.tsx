import {
    PersonalAccountContainer,
    PersonalAccountLayout
} from "../components/mainPayload/personalAccountPage/PersonalAccountPage.style";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import {
    OplataButtonStyle,
    OplataError,
    OplataField,
    OplataFieldLabel
} from "../components/mainPayload/oplataPage/oplata/Oplata.style";
import {useNavigate, useParams} from "react-router-dom";
import UserService from "../services/UserService";

const ChangePassword = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const {changePassword} = UserService()
    const handleSubmit = async (password: string) => {
        try {
            await changePassword(password, id!)
            navigate(`/`)
        } catch (e) {
            console.log()
        }
    }
    return (
        <PersonalAccountLayout>
            <PersonalAccountContainer>
                <Formik

                    initialValues={
                        {
                            password: '',
                        }
                    }

                    enableReinitialize={true}

                    validationSchema={Yup.object({
                        password: Yup.string()
                            .min(6, 'Введите карту в корректном формате')
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
                        <Form style={{color: 'white'}}>
                            <h2>Обновление пароля</h2>
                            <div>

                                <OplataFieldLabel>
                                    <div><label>Новый пароль</label></div>
                                    <OplataField
                                        name={"password"}
                                        className="form-control"
                                        id={"password"}
                                        type={'password'}
                                        placeholder="&nbsp;"
                                    />
                                    <OplataError name={'password'} component={'div'}/>
                                </OplataFieldLabel>

                            </div>
                            <OplataButtonStyle type={'submit'} disabled={!(isValid && dirty) || isSubmitting} onClick={async () => {
                                isSubmitting = true
                                await handleSubmit(values.password)
                                setTimeout(() => resetForm(), 500)
                            }}>Отправить</OplataButtonStyle>

                        </Form>
                    )}
                </Formik>
            </PersonalAccountContainer>
        </PersonalAccountLayout>
    )
}

export default ChangePassword
