import { Header } from "./components/Header"
import MainInput from "./components/MainInput";


import styles from "./App.module.css";
import "./global.css"

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main style={{ backgroundColor: "yellow" }}>
          <MainInput />
          <div>e</div>
          <div>e</div>
          <div>e</div>
          <div>e</div>
          <div>e</div>
        </main>
      </div>
    </div>
  );
}

