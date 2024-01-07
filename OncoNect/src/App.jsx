import styles from "./App.module.css";
import Slider from "./Slider";

function App() {
  return (
    <>
      <header>
        <h1>Recrutement stage OncoNect</h1>
      </header>
      <main>
        <h2>
          Sur une échelle de 0 à 10 quel est votre ressenti à propos des
          symptomes suivants ?
        </h2>
        <Slider title="Maux de tête" name="headhache" />
        <Slider title="Difficultés à respirer" name="breathless" />
        <Slider title="Perte d'appétit" name="appetite" />
      </main>
      <footer>Christopher Arthaud - 2024</footer>
    </>
  );
}

export default App;
