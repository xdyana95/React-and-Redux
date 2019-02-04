import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail author="Sam" timeAgo="Today at 4:45PM"/>
           <CommentDetail author="Alex" timeAgo="Today at 3:00AM"/>
           <CommentDetail author="Jane" timeAgo="Today at 1:25PM"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));