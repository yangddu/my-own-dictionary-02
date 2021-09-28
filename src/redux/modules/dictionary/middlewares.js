import { db } from '../../../firebase/Firebase';
import { doc, collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { loadWord, createWord, updateWord, deleteWord } from './action';

export const loadWordFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, "dictionary"));
        // console.log(word_data);

        let word_list = [];
        word_data.forEach((doc) => {
            // console.log(doc.data());
            word_list.push({id:doc.id, ...doc.data()});
        })
        // console.log(word_list);
        dispatch(loadWord(word_list));
    }
};

export const addWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dictionary"), word);
        const word_data = { id: docRef.id, ...word}

        dispatch(createWord(word_data));
    }
}

export const updateWordFB = (word_id) => {
    return async function (dispatch, getState) {
        const docRef = doc(db, "dictionary", word_id);
        await updateDoc(docRef, { completed: true });

        dispatch(updateWord(word_id));
     }
}


export const deleteWordFB = (word_id) => {
    return async function (dispatch) {
        if( !word_id ){
            window.alert('아이디가 없네요!');
            return;
        }
        const docRef = doc(db, "dictionary", word_id);
        await deleteDoc(docRef);

        dispatch(deleteWord(word_id));
    }
}