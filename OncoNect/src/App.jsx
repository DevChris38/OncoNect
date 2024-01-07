import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Bienvenue dans votre espace OncoNect</h1>
      </header>
      <main>
        <h2>
          Sur une échelle de 0 à 10 quel est votre ressenti à propos des
          symptomes suivants ?
        </h2>
        <Slider
          src="../src/assets/mal-de-crane.png"
          title="mal à la tête"
          name="headHache"
        />
      </main>
      <footer>Christopher Arthaud - 2024</footer>
    </>
  );
}

export default App;
