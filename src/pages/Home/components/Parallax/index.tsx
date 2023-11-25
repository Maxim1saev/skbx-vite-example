import { useEffect, useState } from "react";

// import SmallPokeBallPng from "./assets/PokeBall1.png";
import CloudPng from "./assets/Cloud1.png";
// import PokeBallPng from "./assets/PokeBall2.png";
import CloudBigPng from "./assets/Cloud2.png";
import SkillboxPng from "./assets/skillbox.jpeg";

import "./Parallax.css";

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={"parallax-root"}>
      <img src={CloudBigPng} alt="cloud image" className={"parallax-cloud1"} />

      <img src={CloudPng} alt="cloud image" className={"parallax-cloud2"} />

      <img src={CloudBigPng} alt="cloud image" className={"parallax-cloud3"} />

      <img src={CloudPng} alt="cloud image" className={"parallax-cloud4"} />

      <img src={CloudPng} alt="cloud image" className={"parallax-cloud5"} />

      <img src={CloudBigPng} alt="cloud image" className={"parallax-cloud6"} />

      <img
        src={SkillboxPng}
        alt="skillbox image"
        className={"parallax-skillbox"}
        style={{
          transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`,
        }}
      />
    </div>
  );
};

export default Parallax;
