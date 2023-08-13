import axios from 'axios';

export const runCallBack = (callback) => {
    callback('abc');
}

export const createObject = (classItem) => {
    new classItem();
}


export function fetchData() {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
}

