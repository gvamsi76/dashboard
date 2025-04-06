import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaLightbulb, FaBook, FaCalendarAlt, FaBullhorn, FaEdit,
    FaUsers, FaEnvelope, FaQuestionCircle, FaSearch, FaSignOutAlt
} from "react-icons/fa";

export class Sidebar extends Component {
    render() {
        return (
            <>
                {/* Sidebar */}
                <div className="sidebar d-none d-md-flex flex-column align-items-center justify-content-between">
                    <div>
                        <div className='bg-white-light rounded-4'>
                            <NavLink to="/" className="icon" title='Lightbulb'><FaLightbulb /></NavLink>
                            <NavLink to="/dashboard" className="icon" title='Dashboard'><FaBook /></NavLink>
                            <NavLink to="/calendar" className="icon"><FaCalendarAlt /></NavLink>
                            <NavLink to="/announcements" className="icon"><FaBullhorn /></NavLink>
                            <NavLink to="/edit" className="icon"><FaEdit /></NavLink>
                            <NavLink to="/users" className="icon"><FaUsers /></NavLink>
                            <NavLink to="/messages" className="icon"><FaEnvelope /></NavLink>
                            <NavLink to="/help" className="icon"><FaQuestionCircle /></NavLink>
                        </div>
                        <div className='mt-4'>
                            <NavLink to="/search" className="icon"><FaSearch /></NavLink>
                        </div>
                    </div>
                    <div>
                        <NavLink to="/logout" className="icon"><FaSignOutAlt /></NavLink>
                    </div>
                </div>

                {/* Offcanvas for mobile */}
                <div className="offcanvas offcanvas-start text-white" id="offcanvasSidebar">
                    <div className="offcanvas-body d-flex flex-column align-items-center">
                        <NavLink to="/" className="icon"><FaLightbulb /></NavLink>
                        <NavLink to="/dashboard" className="icon"><FaBook /></NavLink>
                        <NavLink to="/calendar" className="icon"><FaCalendarAlt /></NavLink>
                        <NavLink to="/announcements" className="icon"><FaBullhorn /></NavLink>
                        <NavLink to="/edit" className="icon"><FaEdit /></NavLink>
                        <NavLink to="/users" className="icon"><FaUsers /></NavLink>
                        <NavLink to="/messages" className="icon"><FaEnvelope /></NavLink>
                        <NavLink to="/help" className="icon"><FaQuestionCircle /></NavLink>
                        <NavLink to="/search" className="icon"><FaSearch /></NavLink>
                        <NavLink to="/logout" className="icon"><FaSignOutAlt /></NavLink>
                    </div>
                </div>

                {/* Navbar */}
                <nav className="navbar navbar-dark d-flex gap-3 ps-3 py-3 d-md-none sticky-top bg-white">
                    <div className='d-flex align-items-center gap-3'>
                        <button
                            className="btn btn-secondary"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasSidebar"
                        >
                            ☰
                        </button>
                        <h5 className='mb-0'>Dashboard</h5>
                    </div>
                </nav>
            </>
        )
    }
}

export default Sidebar;
