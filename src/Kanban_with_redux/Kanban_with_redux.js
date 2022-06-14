import '../App.css';
import {connect} from "react-redux";
import {useState} from "react";

function Kanban_with_redux(props) {
    const {statuses, cards} = props
    const [newCard, setNewCard] = useState('')
    const addNewHandlerCard = () => {
      props.addNewCard(newCard)
        setNewCard('')
    }
    return (
        <div className="App">
            <input placeholder='add new task' value={newCard} onChange={event => setNewCard(event.target.value)}/>
            <button onClick={addNewHandlerCard}>add card</button>
            {statuses.map(status =>
                <div>
                <h3 key={status}>{status}</h3>
                    {cards.filter(card => card.status === status).map(card =>
                    <div>
                        {card.card}
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
addNewCard: (newCard) => dispatch({type: 'ADD_NEW_CARD', payload: newCard})
})

export default connect(mapStateToProps, mapDispatchToProps)(Kanban_with_redux);
