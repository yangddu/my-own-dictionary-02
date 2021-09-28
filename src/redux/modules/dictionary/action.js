// action.js

import {
    CREATE, LOAD, UPDATE, DELETE
} from './types';


// Actions Creators
export function createWord(word) {
    console.log('액션을 생성할거야!');
    return { type: CREATE, word };
}

export function loadWord(word_list) {
    return { type: LOAD, word_list };
}

export function updateWord(word_id) {
    return { type: UPDATE, word_id }
}

export function deleteWord(word_id) {
    return { type: DELETE, word_id}
}
