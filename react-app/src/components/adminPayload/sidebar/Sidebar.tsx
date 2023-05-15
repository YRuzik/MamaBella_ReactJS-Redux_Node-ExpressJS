import {SidebarContainer, SidebarItem} from "./Sidebar.style";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <SidebarContainer>
            <SidebarItem onClick={() => navigate('/admin')}><i className='fa fa-home'></i></SidebarItem>

            <SidebarItem onClick={() => navigate('/admin/users')}><i className='fa fa-users'></i></SidebarItem>

            <SidebarItem onClick={() => navigate('/admin/products')}><i className='fa fa-shopping-basket'></i></SidebarItem>

            <SidebarItem onClick={() => navigate('/admin/news')}><i className='fa fa-clone'></i></SidebarItem>

            <SidebarItem onClick={() => navigate('/')}><i className='fa fa-e'></i></SidebarItem>

        </SidebarContainer>
    )
}

export default Sidebar;
