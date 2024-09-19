import React from "react";
import manageobesity from '../assert/manageobesity.PNG';
import './ReadDiet.css'; 

const ReadDiet = () => {
  return (
    <div className="read-diet-container">
      <img src={manageobesity} alt="Management of Obesity" className="read-diet-image" />
      <div className="read-diet-content">
        <h1 className="read-diet-title">Dietary Approach</h1>
        <p className="read-diet-paragraph">
          Obesity is a relatively modern phenomenon. Wide availability of calorie-dense (nutritionally poor) processed foods, sedentary lifestyle, psycho-social stress, and sleep deprivation create an obesogenic environment. Genetic influences might also be responsible for food preferences. Chronic over-nutrition with a sedentary lifestyle is the perfect recipe for metabolic disorders/weight-gain. Lifestyle modification is the first step in weight management. Lifestyle modifications consist of nutritious diet, regular exercise, sleep quality, and stress management. Diet has an important role in the management of obesity. Weightloss is 80 percent about dieting and 20 percent about exercise. In fact, you can lose weight by dieting alone, but not with physical activity alone. The best results are achieved by combining the two.
        </p>
        <p className="read-diet-paragraph">
          Meaningful improvement in overall health outcomes requires at least 10% weight loss. A weight loss of 5-10% is associated with a reduced risk of diabetes and coronary artery disease. Unfortunately, the general population wants a quick fix and rapid results, and the same is often not sustainable in the long term. Reaching ideal body weight might seem too slow for some individuals, triggering giving up on lifestyle modifications. Therefore, it is important to set realistic goals.
        </p>
        <p className="read-diet-paragraph">
          Initial dietary approach was based on achieving energy deficit by varying macronutrient composition. Unfortunately, the “calorie in calorie out” concept over-simplifies the physiologic process. Weight and appetite regulation are maintained by a complex interaction of hormonal and neuronal pathways.
        </p>
      </div>
    </div>
  );
}

export default ReadDiet;
