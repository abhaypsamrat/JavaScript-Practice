const array = [1, 2, 3, 4, 5, 7, 8, 9, 10]
const n = array.length + 1

const sumOfNNumber = n * (n + 1) / 2

function calculateArraySum() {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }

    return sum
}

const arraySum = calculateArraySum(array)

const missingNumber = sumOfNNumber - arraySum

console.log("Missing Number : ", missingNumber)