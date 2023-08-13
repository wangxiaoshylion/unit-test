import $ from 'jquery';
import addDivToBody from './dom';

test('jest里测试对dom节点操作', () => {
    addDivToBody();
    addDivToBody();
    expect($('body').find('div.test').length).toBe(2)
});


// jest在node环境中自己模拟了一套dom的API，叫做jsDom