// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructAttr) {
        super(instructAttr);
        this.specialty = instructAttr.specialty;
        this.favLanguage = instructAttr.favLanguage;
        this.catchPhrase = instructAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${this.subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${this.subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    listsSubject() {

    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${this.subject}`);
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${this.subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }

    standUp(slackChannel) {
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}