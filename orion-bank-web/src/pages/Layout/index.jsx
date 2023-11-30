import React, { useState, useContext, useEffect } from 'react';
import { TipoUsuarioEnum } from '../../constants/enums';
import { Outlet } from 'react-router-dom';
import { SidebarData } from "../../components/SideBar/SidebarData";
import { AuthContext } from "../../contexts/AuthContext";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import './styles.css'

const Layout = () => {
    const { logout, buscarTipoConta } = useContext(AuthContext);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const tipoConta = buscarTipoConta();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const filterSidebarData = (type) => {
        if (type === TipoUsuarioEnum.ADMIN) {
            return SidebarData;
        } else if (type === TipoUsuarioEnum.USER) {
            return SidebarData.filter(item => item.title !== "Admin");
        } else {
            return [];
        }
    };

    const filteredSidebarData = filterSidebarData(tipoConta);

    useEffect(() => {
        if (tipoConta !== TipoUsuarioEnum.ADMIN && tipoConta !== TipoUsuarioEnum.USER) {
            logout();
        }
    }, [tipoConta, logout]);

    return (
        <div className="elements">
            <NavBar toggleSidebar={toggleSidebar} />
            <div className="container-fluid page-body-wrapper">
                <SideBar isOpen={isSidebarOpen} sidebarData={filteredSidebarData} />
                <div className="main-panel">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;