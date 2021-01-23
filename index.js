const sayHi = (Human) => {
  console.log(`Hello ${Human.name}, age: ${Human.age}, gender: ${Human.gender}`)
}

const Human = {
  name: 'Hyunjun',
  age: 17,
  gender: 'male'
}

sayHi(Human)
