import React from 'react';
import classes from'./Post.module.css';
const Post = (props) => {
    return  (  
     <div className={classes.item}>
         <img src='https://cs.pikabu.ru/post_img/big/2014/01/01/2/1388676982_651577815.jpg' alt='kitty' width='50px' height='50px'></img>
     {props.messagegit add .} 
     <span>like</span>
    </div>
    )
}

export default Post;