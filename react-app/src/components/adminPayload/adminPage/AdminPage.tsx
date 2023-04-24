import {PersonalAccountContainer} from "../../mainPayload/personalAccountPage/PersonalAccountPage.style";
import UserTable from "../userTable/UserTable";
import {AdminFlexBox, AdminLayout} from "../userTable/UserTable.style";
import UsersCounter from "../usersCounter/UsersCounter";
import Sidebar from "../sidebar/Sidebar";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setAdminLayout} from "../../../actions/actions";
import styled from "styled-components";
import ReviewChart from "../reviewChart/ReviewChart";
import {Route, Routes} from "react-router-dom";

export const Container = styled.div`
  padding: 4% 5% 0 10%;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const AdminPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAdminLayout(true))
    }, [])

    return (
        <>
                <AdminFlexBox>
                    <FlexContainer>
                        <UsersCounter/>
                        <ReviewChart/>
                    </FlexContainer>
                    <UserTable/>
                </AdminFlexBox>
        </>
    )
}

export default AdminPage;
