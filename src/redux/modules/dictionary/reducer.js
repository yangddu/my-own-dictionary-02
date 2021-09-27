// reducer.js

import {
    CREATE, LOAD, UPDATE, DELETE
} from './types';

// import {
//     createWord
// } from './action';

const initialState = {
    word: [
        // {
        //     id: 0,
        //     word: 'ㅎ1ㅎ1',
        //     description: '히히를 변형한 단어',
        //     example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1',
        // },
        // {
        //     id: 1,
        //     word: 'ㅎ2ㅎ2',
        //     description: '하이하이를 변형한 단어',
        //     example: '야반갑다 ㅎ2ㅎ2',
        // },
        // {
        //     id: 2,
        //     word: 'ㅎ3ㅎ3',
        //     description: 'test3',
        //     example: 'test3',
        // },

    ]
}



// Reducer
export default function addReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD: {
            return { word : action.word_list}
        }
        case CREATE: {
            console.log('이제 완료할거야')
            const new_word_list = [...state.word, action.word]
            return { word: new_word_list }
        }

        case DELETE: {
            console.log(state, action);
            const new_word_list = state.word.filter((l, idx) => {
                return Number(action.word_index) !== idx;
            })
            return { word: new_word_list};
        }
    default: return state;
    }
}

