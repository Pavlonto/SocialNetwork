export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
    avatar: string
}
export type FriendsType = {
    id: number
    name: string
    avatar: string
}
export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    dialogsPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}

let renderTree = (state: RootStateType) => {}

export let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Roma', avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png'},
            {
                id: 2,
                name: 'Lena',
                avatar: 'https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51404241-stock-illustration-female-profile-avatar-icon-white.jpg'
            }
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: '123'}
        ]
    },
    profilePage: {
        posts: [

            {
                id: 1,
                message: 'Hello. I am Aang.',
                likesCount: 15,
                avatar: 'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg'
            },
            {
                id: 2,
                message: 'Hi!',
                likesCount: 1,
                avatar: 'https://png.pngtree.com/png-clipart/20210129/ourlarge/pngtree-default-male-avatar-png-image_2811083.jpg'
            },

        ],
        newPostText: "Hello"
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: 'Roma',
                avatar: 'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png'
            },
            {
                id: 2,
                name: 'Lena',
                avatar: 'https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51404241-stock-illustration-female-profile-avatar-icon-white.jpg'
            }
        ]
    }
}

export function addPost() {
    let newPost: PostType = {id: 3, message: state.profilePage.newPostText, likesCount: 0, avatar: "123"}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    renderTree(state)
}
export function updateNewPostText(newText: string) {
    state.profilePage.newPostText = newText
    renderTree(state)
}

export function subscribe(observer: (state: RootStateType) => void) {
    renderTree = observer
}
