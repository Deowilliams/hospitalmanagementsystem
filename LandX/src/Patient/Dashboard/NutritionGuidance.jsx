import React from 'react';
import './NutritionGuidance.css';

const NutritionGuidance = () => {
  return (
    <div className="nutrition-guidance">
      <h2 >Nutrition Guidance</h2>
      <div className="articles" >
        <h3>Articles</h3>
        <div className="article">
          <h4>The Importance of Protein in Your Diet</h4>
          <p>Protein is an essential macronutrient that plays a crucial role in maintaining overall health and well-being. Sed efficitur urna convallis.</p>
        </div>
        <div className="article">
          <h4 >The Benefits of Eating Whole Foods</h4>
          <p> Eating whole foods, which are foods that are minimally processed or refined and are as close to their natural state as possible, offers a wide range of benefits for overall health and well-being.</p>
        </div>
      </div>
      <div className="recipes">
        <h3>Recipes</h3>
        <div className="recipe">
          <h4 >Quinoa Salad</h4>
          <p>Ingredients: Quinoa, Tomatoes, Cucumbers, Feta cheese, Olive oil, Lemon juice</p>
          <p>Instructions: Cook quinoa according to package instructions. Chop tomatoes, cucumbers, and feta cheese. Mix all ingredients together. Drizzle with olive oil and lemon juice.</p>
        </div>
        <div className="recipe">
          <h4>Protein Smoothie</h4>
          <p>Ingredients: Banana, Spinach, Protein powder, Almond milk, Ice cubes</p>
          <p>Instructions: Blend all ingredients until smooth. Enjoy immediately.</p>
        </div>
      </div>
    </div>
  )
}

export default NutritionGuidance