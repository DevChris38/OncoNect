import { useState } from "react";
import styles from "./Slider.module.css";

function Slider({ src, title, name }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <label className={styles.sliding} htmlFor={name}>
        {title}
      </label>
      <input
        className={styles.sliding}
        type="range"
        value={value}
        name={name}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </>
  );
}

export default Slider;
