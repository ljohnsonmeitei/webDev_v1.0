class animal{
  constructor(animalName, legCount, speak){
    this.name = animalName,
    this.leg = legCount,
    this.sound = speak
  }

  speak(){
    console.log(this.sound)
  }
}


dog_animal = new animal("dog", 4, "woof")

dog_animal.speak()
