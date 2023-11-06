import "./ShopContainer.css";
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { useState } from "react";

const ShopCard = () => {
  const imgUrl =
    "https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-link-chain-url-connection-link-abstract-circle-background-fl-png-image_1985250.jpg";

  const shopCardItems = [
    {
      sampleImg: imgUrl,
      heading: "Pet Palace",
      timing: "Open till 9:00 - 6:00",
    },
    {
      sampleImg: imgUrl,
      heading: "Pet Palace",
      timing: "Open till 9:00 - 6:00",
    },
    {
      sampleImg: imgUrl,
      heading: "Pet Palace",
      timing: "Open till 9:00 - 6:00",
    },
    {
      sampleImg: imgUrl,
      heading: "Pet Palace",
      timing: "Open till 9:00 - 6:00",
    },
  ];

  const [totalRatingStars, setTotalRatingStars] = useState(0);

  return (
    <>
      {shopCardItems?.map((elem, index) => {
        return (
          <div key={index} className="explore-shop-card">
            <div className="shop-top-container">
              <div className="explore-shop-card-left">
                <img src={elem?.sampleImg} alt="shop-card" />
              </div>
              <div className="explore-shop-card-right">
                <h3>{elem?.heading}</h3>
                <div className="shop-rating-container">
                  <button>
                    {totalRatingStars > 0 ? <RiStarSFill /> : <RiStarSLine />}
                  </button>
                  <button>
                    {totalRatingStars > 1 ? <RiStarSFill /> : <RiStarSLine />}
                  </button>
                  <button>
                    {totalRatingStars > 2 ? <RiStarSFill /> : <RiStarSLine />}
                  </button>
                  <button>
                    {totalRatingStars > 3 ? <RiStarSFill /> : <RiStarSLine />}
                  </button>
                  <button>
                    {totalRatingStars > 4 ? <RiStarSFill /> : <RiStarSLine />}
                  </button>
                </div>
                <p>{elem?.timing}</p>
              </div>
            </div>
            <div className="explore-card-footer">
              <button>MORE INFO</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ShopCard;
