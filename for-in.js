const object = {
    name: "James",
    age: 30,
    inClass: true,
}

//gives the properties in the object
for (const key in object) {
    console.log(key)
}

//gives the values in the object
for (const key in object) {
    console.log(object[key])
}


for (const key in object) {
    console.log(`The persons name is ${object['name']} and they are ${object['age']} years old and is in class ${object['inClass']}`)
}