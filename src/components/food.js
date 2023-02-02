import { useState } from "react";
import { food } from "./data";

function FoodSlides() {
  const [foodSpot, setFoodSpot] = useState(0);
  const { spotImage, spotName, spotDescription, maps } = food[foodSpot];

  const previousButton = () => {
    setFoodSpot((foodSpot) => {
      foodSpot--;
      if (foodSpot < 0) {
        return food.length - 1;
      }
      return foodSpot;
    });
  };

  const nextButton = () => {
    setFoodSpot((foodSpot) => {
      foodSpot++;
      if (foodSpot > food.length - 1) {
        foodSpot = 0;
      }
      return foodSpot;
    });
  };

  return (
    <div className="foodContainer">
      <div className="title_food_section">
        <h2 className="subtitle">Got hungry?</h2>
        <p className="secont_p">Try these stunning view spots to eat</p>
      </div>

      <div className="food_card">
        <div>
          <img className="places" src={spotImage} alt="spot" />
        </div>

        <div className="spotName">
          <h2 >{spotName}</h2>
        </div>

        <div>
          <p>{spotDescription}</p>
        </div>

        <div>
          <p>📍 {maps}</p>
        </div>

        <div className="butts">
          <button className="btn_not" onClick={previousButton}>
            Previous
          </button>
          <button className="btn_not" onClick={nextButton}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodSlides;
