class Animal{
    constructor(name){
      this.name=name
    }
    toString(){
      console.log("I AM ANIMAL");
    }
  }

  class Cat extends Animal{
      constructor(name,color){
        super(name);
        this.color=color;
      }
      toString(){
          super.toString();
      }
  }

 

var cat1 = new Cat("Hello","Blue")
console.log(cat1.name)
console.log(cat1.color)

var cat2 = new Cat("World","White")
console.log(cat2.name)
console.log(cat2.color)
cat1.toString();
