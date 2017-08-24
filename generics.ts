//Create a class which takes Generics of <T>.
interface men {
    name,
    age
}
interface women {
    language,
    glass
}
class gender<T> implements men, women {
    
    name = 'Navita';
    age = 25;
    language = 'Marathi';
    glass = 'SUNGLASS';

    genderInfo(){
       return `Ms ${this.name} is ${this.age} year's old, and Mr Ben speakes ${this.language} and wearing ${this.glass}`;
    }

}

var Person = new gender();

document.write(Person.genderInfo());

//Output:"Ms Navita is 25 year's old, and Mr Ben speakes Marathi and wearing SUNGLASS"