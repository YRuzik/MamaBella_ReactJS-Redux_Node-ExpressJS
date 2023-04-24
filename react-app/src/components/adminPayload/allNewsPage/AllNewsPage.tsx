import LabelBackButton from "../../labelBackButton/LabelBackButton";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setAdminLayout} from "../../../actions/actions";

const AllNewsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdminLayout(true))
    }, [])

    return (
        <>
            <LabelBackButton label={'Все новости'}/>
        </>
    )
}

export default AllNewsPage
