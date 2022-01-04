module.exports = function reverse(n) {
    let enterNum = n < 0 ? n * -1 + "" : n + "";
    let result = "";

    if (+enterNum.substring(enterNum.length - 1) === 0) {
        enterNum = enterNum.substring(0, enterNum.length - 1);
    }
    for (let i = 0; i < enterNum.length; ) {
        result += enterNum.substring(enterNum.length - 1);
        enterNum = enterNum.substring(0, enterNum.length - 1);
    }
    return result;
};
