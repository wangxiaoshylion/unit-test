jest.mock('./utils'); // jest mock会自动将mock的文件下的内容变成mock fn {a, b} => jest.fn

import Utils from './utils';
import demoFunction from './demoFunc';

test('测试 demoFunction方法', () => {
    demoFunction();
    expect(Utils).toHaveBeenCalled();
    expect(Utils.mock.instances[0].a).toHaveBeenCalledTimes(1);
    expect(Utils.mock.instances[0].b).toHaveBeenCalledTimes(1);
})
