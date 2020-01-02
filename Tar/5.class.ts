class Human {
  name: string;
  age: number;
  role: string;
  constructor(name: string, age: number, role: string) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
  toString() {
    return this.name + "  " + this.age + "  " + this.role;
  }
}

const china = new Human("china", 19, "Role");

console.log(china.toString());
