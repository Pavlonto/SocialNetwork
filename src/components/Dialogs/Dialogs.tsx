import React from "react";
import s from "./Dialogs.module.css"
import {BrowserRouter} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogPageType} from "../../state";


export const Dialogs = (props: DialogPageType) => {


    return (
        <BrowserRouter>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {props.dialogs.map(d => {
                        return <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
                    })}
                </div>
                <div className={s.messages}>
                    {props.messages.map(m => {
                        return <Message message={m.message} id={m.id}/>
                    })}
                </div>
            </div>
        </BrowserRouter>
    )
}