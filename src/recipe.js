import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className= {style.recipe}>
            <h1>{title}</h1>
            <p className='calories'>{Math.round(calories)} Calories</p>
            <img className={style.image} src={image} alt=""/>
            <ol className='ingredient'>
                {ingredients.map((ingredient, index) => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
        </div>
    );
};

export default Recipe;