const sayHi = (Human) => {
  console.log(`Hello ${Human.name}, age: ${Human.age}`)
}

const Human = {
  name: 'Hyunjun',
  age: 16
}

sayHi(Human)