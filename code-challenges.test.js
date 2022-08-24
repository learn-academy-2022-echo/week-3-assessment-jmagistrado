// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// PSEUDOCODE: 
        // A describe method named inputNum 
        // a test/it method that will be nested in the describe block "to take in a number that is greater than 2 and return an array that length containing the number of the Fibonacci sequence"
        // an expect method, that is nested in the test block, calling on the inputNum function, followed by the .toEqual() matcher that checks that the output of the function return 

describe("inputNum", () => {
        it("to take in a number that is greater than 2 and return an array that length containing the number of the Fibonacci sequence", () => {
         expect(inputNum(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
         expect(inputNum(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
})

// Red of red-green refactor: 
        // inputNum › to take in a number that is greater than 2 and return an array that length containing the number of the Fibonacci sequence
        // ReferenceError: inputNum is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE: 
// Create a function named inputNum 
// create a variable named newArray to be assigned to an array with the values of [0,1]
// create a for loop to iterate the amount of times as the agrument to find Fibonacci sequence.
// Use push() to push the numbers into new array 
// Use slice() to remove 0 from the array 

const inputNum = (number) => {
        let newArray = [0,1]
        for(let i=2; i <= number; i++) {
                newArray.push(newArray[i-2] + newArray[i-1])
        }
        return newArray.slice(1)
}

console.log(inputNum(fibLength1))
console.log(inputNum(fibLength2))

// Green of red-green refactor: 
        // PASS  ./code-challenges.test.js
        // inputNum
        //   ✓ to take in a number that is greater than 2 and return an array that length containing the number of the Fibonacci sequence (6 ms)


// Notes: 
// I had some trouble with this prompt. It was difficult to pin point what I needed to do to get the Fibonacci sequence. From reading the prompt, I knoew that I would have to iterate on this number to create the array output so I thought a for loop would be best to use for this situation. However, my blocker was how I could set the for loop to a set number of times I'd like it to loop around. From research online, I learned you can set the second part of the for loop (i < ) and put number - which would allow the function to iterate through the amount of times as the number that was going to be passed through it. 

// My next blocker would be how to do the math needed to have the values of my array correct. With help online, I understood that to create an array, I would need to make another variable to set the array to [0,1]. By having this array, I would be able to utilize it to call for it and do addition math to add the value of the first two elements and then after that, add the sum of the previous two elements. Overall, I was not able to get this answer by myself and needed to use resources found online to get to this. However, now I understand this concept more and can see how I can use it in the future. 


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// PSEUDOCODE: 
         // A describe method named onlyOdd
        // a test/it method that will be nested in the describe block "to filter through the array and return odd numbers from least to greatest"
        // an expect method, that is nested in the test block, calling on the onlyOdd function, followed by the .toEqual() matcher that checks that the output of the function return 

describe("onlyOdd", () => {
    it("to filter through the array and return odd numbers from least to greatest", () => {
        expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199]);
        expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
    })
})

// Red of red-green refactor: 
        //  onlyOdd › to filter through the array and return odd numbers from least to greatest
        // ReferenceError: onlyOdd is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE: 
        // Create a high-order function named onlyOdd 
        // Use filter()method that will take an the array and filter through the values to find only odd numbers 
            // Will use "type of" to find only numbers
        // Will use modulo % 2 !== 0 to locate the odd numbers 
        // invoke function by console.log() and use the sort() built in method to arrange the odd numbers from least to greatest  
        // Expected output: [-9, 7, 9, 199] & [-823, 7, 23]

const onlyOdd = (array) => {
    return array.filter((value) => typeof value === 'number' && value % 2 !== 0)
} 

console.log(onlyOdd(fullArr1.sort((a,b) => a-b)))
console.log(onlyOdd(fullArr2.sort((a,b) => a-b)))

// Green of red-green refactor: 
        // PASS  ./code-challenges.test.js onlyOdd  ✓ to filter through the array and return odd numbers from least to greatest (2 ms)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// PSEUDOCODE: 
         // A describe method named totalSum
        // a test/it method that will be nested in the describe block "to take in an array of numbers and output an accumulating sum"
        // an expect method, that is nested in the test block, calling on the totalSum function, followed by the .toEqual() matcher that checks that the output of the function return 

describe("totalSum", () => {
     it("to take in an array of numbers and output an accumulating sum", () =>{
        expect(totalSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(totalSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(totalSum(numbersToAdd3)).toEqual([])
        })
})

// Red of red-green refactor: 
        // totalSum › to take in an array of numbers and output an accumulating sum
        // ReferenceError: totalSum is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE: 
// Declare a high order function named totalSum 
// Utilize .map() to iterate through the array to output a new array of the same length that will take in the values and add up to an accumulating sum  
// Use the += to add the sum to the next value
// Expected output: [2, 6, 51, 60] & [0, 7, -1, 11] & []


const totalSum = (array) => {
        return array.map((sum => value => sum += value)(0))
    } 

    console.log(totalSum(numbersToAdd1))
    console.log(totalSum(numbersToAdd2))
    console.log(totalSum(numbersToAdd3))
    

// Green of red-green refactor:
        // PASS  ./code-challenges.test.js
        // totalSum
        // ✓ to take in an array of numbers and output an accumulating sum (2 ms)


// Notes: 
// I definitely got a little bit stuck on this one because I knew I wanted to iterate through the array and have it output another array of the same length, but I was unsure with how I could output the accumulative sum. To help me with this, I googled what tools I could use and found that addition assignment operator (+=) adds the value of the elemnt from the left to the value of the right and takes the sum to then add it to the next value. 


