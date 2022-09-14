

  let data =[
    {
        "name": "ram",
        "age" : 25,
        "address":"chennai"
        
    },
    {
        "name": "ravi",
        "age" : 26,
        "address":"Tambaram"
        
    },
    {
        "name": "kanthan",
        "age" : 22,
        "address":"manali"
       
    }
]
let data2 ={
    "name": "vignesh",
    "age" : 25,
    "address": "royapuram"
}

// for loop,loops through a block of code a number of times
// for statement creates a loop with 3expressions .they are initialization ,condition and increment
// Initialization sets a variable before the loop starts (let i = 0).
// condition defines the condition for the loop to run like (i must be less than 5 here we are using data.length).
// increment increases a value (i++) each time the code block in the loop has been executed

for (let i = 0;i<data.length;i++){
    console.log(data[i])
}

// for in loop statement loops through the properties of an Object:
// here The for in loop iterates over a data2 object
// Each iteration returns a key (key2)
// The key is used to access the value of the key
// The value of the key is person[key2]
// for in loop also accepts enumerable


for (let key2 in data2){
    console.log(key2 + ":"+ data2[key2])
}

//for of loop loops through the values of an iterable object.
//here the keys directly gives the value and key present in the object.
//since data2 is an object it is not iterable.To convert it iterable we use Object.entries which converts
//each object present in the data2 converts into separate array
//so we can print the arrays easily which is iterable using the for of loop

let entries = Object.entries(data2)
for (let keys of entries ){
    console.log(`${keys[0]} : ${keys[1]}`)
}

// for each loop loops work for arrays so i used array and inserted the jason object
// when this iterates each time . it executes the function which is equal to the length of the array
// so by using the callback function in that function(first one is the element of the array,second one is length
// index of the array ,third one is the array)
// element of the array = key which is passed in the function print the array 

data.forEach((key)=>{
    console.log(key)
})
    
    


