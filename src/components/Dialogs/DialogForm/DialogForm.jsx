import React from 'react';
import classes from './DialogForm.module.css';

let DialogForm = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
        return (
                <form action="">
                <textarea ref={newPostElement} rows="3" placeholder="enter Your post"></textarea>
                <button onClick={addPost}>Add post</button>
                </form>
    )
};

export default DialogForm;