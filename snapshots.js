export const generateConfig = () => {
    return {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20),
        name: 'LeBron James',
    }
}

export const generateConfig2 = () => {
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 567,
        e: new Date(),
    }
}