import { useState } from "react";
import { data } from "./data";

export function ShowPlace() {
  const [places, setPLaces] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeItem = (id) => {
    let newList = places.filter((element) => element.id !== id);
    setPLaces(newList);
  };

  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText);
  };

  return (
    <div>
      <div className="title">
        <h2>
          {places.length === 0
            ? "You haven't places to visit"
            : "LIST OF " + places.length + " MOST FABULOUS NATURE PLACES"}
        </h2>
      </div>

      {places.map((element) => {
        const { id, spotName, description, image, address, showMore } = element;

        return (
          <div key={id} className="main">
            <div className="container">
              <div>
                <h2>
                 {spotName}
                </h2>
              </div>
              <div>
                <img src={image} alt="place" width="500px" className="places" />
              </div>
              <div>
                <p className="description">
                  {showMore
                    ? description
                    : description.substring(0, 230) + "....."}
                </p>
                <button
                  className="showmore"
                  onClick={() => showTextClick(element)}
                >
                  {showMore ? "Show Less" : "Expand"}
                </button>
              </div>
              <div className="butts">
                <div className="button-32">{address}</div>
                <div>
                  <button className="btn_not" onClick={() => removeItem(id)}>
                    NOT INTERESTED
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="delete">
        <button className="delete2" onClick={() => setPLaces([])}>
          Delete All
        </button>
      </div>
    </div>
  );
}

export default ShowPlace;
