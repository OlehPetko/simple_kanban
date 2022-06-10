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
            markDone: true
        },
        {id: Math.random(), card: 'Java', status: statuses[0], openDelete: true, openUpdate: true, markDone: true},
        {id: Math.random(), card: 'React', status: statuses[1], openDelete: true, openUpdate: true, markDone: true},
        {id: Math.random(), card: 'C#', status: statuses[2], openDelete: true, openUpdate: true, markDone: true},
        {id: Math.random(), card: 'Unity', status: statuses[3], openDelete: true, openUpdate: true, markDone: true},
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
                            {card.card}
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

                        </div>)}
                </div>
            )}


        </div>
    );
}

export default Kanban;
