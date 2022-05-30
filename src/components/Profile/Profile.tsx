import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfilePageType, updateNewPostText} from "../../state";

export type ProfileType = {
    posts: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.posts.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}