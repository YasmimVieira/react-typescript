import React from 'react';
import Button from '../Button';
import style from './form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <section className={style.inputContainer}>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input 
                    type="text"
                    name="tarefa"
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
                    min="00:00:00"
                    max="01:30:00"
                    required
                     />
                </section>
                <footer>
                    <Button>
                        Adicionar
                    </Button>
                </footer>
            </form>
        )
    }
}

export default Form;