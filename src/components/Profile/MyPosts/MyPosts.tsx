import React from 'react'
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {ProfilePageType} from "../../../state";

type MyPostsType = {
    posts: ProfilePageType
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.posts.map(p => <Post message={p.message} likeCount={p.likesCount} avatar={p.avatar}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    function onChangePost() {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    const addPost = () => {
            props.addPost()
    }

    return (
        <div>
            <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangePost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
