import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {RootStateType, updateNewPostText} from "./state";

type AppType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppType) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar friends={props.state.sidebar.friends}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'} render={() =><Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path={'/profile'} render={() =><Profile posts={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
    );
}

export default App;


// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';
//
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
