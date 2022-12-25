import "./App.css";
import FoodSlides from "./components/food";
import ShowPlace from "./components/places";
import { FeedbackSlide } from "./components/slides";

function App() {
  return (
    <div>
      <div>
        <h1>Visit Austin TX</h1>
      </div>

      <div>
        <ShowPlace />
      </div>

      <div>
        <FoodSlides />
      </div>

      <div>
        <FeedbackSlide />
      </div>

      <div className="footer">
        <h2>Have a wonderful trip to Austin TX ⭐️</h2>
      </div>
    </div>
  );
}

export default App;
