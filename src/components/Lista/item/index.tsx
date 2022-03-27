import { ITarefa } from '../../../types/task';
import style from '../list.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}


export default function Item({ task, time, selecionado, completado, id }: Props) {
    return (
        <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
        onClick={() => selecionaTarefa({
            task,
            time, 
            selecionado,
            completado,
            id
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}