import React from 'react'
import "./Recipe.css"

export default function Recipe({title, calories, image, ingredients}) {
  return (
    <div className="recipe">
      <h1 className="title">{title}</h1>
      {ingredients.map((ingredient, i) => (
        <span className="ingredient" key={i}>{ingredient.text}</span>
      ))}
      <p className="calories">{calories}</p>
      <img src={image} alt="" className="image" />
    </div>
  )
}
