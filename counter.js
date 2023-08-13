// jest中的钩子函数

export default class Counter {
    constructor() {
        this.count = 0;
    }


    addOne() {
        return this.count+=1;
    }

    minusOne() {
        return this.count-=1;
    }


    addTwo() {
        return this.count+=2;
    }

    minusTwo() {
        return this.count-=2;
    }

}


