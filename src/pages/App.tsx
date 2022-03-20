import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import Lista from "../components/Lista/list";
import { ITarefa } from "../types/task";
import style from './app.module.scss';

function App() {
  const [task, setTask] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form
      setTask={setTask} />
      <Lista
      task={task} />
      <Cronometro />
    </div>
  );
}

export default App;
