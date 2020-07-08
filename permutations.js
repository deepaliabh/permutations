function toSwap(arrToCheck, start, curr) {
    for (let i = start; i < curr; i++) {
        if (arrToCheck[i] === arrToCheck[curr]) {
            return false;
        }
    }
    return true;
}

function swap(arrToSwap, i, j) {
    const temp = arrToSwap[i];
    arrToSwap[i] = arrToSwap[j];
    arrToSwap[j] = temp;
}

function permutations(numList) {
    const n = numList.length;
    let inputList = [...numList];
    let result = [];
    if(n<=1){
        return numList;
    }

    function generator(start, end) {
        if (start >= end) {
            result.push([...inputList]);
            return;
        }

        for (let i = start; i < end; i++) {
            if (toSwap(inputList, start, i)) {
                swap(inputList, start, i);
                generator(start + 1, end);
                swap(inputList, start, i);
            }
        }
    };

    generator(0, n);
    return result;
}

module.exports = {permutations};


