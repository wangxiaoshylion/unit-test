import { fetchData, fetchData2, fetchData3 } from "./fetchData";

// 异步函数
// test('测试接口异步请求 返回结果为{ success: true }', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({ success: true });
//         done();
//     });
// });


// test('测试接口 404', () => {
//     expect.assertions(1);
//     return fetchData3().catch(e => {
//       expect(e.toString().indexOf('404') > -1).toBe(true)
//     })
//   });

//   // 遇到一些异步请求，我们可以使用毁掉函数 或者 then方法 或者 catch方法去处理，不过需要注意： catch需要结合expect.assertions去处理，避免catch里的代码不执行


//   test('测试promise毁掉函数', () => {
//     return fetchData2().then(res => {
//         expect(res.data).toEqual({ success: true });
//     })
//   });

//   test('测试promise2毁掉函数', () => {
//     // fetchData2().then(res => console.log(res.data))
//     return expect(fetchData2()).resolves.toMatchObject({
//         data: {
//             success: true
//         }
//     })
//   });

test('测试接口404', () => {
    return expect(fetchData3()).rejects.toThrow();
})

test('测试接口404-2', async() => {
    await expect(fetchData3()).rejects.toThrow();
})

  test('测试async和await先取数据，在进行expect操作', async() => {
    const response = await fetchData2();
    expect(response.data).toEqual({
        success: true
    });
  });


  test('测试async和await先取数据，在进行expect操作', async() => {
    expect.assertions(1);
    try {
        await fetchData3(); 
    }catch(error){
        console.log(error.toString())
        expect(error.toString()).toStrictEqual('Error: Request failed with status code 404')
    }
  });