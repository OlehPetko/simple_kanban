import '../App.css';
import {connect} from "react-redux";
import {useState} from "react";

function Kanban_with_redux(props) {
    const {statuses, cards} = props
    const [newCard, setNewCard] = useState('')
    const [updateCard, setUpdateCard] = useState('')


    const addNewHandlerCard = () => {
        props.addNewCard(newCard)
        setNewCard('')
    }
    const openHandlerUpdateCard = (cardId) => {
        props.openUpdateCard(cardId)
        setUpdateCard('')
    }
    const updateNewHandlerCard = (cardId) => {
      props.updateNewCard(cardId, updateCard)
        setUpdateCard('')
    }

    return (
        <div className="App">
            <input autoFocus={true} placeholder='add new task' value={newCard} onChange={event => setNewCard(event.target.value)}/>
            <button onClick={addNewHandlerCard}>add card</button>
            {statuses.map(status =>
                <div>
                    <h3 key={status}>{status}</h3>
                    {cards.filter(card => card.status === status).map(card =>
                        <div key={card.id} style={card.markDone ? {textDecoration: 'line-through'} : null}>
                            <input type="checkbox" onClick={() => props.markCard(card.id)}/>
                            {card.card}
                            <button>up</button>
                            <button>down</button>
                            {card.openDelete ? <button onClick={() => props.openDeleteCard(card.id)}>delete</button> :
                                <div>
                                    <button onClick={() => props.deleteCard(card.id)}>yes delete</button>
                                    <button onClick={() => props.openDeleteCard(card.id)}>cancel</button>
                                </div>}
                            {card.openUpdate ? <button onClick={() => openHandlerUpdateCard(card.id)}>update</button> :
                            <div>
                                <input autoFocus={true} type="text" value={updateCard} onChange={event => setUpdateCard(event.target.value)}/>
                                <button onClick={() => updateNewHandlerCard(card.id)}>save</button>
                                <button onClick={() => openHandlerUpdateCard(card.id)}>cancel</button>
                            </div>}
                        </div>)}
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    statuses: state.statuses,
    cards: state.cards
})
const mapDispatchToProps = (dispatch) => ({
    addNewCard: (newCard) => dispatch({type: 'ADD_NEW_CARD', payload: newCard}),
    markCard: (cardId) => dispatch({type: 'MARK_CARD', payload: cardId}),
    openDeleteCard: (cardId) => dispatch({type: 'OPEN_DELETE_CARD', payload: cardId}),
    openUpdateCard: (cardId) => dispatch({type: 'OPEN_UPDATE_CARD', payload: cardId}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId}),
    updateNewCard: (cardId, updateCard) => dispatch({type: 'UPDATE_CARD', payload: {cardId, updateCard}}),



})

export default connect(mapStateToProps, mapDispatchToProps)(Kanban_with_redux);
