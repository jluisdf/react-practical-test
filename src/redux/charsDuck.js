// import axios from 'axios'
import data from '../data/character.json'

// constantes
let initialData = {
    fetching: false,
    array: [],
    current: {}
}

// let URL = "https://rickandmortyapi.com/api/character"

// types
let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"
let REMOVE_CHARACTER = "REMOVE_CHARACTER"
let UPDATE_CHARACTERS = "UPDATE_CHARACTERS"
let INSERT_CHARACTER = "INSERT_CHARACTER"
let INSERT_CHARACTER_SUCCESS = "INSERT_CHARACTER_SUCCESS"

// reducer
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case REMOVE_CHARACTER:
            return { ...state, array: action.payload }
        case GET_CHARACTERS:
            return { ...state, fetching: true }
        case GET_CHARACTERS_ERROR:
            return { ...state, fetching: false, error: action.payload }
        case GET_CHARACTERS_SUCCESS:
            return { ...state, array: action.payload, fetching: false }
        case UPDATE_CHARACTERS:
            return { ...state, fetching: true }
        case INSERT_CHARACTER:
            return { ...state, fetching: true }
        case INSERT_CHARACTER_SUCCESS:
            return { ...state, fetching: false }
        default:
            return state
    }
}

// actions (thunks)
export let getCharactersAction = () => async (dispatch, getState) => {

    dispatch({ type: GET_CHARACTERS })
    // Issue cors domain
    if(localStorage.getItem('offset=0')){
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
    }else{
        await new Promise(resolve => setTimeout(resolve, 3000));
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: data.results
        })
        localStorage.setItem('offset=0', JSON.stringify(data.results))
    }

    /*
    return axios.get(URL)
        .then(res => {
            dispatch({
                type: GET_CHARACTERS_SUCCESS,
                payload: res.data.results
            })
        })
        .catch(err => {
            console.log(err, err.response)
            dispatch({
                type: GET_CHARACTERS_ERROR,
                payload: (err.response) ? err.response.message : 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde'
            })
        })
    */
}

export let resetCharactersAction = () => async (dispatch, getState) => {
    // limpiamos el state
    dispatch({ type: REMOVE_CHARACTER, payload: [] })
    localStorage.removeItem('offset=0');
    // recuperamos el state
    dispatch({ type: GET_CHARACTERS })
    await new Promise(resolve => setTimeout(resolve, 3000));
    dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: data.results
    })
    localStorage.setItem('offset=0', JSON.stringify(data.results))
}

export let removeCharacterAction = (id) => (dispatch, getState) => {
    let { array } = getState().characters
    let newArray = array.filter(character => Number(character.id) !== Number(id))
    dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: newArray
    })
    localStorage.setItem('offset=0', JSON.stringify(newArray))
}

export let updateCharacterAction = (id, values) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_CHARACTERS })
    await new Promise(resolve => setTimeout(resolve, 2000));
    let { array } = getState().characters
    let index = array.findIndex(entry => Number(entry.id) === Number(id))
    array[index].name = values.name
    array[index].gender = values.gender
    array[index].species = values.species
    array[index].status = values.status
    dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: array
    })
    localStorage.setItem('offset=0', JSON.stringify(array))
}

export let insertCharacterAction = (values) => async (dispatch, getState) => {
    dispatch({ type: INSERT_CHARACTER })
    await new Promise(resolve => setTimeout(resolve, 3000))
    let { array } = getState().characters
    let max = array.reduce((prev, current) => (prev.id > current.id) ? prev : current)
    values.id = Number(max.id) + 1
    values.image = 'http://4.bp.blogspot.com/-sI9fkWMp4QA/TsHwZhurz0I/AAAAAAAAARk/cM5OM3JMTg0/s1600/Programando-Simpsons.jpg'
    array.push(values)
    dispatch({
        type: INSERT_CHARACTER_SUCCESS,
        payload: [...array]
    })
    localStorage.setItem('offset=0', JSON.stringify(array))
}
