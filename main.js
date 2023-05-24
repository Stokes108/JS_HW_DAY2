let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


let person4 = {
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }],
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    subjis: ['okra subji', 'aloo gobi', 'fried bitter mellon'] 

    
}



let parseData = person => { 
    for (let i = 0; i < Object.keys(person).length; i++){
        let key = Object.keys(person)[i];
        let value = Object.values(person)[i]
        console.log(`Their favorite ${key} are`)

        if (Array.isArray(value)){
            for(let k = 0; k < value.length; k++){
                if (typeof(value[k]) === 'object'){
                    for (let j = 0; j < Object.keys(value[k]).length; j++){
                        let inner_key = Object.keys(value[k])[j];
                        let inner_value = Object.values(value[k])[j];

                        console.log(`At ${inner_key} they like ${inner_value}`)
                    }
                }else{
                    console.log(value[k])
                }

            }
        }else{
            console.log(value)

        }
    }
}

// parseData(person4)


// Exercise 2


function Person(name, age){
    this.name = name;
    this.age = age; 

    this.printInfo = () =>{
        console.log(`${this.name} is ${this.age} years old!!!!!`)
    }

    this.addAge = () =>{
        this.age += 1;
    }
}

let tony = new Person('Tony T', 23)
let gerald = new Person('Gerald Money', 82)
tony.printInfo()
tony.addAge()
tony.addAge()
tony.addAge()
tony.printInfo()

gerald.printInfo()



let stringTest = str => {
    return new Promise( (resolve, reject) => {
        if (str.length < 10){
            resolve('Small Word')
        }else{
            reject('Big Word')
        }
    })
}
    
let test_string = 'af;sfjksjflas'

stringTest(test_string).then(
    message => console.log(message))
    .catch( error => console.log(error))