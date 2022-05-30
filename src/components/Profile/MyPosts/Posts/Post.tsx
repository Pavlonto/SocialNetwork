import React from 'react'
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likeCount: number
    avatar: string
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img className={s.img} src={props.avatar} alt={'picture'}></img>
            {props.message}
            <div>like:{props.likeCount}</div>
        </div>
    )
}