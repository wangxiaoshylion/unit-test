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
        throw new Error('this is a new error1');
    }

    expect(throwError).toThrow('this is a new error');

});

// git init 
// git add . 
// git commit -m "version 1"