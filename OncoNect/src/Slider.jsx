import { useEffect, useState } from "react";
import styles from "./Slider.module.css";

function Slider({ title, name }) {
  const [value, setValue] = useState(0);
  const [colors, setColors] = useState(0);
  const [description, setDescription] = useState("Vous n'avez pas ");

  const handleChange = (e) => {
    setValue(e.target.value);
    setColors(`hue-rotate(${-1.5 * e.target.value}deg)`);
  };

  useEffect(() => {
    if (value < 5) {
      setDescription("Vous n'avez pas de ");
    } else if (value < 34) {
      setDescription("Vous avez peu de ");
    } else if ((value < 67) & (value >= 34)) {
      setDescription("Vous avez des ");
    } else if (value >= 67) {
      setDescription("Vous avez beaucoup de ");
    }
  }, [value]);

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
      <div id={styles.symptomeQuantification}>
        <h2>
          {description}
          {title}
        </h2>
      </div>
    </div>
  );
}

export default Slider;
