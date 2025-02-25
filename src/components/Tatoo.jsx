import styles from './Tatoo.module.scss'
import { useState } from 'react';

function Recipe ({title, image}) { 
    const [liked, setLiked ]= useState(false);
    function handleClick(){
        setLiked(!liked)
    }
    return (
        <div onClick={handleClick} className={styles.recipe} >
            <div className={styles.imageContainer} >
                <img src={image} alt='reciipe'/> 
            </div>
            <div className= {`${styles.recipeTitle} d-flex flex-column justify-content-center allign-items-center `} >
                <h3 className='mb-10'>{title}</h3>
                <i className={`fa-solid fa-heart ${liked ? 'text-primary' : ""} `}></i>
            </div>

        </div>

    );
}

export default Recipe;