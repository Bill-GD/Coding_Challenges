const isPalindrome = num => {
    if (num < 10) return true;
    let numString = num.toString();
    let l = numString.length;
    let mid = Math.floor(l / 2);
    for (let i = 0; i < mid; i++)
        if (numString[i] !== numString[l - i - 1])
            return false;
    return true;
};

const reverseNumber = num => {
    let s = num.toString();
    let s1 = "";
    s.split('').forEach(e => s1 = e + s1);
    return parseInt(s1);
};

const canIterate = num => {
    let count = 0;
    while (count < 50) {
        count++;
        num = num + reverseNumber(num);
        if (isPalindrome(num)) return true;
    }
    return false;
};

const main = () => {
    let count = 0;
    for (let i = 1; i < 10000; i++)
        if (!canIterate(i))
            count++;
    console.log(count);
};

main();