import React from 'react';
import s from './Sidebar.module.css'
import {SidebarType} from "../../state";


export const Sidebar = (props: SidebarType) => {
    return (
        <div className={s.sidebar}>
            <h3>Friends</h3>
            <div>
                {props.friends.map(f => {
                    return (
                        <div>
                            <span className={s.circle}>12</span>
                            <span className={s.name}> {f.name}</span>
                        </div>
                    )

                })}
            </div>
        </div>
    );
};