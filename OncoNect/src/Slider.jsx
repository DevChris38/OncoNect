import { useState } from "react";
import styles from "./Slider.module.css";

function Slider({ title, name }) {
  const [value, setValue] = useState(0);
  const [colors, setColors] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
    setColors(`hue-rotate(${-1.5 * e.target.value}deg)`);
  };

  return (
    <div id={styles.sliderContainer}>
      <label htmlFor={name}>{title}</label>
      <input
        className={styles.sliding}
        id={styles[name]}
        type="range"
        value={value}
        min={0}
        max={100}
        defaultValue={0}
        name={name}
        onChange={(e) => handleChange(e)}
        style={{ filter: colors }}
      ></input>
    </div>
  );
}

export default Slider;
