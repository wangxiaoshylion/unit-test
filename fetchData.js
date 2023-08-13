import axios from 'axios';


export const fetchData = (fn) => {
    axios.get('http://www.dell-lee.com/react/api/demo.json').then(res => {
        fn(res.data);
    })
}

export const fetchData2 = (fn) => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
}

// 接口404
export const fetchData3 = () => {
    return axios.get('http://www.dell-lee.com/react/api/demo.json');
  }
  
  
  