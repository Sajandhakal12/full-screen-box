import { useState } from "react";
export default function Home() {
  const [active, setActive] = useState("front");
  return (
    <>
      <div className="scene">
        <div className={`box show-${active}`}>
          <div className="box__face box__face--front"></div>
          <div className="box__face box__face--back"></div>
          <div className="box__face box__face--right"></div>
          <div className="box__face box__face--left"></div>
          <div className="box__face box__face--top"></div>
          <div className="box__face box__face--bottom"></div>
        </div>
      </div>
      <p className="radio-group">
        <label>
          <input
            type="radio"
            name="rotate-cube-side"
            value="front"
            checked={active === "front"}
            onChange={(e) => setActive(e.target.value)}
          />
          front
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube-side"
            value="right"
            checked={active === "right"}
            onChange={(e) => setActive(e.target.value)}
          />
          right
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube-side"
            value="back"
            checked={active === "back"}
            onChange={(e) => setActive(e.target.value)}
          />
          back
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube-side"
            value="left"
            checked={active === "left"}
            onChange={(e) => setActive(e.target.value)}
          />
          left
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube-side"
            value="top"
            checked={active === "top"}
            onChange={(e) => setActive(e.target.value)}
          />
          top
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube-side"
            value="bottom"
            checked={active === "bottom"}
            onChange={(e) => setActive(e.target.value)}
          />
          bottom
        </label>
      </p>
    </>
  );
}
