import style from './list.module.scss';
import Item from './item';
import { useState } from 'react';

function Lista() {
    const [task, setTask] = useState([{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Javascript',
        time: '01:00:00'
    }]) 
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTask([...task, { task: "Estudar react", time: "05:00:00" }])
            }}>Estudos do dia</h2>
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