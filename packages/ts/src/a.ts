class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }

  say = (who: string) => {
    const firstChar = who.charAt(0).toLocaleUpperCase()
    console.log(`${firstChar}${who.slice(1)} bless you`)
  }
}
const DPZ = new Person('DPz')
const 主 = 'god'// 6|'god'|'Trisolaran
DPZ.say(主)
