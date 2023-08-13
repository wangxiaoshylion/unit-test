import { timer } from './mockTimer';



beforeEach(() => {
    jest.useFakeTimers();
})

test('测试 mock timer', () => {
    // timer(() => {
    //     expect(1).toBe(1);
    //     done();
    // })

    const fn = jest.fn();
    timer(fn);
    // jest.runAllTimers(); // 立即执行，避免等待
    // expect(fn).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(6000);
    expect(fn).toHaveBeenCalledTimes(2);
})

test('测试 mock timer2', () => {
    const fn = jest.fn();
    timer(fn);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1);
})

 