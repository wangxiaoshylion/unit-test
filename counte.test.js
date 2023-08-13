import Counter from './counter';

let counter = null;
// 在所有实例运行之前执行的钩子函数
// 钩子函数的作用域
beforeEach(() => {
    counter = new Counter();
    console.log('beforeEach')
});
afterEach(() => {
    console.log('afterEach');
});
beforeAll(() => {
    console.log('beforeAll')
    
});
afterAll(() => {
    console.log('afterall')
});


// 可以通过describe对测试用例进行分组
describe('测试增加相关的代码', () => {
    beforeEach(() => {
        console.log('add-beforeEach')
    })

    test('addOne', () => {
        console.log('1')
        counter.addOne();
        expect(counter.count).toBe(1);
    });

    test.only('addTwo', () => {
        console.log('2')
        counter.addTwo();
        expect(counter.count).toBe(2);
    });
})


describe("测试减少相关的代码", () => {
    test('测试 counter 中的minus方法', () => {
        // console.log('2')
        counter.minusOne();
        expect(counter.count).toBe(-1);
    });

    test('测试 counter 中的minus方法', () => {
        counter.minusTwo();
        expect(counter.count).toBe(-2);
    });
})




