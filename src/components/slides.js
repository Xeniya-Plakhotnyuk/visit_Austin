import { useState } from "react";
import { slides } from "./data";

export function FeedbackSlide() {
  const [slide, setSlide] = useState(0);
  const { personName, avatar, quot, account } = slides[slide];

  const backButton = () => {
    setSlide((slide) => {
      slide--;
      if (slide < 0) {
        return slides.length - 1;
      }
      return slide;
    });
  };

  const nextButton = () => {
    setSlide((slide) => {
      slide++;
      if (slide > slides.length - 1) {
        slide = 0;
      }
      return slide;
    });
  };

  return (
    <div>
      <div className="container_last">
        <h2 className="subtitle">Need some travel ideas?</h2>
        <p className="secont_p">Check another Austin lover's hints!</p>
      </div>

      
      <div className="feedback">
        <button className="bigger" onClick={backButton}>
          ◀️
        </button>

        <div className="card">
          <div className="top">
            <h2 className="name">{personName}</h2>
            <img className="circle-img" src={avatar} alt="avatar_img" />
          </div>
          <div className="bottom">
            <p className="info">{quot}</p>
            <p className="insta">Instagram: {account}</p>
          </div>
        </div>
        <button className="bigger" onClick={nextButton}>
          {" "}
          ▶️{" "}
        </button>
      </div>
    </div>
  );
}

export default FeedbackSlide;
