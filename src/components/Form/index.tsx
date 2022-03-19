import React from 'react';
import Button from '../Button';

class Form extends React.Component {
    render() {
        return (
            <form action="">
                <section>
                    <label htmlFor="tarefa">Tarefa</label>
                    <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required />
                </section>
                <section>
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
                    <Button />
                </footer>
            </form>
        )
    }
}

export default Form;