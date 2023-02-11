import "./App.css";
import FoodSlides from "./components/FoodSlides";
import ShowPlace from "./components/ShowPlace";
import { FeedbackSlide } from "./components/FeedBackSlide";

function App() {
  return (
    <div>
      <div className="header">
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
        <div>
          <p>Have a wonderful trip to Austin TX ⭐️</p>
        </div>
        <div>
          <p className="footer_disclaimer">
            This website created for educational purposes only<br></br> by
            Xeniya Plakhotnyuk
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
