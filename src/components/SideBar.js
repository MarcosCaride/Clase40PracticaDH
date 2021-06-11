import React from 'react';
import image from '../assets/images/LogoMarcos.png';
import "./SideBar.css";
import { NavLink } from 'react-router-dom'




function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                    <div className="sidebar-brand-icon" id="SideBarLogo">
                        <img src={image} alt="Digital House"/>
                    </div>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                        <i className="fas fa-home"></i>
                        <span> La Cantina del Androide</span></NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Links</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link collapsed" to="/ProductsInDB">
                        <i className="fas fa-gift"></i>
                        <span> Productos en DB</span>
                    </NavLink>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/UsersInDB">
                        <i className="fas fa-users"></i>
                        <span> Usuarios en DB</span></NavLink>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ContentRowMovies">
                        <i className="fas fa-tags"></i>
                        <span> Categorias</span></NavLink>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>

            </ul>
            {/*<!-- End of Sidebar -->*/}


        </React.Fragment>
    )
}
export default SideBar;