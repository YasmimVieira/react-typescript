import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import Lista from "../components/Lista/list";
import { ITarefa } from "../types/task";
import style from './app.module.scss';

function App() {
  const [task, setTask] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionado: ITarefa) {
    setSelecionado(tarefaSelecionado);
    setTask(tarefasAnterios => tarefasAnterios.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id ? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Form
      setTask={setTask} />
      <Lista
      task={task} 
      selecionaTarefa={selecionaTarefa}/>
      <Cronometro />
    </div>
  );
}

export default App;
