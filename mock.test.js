
// import Axios from "axios";

import { fetchData } from "./mock";
// jest.mock('axios');
jest.mock('./mock'); // jest,config.js 设置automock, 会自动去__mock__文件夹下找同名mock文件
// jest.unmock('./mock')
const { getNumber } = jest.requireActual('./mock')


test('测试fetchData mock', async() => {
  // mockget请求返回值
  // Axios.get.mockResolvedValue({
  //   data: "(function() {return '123' })()"
  // })
  const res = await fetchData();
  // console.log("**", res)
  expect(eval(res.data)).toEqual('123');
});

test('测试getNumber actual', () => {
  expect(getNumber()).toString('123')
})