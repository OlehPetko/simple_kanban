import '../App.css';
import {useState} from "react";

function Kanban() {
    const statuses = ['todo', 'progress', 'review', 'done']
    const initialState = [
        {
            id: Math.random(),
            card: 'JavaScript',
            status: statuses[0],
            openDelete: true,
            openUpdate: true,
            markDone: false
        },
        {id: Math.random(), card: 'Java', status: statuses[0], openDelete: true, openUpdate: true, markDone: false},
        {id: Math.random(), card: 'React', status: statuses[1], openDelete: true, openUpdate: true, markDone: false},
        {id: Math.random(), card: 'C#', status: statuses[2], openDelete: true, openUpdate: true, markDone: false},
        {id: Math.random(), card: 'Unity', status: statuses[3], openDelete: true, openUpdate: true, markDone: false},
    ]
    const [cards, setCards] = useState(initialState)
    const [newCard, setNewCard] = useState('')
    const [updateCard, setUpdateCard] = useState('')


    const addCard = () => {
        const updateCard = [...cards, {
            id: Math.random(),
            card: newCard,
            status: statuses[0],
            openDelete: true,
            openUpdate: true,
            markDone: true
        }]
        setCards(updateCard)
        setNewCard('')
    }
    const openWindowDelete = (id) => {
        const updateCard = cards.map(card => card.id === id ? {...card, openDelete: !card.openDelete} : card)
        setCards(updateCard)
    }
    const deleteCard = (id) => {
        const updateCard = cards.filter(card => card.id !== id)
        setCards(updateCard)
    }
    const openWindowUpdate = (id) => {
        const updateNewCard = cards.map(card => card.id === id ? {...card, openUpdate: !card.openUpdate} : card)
        setCards(updateNewCard)
        setUpdateCard('')
    }
    const updateSaveCard = (id, newCard) => {
      const updateCard = cards.map(card => card.id === id ? {...card, openUpdate: !card.openUpdate, card: newCard} : card)
      setCards(updateCard)
        setUpdateCard('')
    }
    const moveCard = (id, value) => {
      const updateCard = cards.map(card => card.id === id ? {...card, status: statuses[statuses.indexOf(card.status) + value]} : card)
        setCards(updateCard)
    }
    const markCard = (id) => {
      const updateCard = cards.map(card => card.id === id ? {...card, markDone: !card.markDone } : card)
        setCards(updateCard)
    }

    return (
        <div className="App">
            <input placeholder='add new task' value={newCard} onChange={event => setNewCard(event.target.value)}/>
            <button onClick={addCard}>add new card</button>
            {statuses.map(status =>
                <div key={status}>
                    <h1>
                        {status}
                    </h1>
                    {cards.filter(card => status === card.status).map(card =>
                        <div key={card.id}>
                            {card.status !== 'done' && <button onClick={() => moveCard(card.id,  1)}>down</button>}
                            {card.status !== 'todo' && <button onClick={() => moveCard(card.id, - 1)}>up</button>}
                            <h5 style={card.markDone ? {textDecoration: "line-through"} : null}>
                                {card.card}
                            </h5>
                            <input type="checkbox" onClick={() => markCard(card.id)}/>
                            <button onClick={() => markCard(card.id)}>done</button>
                            {card.openDelete ?
                                <button onClick={() => openWindowDelete(card.id)}>delete</button>
                                :
                                <div>
                                    <button onClick={() => deleteCard(card.id)}>yes delete?</button>
                                    <button onClick={() => openWindowDelete(card.id)}>cancel</button>
                                </div>}
                            {card.openUpdate ?
                                <button onClick={() => openWindowUpdate(card.id)}>update card</button>
                                :
                                <div>
                                    <input placeholder='do you want update your TASK?'
                                           value={updateCard} onChange={event => setUpdateCard(event.target.value)}
                                    />
                                    <button onClick={() => updateSaveCard(card.id, updateCard)}>save change</button>
                                    <button onClick={() => openWindowUpdate(card.id)}>cancel</button>
                                </div>}
                            <button disabled={card.status === 'todo'} onClick={() => moveCard(card.id, - 1)}>up</button>
                            <button disabled={card.status === 'done'} onClick={() => moveCard(card.id, 1)}>down</button>
                        </div>)}
                </div>
            )}


        </div>
    );
}

export default Kanban;
