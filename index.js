const sayHi = (Human) => {
  console.log(`Hello ${Human.name}, age: ${Human.age}`)
}

const Human = {
  name: 'Hyunjun',
  age: 17
}

sayHi(Human)
