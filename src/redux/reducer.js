const initialState = {
    counter: [
        {id: Math.random(), counter: 1, buttons: [1]},
        {id: Math.random(), counter: 2, buttons: [1, 2]},
        {id: Math.random(), counter: 3, buttons: [1, 2, 3]},
        {id: Math.random(), counter: 4, buttons: [1, 2, 3, 4]},
        {id: Math.random(), counter: 5, buttons: [1, 2, 3, 4, 5]},
    ],

    todos: [
        {id: Math.random(), name: 'Liverpool', openTodo: true, openUpdate: true, markTodo: false},
        {id: Math.random(), name: 'Vancouver', openTodo: true, openUpdate: true, markTodo: false},
        {id: Math.random(), name: 'LA', openTodo: true, openUpdate: true, markTodo: false},
        {id: Math.random(), name: 'San Francisco', openTodo: true, openUpdate: true, markTodo: false},
    ],
    statuses: ['todo', 'progress', 'review', 'done'],
    cards: [
        {id: Math.random(), card: 'Java', status: 'todo', openDelete: true, openUpdate: true, markDone: false},
        {id: Math.random(), card: 'React', status: 'progress', openDelete: true, openUpdate: true, markDone: false},
        {id: Math.random(), card: 'C#', status: 'review', openDelete: true, openUpdate: true, markDone: false},
        {id: Math.random(), card: 'Unity', status: 'done', openDelete: true, openUpdate: true, markDone: false},
    ],
}
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_TODO_SERVER': return {
            ...state, todos: action.payload
        }

        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {
                    id: Math.random(),
                    name: action.payload,
                    openTodo: true,
                    openUpdate: true,
                    markTodo: false
                }]
            }
        case 'OPEN_UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(el => el.id === action.payload ? {...el, openUpdate: !el.openUpdate} : el)
            }
        case 'UPDATE_TODO':
            return {
                ...state, todos: state.todos.map(el => el.id === action.payload.todoId ?
                    {...el, name: action.payload.updateTodo, openUpdate: !el.openUpdate} : el)
            }
        case 'MARK_TODO':
            return {
                ...state, todos: state.todos.map(el => el.id === action.payload ? {...el, markTodo: !el.markTodo} : el)
            }
        case 'OPEN_DELETE_TODO':
            return {
                ...state, todos: state.todos.map(el => el.id === action.payload ? {...el, openTodo: !el.openTodo} : el)
            }
        case 'DELETE_TODO':
            return {
                ...state, todos: state.todos.filter(el => el.id !== action.payload)
            }
        case 'MOVE_TODO':
            return {
                ...state, todos: state.todos.map((el, index) => {
                    let currentTodo = action.payload.currentTodo
                    let nextTodo = action.payload.nextTodo
                    if (index === currentTodo) return state.todos[nextTodo]
                    if (index === nextTodo) return state.todos[currentTodo]
                    return el
                })
            }
        case 'ADD_NEW_CARD':
            return {
                ...state,
                cards: [...state.cards, {
                    id: Math.random(),
                    card: action.payload, status: 'todo', openDelete: true, openUpdate: true, markDone: false
                }]
            }
        case 'MARK_CARD': return {
            ...state, cards: state.cards.map(el => el.id === action.payload ? {...el, markDone: !el.markDone} : el)
        }
        case 'OPEN_DELETE_CARD': return {
            ...state, cards: state.cards.map(el => el.id === action.payload ? {...el, openDelete: !el.openDelete} : el)
        }
        case 'OPEN_UPDATE_CARD': return {
            ...state, cards: state.cards.map(el => el.id === action.payload ? {...el, openUpdate: !el.openUpdate} : el)
        }
        case 'DELETE_CARD': return {
            ...state, cards: state.cards.filter(el => el.id !== action.payload)
        }
        case 'UPDATE_CARD': return {
            ...state, cards: state.cards.map(el => el.id === action.payload.cardId ? {...el, card: action.payload.updateCard, openUpdate: !el.openUpdate} : el)
        }
        default:
            return state
    }
}
export default tasks
