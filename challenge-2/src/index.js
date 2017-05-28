import lodash from 'lodash'

const greet = name => {
  console.log(`Hello ${name}`)
}

console.log(process.env.NODE_ENV)

greet('Akira')
