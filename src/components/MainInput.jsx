import { PlusCircle } from "phosphor-react";
import styles from "./MainInput.module.css";


export default function MainInput() {
  return (
    <div className={styles.mainInput}>
      <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa"/>
      <button className={styles.button}>
        Criar
        <PlusCircle size={20} />
      </button>
    </div>
  );
}
