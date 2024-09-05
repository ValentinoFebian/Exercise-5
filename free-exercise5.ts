// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

let arrayValue = (arr: number[]) => {
    let detail
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = (sum / arr.length);
    return detail = `Biggest number is ${max}, smallest number is ${min}, and the average is ${average}`
}

console.log(arrayValue([12, 5, 23, 18, 4, 45, 32]))

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

let concatArray = (arr: string[]) => {
    let containArr = [];
   
    for (let i = 0; i < arr.length; i++) {
        containArr.push(arr[i])
        if (i === arr.length - 1) {
            containArr.push(` and ${arr[i]}`)
        }
    }
    return containArr.toString();
}

console.log(concatArray(["Apple", "Banana", "Cherry", "Date"]))

// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2




// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let sum = (arr1: number[], arr2: number[]) => {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
    }

    return result
}

console.log(sum([1,2,3], [3,2,1]))

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]      
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

let modArr = (arr1: number[], arr2: number[]) => {
    let newArr = arr1

    for (let i = 0; i < arr2.length; i++) {
      if (!newArr.includes(arr2[i])) {
        newArr.push(arr2[i])
      }
    }

    return newArr
}

console.log(modArr([1,2,3,4], [1,2,3,4,7]))


// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

let sumArray = (arr: any) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result += arr[i]
        }
    }
    return result
}

console.log(sumArray(["3", 1, "string", null, false, undefined, 2]))

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. 
// The array can only have a maximum size from a given input. 
// (if the maximum size of the given input is 5 then the array can only contain 5 elements). 
// Example : 
//          maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8                                                                                                                                                  
//          The function will return [5, 10, 24, 3, 6]

let restrictReturn = (number: number, arr: number[]) => {
    let newArray = []
    for (let i = 0; i < number; i++) {
        newArray.push(arr[i])
    }
    return newArray
}

console.log(restrictReturn(5, [5, 10, 24, 3, 6, 7, 8]))

// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]   

let mergerFunction = (array1: number[], array2: number[]) => {
    let newArray 
    newArray = [...array1, ...array2]
    return newArray
}

console.log(mergerFunction([1,2,3], [4,5,6]))


// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]     

let duplicateVal= (arr: number[]) => {
    let result: number[] = []
    let contender: number[] = []
    
    for(let number of arr) {
        if (!contender.includes(number) === true) {
            contender.push(number)
        } else if (contender.includes(number) === true && result.includes(number)) {
            continue
        } else {
            result.push(number)
        }
    }
    
    return result
}

console.log(duplicateVal([1, 2, 2, 2, 3, 3, 4, 5, 5]))


// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]    

let diff = (arr1: number[], arr2: number[]): number[] => {
    let diff1 = arr1.filter(function (number) {
        return !arr2.includes(number)
    })

    let diff2 = arr2.filter(function (number) {
        return !arr1.includes(number)
    })

    return diff1.concat(diff2);
}

console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))

// Based on the array below write a function that will return primitive data types only.                                             
// let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

let myArr = (arr: any[]) => {
    let newArr = []
    for (let number of arr) {
        if (typeof number === "string" || 
            typeof number === "number" || 
            typeof number === "boolean" ||
            typeof number === "undefined"
        )
        
        newArr.push(number)
    }

    return newArr
}

console.log(myArr([1, [], undefined, {}, "string", {}, []]))

// Write a function from the below array of number that will return sum of duplicate values.                                  
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40

let duplicateSum = (arr: number[]) => {
    let sum: number[] = []
    let contender: number[] = []
    let result
    for(let number of arr) {
        if (!contender.includes(number)) {
            contender.push(number)
        } else {
            sum.push(number)
        }
    }
    
    return sum
}

console.log(duplicateSum([10, 20, 40, 10, 50, 30, 10, 60, 10]))

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. 
// The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

let game = (move: string) => {
    let randomNum = Math.floor(Math.random()*3)
    let response = ""
    let result = ""

    if (randomNum === 0) {
        response = "rock" 
    } else if (randomNum === 1) {
        response = "paper"
    } else if (randomNum === 2) {
        response = "scissor"
    }

    if (move === response) {
        result = "Tie"
    } else if (move === "rock" && response === "paper") {
        result = "Lose"
    } else if (move === "rock" && response === "scissor") {
        result = "Win"
    } else if (move === "paper" && response === "scissor") {
        result = "Lose"
    } else if (move === "paper" && response === "rock") {
        result = "Win"
    } else if (move === "scissor" && response === "rock") {
        result = "Lose"
    } else if (move === "scissor" && response === "paper") {
        result = "Win"
    }
        
    return result
}

console.log(game("paper"))