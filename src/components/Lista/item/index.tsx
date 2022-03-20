import { ITarefa } from '../../../types/task';
import style from '../list.module.scss';

export default function Item({ task, time, selecionado, completado, id }: ITarefa) {
    return (
        <li className={style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}