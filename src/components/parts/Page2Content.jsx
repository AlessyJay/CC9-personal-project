import React from "react";
import camera from "../../imgs/detail1.jpeg";
import detail2 from "../../imgs/detail2.jpeg";

function Page2Content() {
  return (
    <>
      <h1>Why GREENT?</h1>
      <div className="detailPage2" id="detailBg2">
        <p id="detail">
          <span style={{ color: "green" }}>GREENT</span> Travel is a
          forward-thinking travel company headquartered in London born out of a
          passion to do things differently.
          <br />
          <br />
          In Swahili, a Bantu language spoken by millions in Eastern, Central
          and Southern Africa, the name Niara means "with utmost purpose" <br />
          <br />
          and our team are united by a passion for exploration and a belief that
          the right kind of travel can make the world a better place.
          <br />
          <br />
          Our Travel Researchers are here to create incredible trips with a
          positive impact for you.
        </p>
        <div className="column">
          <div className="more">
            <img src={camera} alt="Camera" />
            <h2 style={{ display: "flex" }}>
              Unforgettable experiences
              <br />
              <br />
              Creating your trip is entirely collaborative and our Travel
              Researchers are here for every step.
            </h2>
          </div>
          <div className="more2">
            <img src={detail2} alt="Camera" />
            <h2>
              Positive impact
              <br />
              <br />
              Curated sustainable experiences and accommodation that maximize
              the benefits to local people and place.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2Content;
