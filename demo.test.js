import { runCallBack, createObject, fetchData } from './demo';
import axios from 'axios';
jest.mock('axios');

test('测试回调函数-runCallBack', () => {
    const func = jest.fn(); // mock函数，捕获函数的调用
    // func.mockReturnValueOnce('Dell').mockReturnValueOnce('Dell2');
    func.mockReturnValue('dell');
    runCallBack(func);
    runCallBack(func);
    expect(func).toBeCalled();
    // expect(func.mock.calls[0]).toEqual('abc')
    expect(func.mock.results[0].value).toEqual('dell')
    console.log(func.mock);
});

test('createObject', () => {
    const func = jest.fn();
    createObject(func);
    console.log(func.mock);

});

test('模拟mock请求', async() => {
    // const res = await fetchData();
    // console.log(res.data);

    // 不发送请求，来mock请求
    axios.get.mockResolvedValue({ data: 'success' });
    await fetchData().then(res => {
        console.log(res)
        expect(res)?.toEqual({
            data: 'success'
        })
    })
})

// mock
// 1. 捕获函数的调用和返回结果，以及this和调用顺序
// 2. 可以自行设置返回结果
// 3. 改变函数的内部实现