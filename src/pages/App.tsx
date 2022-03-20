import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import Lista from "../components/Lista/list";
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
