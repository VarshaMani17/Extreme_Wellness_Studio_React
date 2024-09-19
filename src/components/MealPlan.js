import React from 'react';
import './MealPlan.css';
import br1 from '../assert/meal/br1.jpg';
import br2 from '../assert/meal/br2.jpg';
import br3 from '../assert/meal/br3.jpg';
import br4 from '../assert/meal/br4.jpg';
import br5 from '../assert/meal/br5.jpg';
import br6 from '../assert/meal/br6.jpg';
import br7 from '../assert/meal/br7.jpeg';
import br8 from '../assert/meal/br8.jpg';
import br9 from '../assert/meal/br9.jpg';
import br10 from '../assert/meal/br10.jpg';
import br11 from '../assert/meal/br11.jpg';
import br12 from '../assert/meal/br12.jpg';
import br13 from '../assert/meal/br13.png';
import br14 from '../assert/meal/br14.jpg';
import br15 from '../assert/meal/br15.jpg';
import br16 from '../assert/meal/br16.jpg';
import br17 from '../assert/meal/br17.jpg';
import br18 from '../assert/meal/br18.jpg';
import br19 from '../assert/meal/br19.jpg';
import br20 from '../assert/meal/br20.jpg';
import br21 from '../assert/meal/br21.jpg';
import l1 from '../assert/meal/l1.jpg'
import l2 from '../assert/meal/l2.jpg'
import l3 from  '../assert/meal/l3.jpg'
import l4 from '../assert/meal/l4.jpg'
import l5 from '../assert/meal/l5.jpeg'
import l6 from  '../assert/meal/l6.jpg'
import l7 from '../assert/meal/l7.jpg'
import l8 from '../assert/meal/l8.jpg'
import l9 from  '../assert/meal/l9.png'
import l10 from '../assert/meal/l10.jpg'
import l11 from '../assert/meal/l11.jpg'
import l12 from  '../assert/meal/l12.jpg'
import l13 from '../assert/meal/l13.jpg'
import l14 from '../assert/meal/l14.jpg'
import l15 from  '../assert/meal/l15.jpg'
import l16 from '../assert/meal/l16.jpg'
import l17 from '../assert/meal/l17.jpg'
import l18 from  '../assert/meal/l18.jpg'
import l19 from '../assert/meal/l19.jpg'
import l20 from '../assert/meal/l20.jpg'
import l21 from  '../assert/meal/l21.jpg'
const meals = [
  {
    type: "Breakfast",
    items: [
      { image: br1, title: "Paleo beef & egg bowl" },
      { image: br2, title: "Egg & avocado salad" },
      { image: br3, title: "Lowfat Greek yogurt" },
      { image: br4, title: "Tomato mushroom egg white omelet" },
      { image: br5, title: "Overnight mixed berry protein oats w/ water" },
      { image: br6, title: "Sweet potato breakfast pancakes" },
      { image: br7, title: "Berry chia protein smoothie" },
      { image: br8, title: "Chocolate avocado chia pudding" },
      { image: br9, title: "Breakfast cereal with protein milk" },
      { image: br10, title: "Egg white spinach scramble" },
      { image: br11, title: "Taco breakfast bowl" },
      { image: br12, title: "Banana & cottage cheese toast" },
      { image: br13, title: "Pumped up greek yogurt" },
      { image: br14, title: "Waffles & Greek yogurt" },
      { image: br15, title: "Egg & avocado salad on toast" },
      { image: br16, title: "Chicken sausage & egg white breakfast bowl" },
      { image: br17, title: "Turkey chorizo" },
      { image: br18, title: "Strawberry banana protein smoothie" },
      { image: br19, title: "Green protein shake" },
      { image: br20, title: "Blueberry vanilla oatmeal" },
      { image: br21, title: "Boiled eggs" },
    ],
  },
  {
    type: "Lunch",
    items: [
      { image: l1, title: "Spicy shrimp & basil stir fry" },
      { image: l2, title: "Avocado tuna salad stuffed pepper" },
      { image:l3, title: "Cajun cod" },
      { image: l4, title: "Pan seared breaded tilapia" },
      { image: l5, title: "Simple plain beef burger" },
      { image:l6, title: "Chicken-broccoli-quinoa bowl" },
      { image: l7, title: "Buffalo chicken salad" },
      { image: l8, title: "Pork tenderloin with creamy dill sauce" },
      { image: l9, title: "Chicken piquant" },
      { image: l10, title: "Chicken avocado salad" },
      { image: l11, title: "Thyme & lime chicken thighs" },
      { image: l12, title: "Italian baked tilapia" },
      { image: l13, title: "Ranch chicken & vegetable skillet" },
      { image: l14, title: "Tzatziki chicken salad in pita" },
      { image: l15, title: "Broiled tilapia" },
      { image: l16, title: "Spicy garlic lime chicken breast" },
      { image: l17, title: "Greek turkey meatballs" },
      { image: l18, title: "Hungarian goulash" },
      { image:l19, title: "Ranch pork chops" },
      { image: l20, title: "Goat cheese & spinach hasselback" },
      { image: l21, title: "Firecracker shrimp" },
    ],
  },
  {
    type: "Dinner",
    items: [
      { image: br8, title: "Goat cheese & spinach hasselback" },
      { image: br9, title: "Marry me chicken" },
      { image: l7, title: "Buffalo chicken salad" },
      { image: l8, title: "Pork tenderloin with creamy dill sauce" },
      { image: l9, title: "Chicken piquant" },
      { image: l10, title: "Chicken avocado salad" },
      { image: l11, title: "Thyme & lime chicken thighs" },
      { image: l12, title: "Italian baked tilapia" },
      { image: l13, title: "Ranch chicken & vegetable skillet" },
      { image: l14, title: "Tzatziki chicken salad in pita" },
      { image: l15, title: "Broiled tilapia" },
      { image: l16, title: "Spicy garlic lime chicken breast" },
      { image: l17, title: "Greek turkey meatballs" },
      { image: l18, title: "Hungarian goulash" },
      { image:l19, title: "Ranch pork chops" },
      { image: l20, title: "Goat cheese & spinach hasselback" },
      { image: l21, title: "Firecracker shrimp" },
      { image: l18, title: "Hungarian goulash" },
      { image:l19, title: "Ranch pork chops" },
      { image: l20, title: "Goat cheese & spinach hasselback" },
      { image: l21, title: "Firecracker shrimp" },
    ],
  },
  {
    type: "Snacks",
    items: [
      { image: br10, title: "Beef jerky" },
      { image: br11, title: "Yogurt and cucumber" },
      { image: l7, title: "Buffalo chicken salad" },
      { image: l8, title: "Pork tenderloin with creamy dill sauce" },
      { image: l9, title: "Chicken piquant" },
      { image: l10, title: "Chicken avocado salad" },
      { image: l11, title: "Thyme & lime chicken thighs" },
      { image: l12, title: "Italian baked tilapia" },
      { image: l13, title: "Ranch chicken & vegetable skillet" },
      { image: l14, title: "Tzatziki chicken salad in pita" },
      { image: l15, title: "Broiled tilapia" },
      { image: l16, title: "Spicy garlic lime chicken breast" },
      { image: l17, title: "Greek turkey meatballs" },
      { image: l18, title: "Hungarian goulash" },
      { image:l19, title: "Ranch pork chops" },
      { image: l18, title: "Hungarian goulash" },
      { image:l19, title: "Ranch pork chops" },
      { image: l20, title: "Goat cheese & spinach hasselback" },
      { image: l21, title: "Firecracker shrimp" },
      { image: l20, title: "Goat cheese & spinach hasselback" },
      { image: l21, title: "Firecracker shrimp" },
    ],
  },
];

const MealPlan = () => {
  return (
    <div className="meal-plan-container">
      {meals.map((meal, index) => (
        <div key={index} className="meal-section">
          <h2>{meal.type}</h2>
          <div className="meal-items">
            {meal.items.map((item, idx) => (
              <div key={idx} className="meal-item">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealPlan;
