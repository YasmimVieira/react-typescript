import style from './list.module.scss';
import Item from './item';
import { ITarefa } from '../../types/task';

function Lista({ task }: { task: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {task.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista