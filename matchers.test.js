test('记住一些常用的匹配器就行了', () => {
    // toBe() 匹配器 matchers
    expect(10).toBe(10);

    // toEqual() 匹配内容
    const a = { one: 1 };
    expect(a).toEqual(a); 

    // toBeNull() 
    const b = null;
    expect(b).toBeNull();

    // toBeUndefined
    const c = undefined;
    expect(c).toBeUndefined();

    // toBeDefined
    let d = 0; 
    expect(d).toBeDefined();

    // toBeTruthy toBeFalsy()
    const e = '0';
    expect(e).toBeTruthy();
    expect(Number(e)).toBeFalsy();

    // not 匹配器
    expect(e).not.toBeFalsy();
});

test('测试2', () => {
    // 数字相关的匹配器
    const count = 10;
    expect(10).toBeGreaterThan(9);
    expect(10).toBeGreaterThanOrEqual(10);
    expect(10).toBeLessThanOrEqual(10);

    // toBeCloseTo 忽略浮点数的精度丢失
    const first = 0.1;
    const second = 0.2;
    expect(first + second).toBeCloseTo(0.3);


    // string
    const str = 'http: //www.dell-lee.com';
    expect(str).toMatch(/dell-lee/);

    // arr toContain
    const arr = ['dell', 'lee', 'imooc'];
    const data = new Set(arr);
    expect(data).toContain('dell');
});

test('测试2', () => {
    // 异常
    const throwError = () => {
        throw new Error('this is a new error');
    }

    expect(throwError).toThrow('this is a new error');

});

// git init 
// git add . 
// git commit -m "version 1" o模式需要结合gi使用
// a --watchAll 测试文件用例
// o --watch 结合git使用，判断status变化的文件去走测试用例
// f 只会运行之前没通过的测试用例
// t 过滤模式 filter 过滤出一些文件去特使
// q 退出
// p watchAll时,p模式才会存在，p模式会去匹配当前更改的文件名，一起跑测试用例