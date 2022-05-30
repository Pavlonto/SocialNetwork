import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../state";


export const DialogItem = (props: DialogType) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}>
            <span><img src={props.avatar} alt="avatar" className={s.image}/></span>
            <span> {props.name}</span></NavLink>
    </div>
}