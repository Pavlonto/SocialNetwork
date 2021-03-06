import React from 'react'
import s from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import {Sidebar} from "../Sidebar/Sidebar";
import {SidebarType} from "../../state";


export const NavBar = (props: SidebarType) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink></div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <Sidebar friends={props.friends}/>
        </nav>
    )
}