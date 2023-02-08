import {useHttp} from "../hooks/http.hook";


const MainService = () => {
    const {request} = useHttp()

    const _baseURL = 'http://localhost:8083/api/'

    const getPizza = async () => {
        return (
            await request(`${_baseURL}pizza`)
        )
    }

    const getPizzaID = async (id: string) => {
        return (
            await request(`${_baseURL}pizza/${id}`)
        )
    }

    const getSalads = async () => {
        return (
            await request(`${_baseURL}salads`)
        )
    }

    const getSaladsID = async (id: string) => {
        return (
            await request(`${_baseURL}salads/${id}`)
        )
    }

    return {getPizza, getPizzaID, getSalads, getSaladsID}
}

export default MainService
