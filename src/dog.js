// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wah bark, I am ${this.name}`
  }
}

// module.exports = Dog
export default Dog
