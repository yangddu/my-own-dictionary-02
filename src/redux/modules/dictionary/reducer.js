// reducer.js

import {
    CREATE, LOAD, UPDATE, DELETE
} from './types';

const initialState = {
    word: []
};



// Reducer
export default function addReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD: {
            return { word : action.word_list}
        }
        case CREATE: {
            const new_word_list = [...state.word, action.word]
            return { word: new_word_list }
        }

        case UPDATE: {
            const new_word_list = state.word.map((word,index) => {
                // console.log(word.id, action.word_id);
                if( action.word_id === word.id) {
                    return {...word, completed: true};
                }else {
                    return word;
                }
            })
            return { word: new_word_list };
        }

        case DELETE: {
            const new_word_list = state.word.filter((word, index) => {
                console.log(word.id, action.word_id);
                if( action.word_id !== word.id) {
                    return { ...word }
                }
            })
            return { word: new_word_list };
        }
    default: return state;
    }
}

