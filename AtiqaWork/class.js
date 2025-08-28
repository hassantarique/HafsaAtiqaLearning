class student {
    constructor(name,rollnumber,grade){
        this.name =name;
        this.rollnumber = rollnumber;
        this.grade = grade;
     }
     introduce() {
         console.log(`I am ${this.name},${this.rollnumber},grade${this.grade}`)
     }
    }
let s1 = new student("Ayesha",1,"7th");
let s2 = new student("Ali","02","8th");
let s3 = new student("Akram","03","8th");
let s4 = new student("Abid","04","8th");
//console.log(`I am ${this.name},${this.rollnumber},grade${this.grade}`)
s1.introduce();
s2.introduce();
s3.introduce();
s4.introduce();

class calendarday {
    constructor(month, day, year){
    this.month = month;
    this.day = day;
    this.year =year;

}
date(){
    console.log(`${this.month}-${this.day}-${this.year}`)
}
}

let day1 = new calendarday("january",1 ,2005);
let day2 = new calendarday("january",2 ,2005);
let day3 = new calendarday("january",3 ,2005);

day1.date();
day2.date();
day3.date();
