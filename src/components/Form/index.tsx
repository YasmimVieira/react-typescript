import React from 'react';
import { ITarefa } from '../../types/task';
import Button from '../Button';
import style from './form.module.scss'
import { v4 as uuidv4 } from 'uuid';

class Form extends React.Component<{
    setTask: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        task: "",
        time: "00:00"
    }

    adicionarTarefa(event: React.FormEvent) {
        event.preventDefault();
        this.props.setTask(
            tarefasAntigas => 
            [
                ...tarefasAntigas, 
                { 
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }]);
        this.setState({
            task: "",
            time: "00:00"
        })
    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <section className={style.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input 
                    type="text"
                    name="tarefa"
                    value={this.state.task}
                    onChange={evento => this.setState({...this.state, task: evento.target.value})}
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required />
                </section>
                <section className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input 
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={this.state.time}
                    onChange={evento => this.setState({...this.state, time: evento.target.value})}
                    min="00:00:00"
                    max="01:30:00"
                    required
                     />
                </section>
                <footer>
                    <Button type="submit">
                        Adicionar
                    </Button>
                </footer>
            </form>
        )
    }
}

export default Form;