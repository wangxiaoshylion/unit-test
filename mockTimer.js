export const timer = (callback) => {
    setTimeout(() => {
        callback();

        setTimeout(() => {
            callback()
        }, 3000)
    }, 3000)
}