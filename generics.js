var gender = (function () {
    function gender() {
        this.name = 'Navita';
        this.age = 25;
        this.language = 'Marathi';
        this.glass = 'SUNGLASS';
    }
    gender.prototype.genderInfo = function () {
        return "Ms " + this.name + " is " + this.age + " year's old, and Mr Ben speakes " + this.language + " and wearing " + this.glass;
    };
    return gender;
}());
var Person = new gender();
document.write(Person.genderInfo());
//Output:"Ms Navita is 25 year's old, and Mr Ben speakes Marathi and wearing SUNGLASS" 
