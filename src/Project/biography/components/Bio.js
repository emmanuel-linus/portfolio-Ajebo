import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useCallback
} from "react";
import image1 from "../styles/fit.png";
import { useTransition, animated } from "react-spring";
import "../styles/styles.css";
import "../styles/Bio.css";
import { NavLink } from "react-router-dom";

class Bio extends Component {
  render() {
    return (
      <div className="bioData">
        <div className="animation">
          <App />
          <NavLink to="/Gallery">
            <button className="button">GALLERY</button>
          </NavLink>
        </div>

        <div className="bioImg">
          <img src={image1} />
        </div>
      </div>
    );
  }
}
export default Bio;

const App = () => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "rgba(180, 35, 16, 0.895)",
      fontSize: 50
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80, fontSize: 50 },
      {
        transform: "perspective(600px) rotateX(180deg)",
        color: "rgba(22, 10, 9, 0.997);"
      },
      { transform: "perspective(600px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0, fontSize: 50 }
    ],
    update: { color: "rgb(6, 18, 54)" }
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(() => set(["My Name Is", "Moses", "Nontgoste"]), 2000)
    );
    ref.current.push(
      setTimeout(
        () => set(["I'M An Award", "Winnig OAP", "With The Sauce"]),
        5000
      )
    );
    ref.current.push(
      setTimeout(() => set(["Ajebo", "WazobiaFM", "Kano"]), 8000)
    );
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div className="body">
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item"
          key={key}
          style={rest}
          onClick={reset}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};
