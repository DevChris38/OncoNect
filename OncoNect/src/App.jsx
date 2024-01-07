import styles from "./App.module.css";
import Slider from "./Slider";

function App() {
  return (
    <div id={styles.appContainer}>
      <header>
        <h1>Recrutement stage OncoNect</h1>
      </header>
      <main>
        <h2>Quel est votre ressenti à propos des symptomes suivants ?</h2>
        <Slider title="maux de tête" name="headhache" />
        <Slider title="difficultés à respirer" name="breathless" />
        <Slider title="perte d'appétit" name="appetite" />
      </main>
      <footer>Christopher Arthaud - 2024</footer>
    </div>
  );
}

export default App;
