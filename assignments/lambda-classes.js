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
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;;
    }

    listsSubjects() {
        for(let i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
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


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const lois = new Instructor({
    name: 'Lois',
    location: 'Quahog',
    age: 43,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `That's a terrible thing to say... Duty`
  });

  const cleveland = new Student({
      name: 'Cleveland',
      location: 'Stoolbend',
      age: 45,
      gender: 'male',
      previousBackground: 'Deli Owner',
      className: 'WEB15',
      favSubjects: [
          'HTML', 'CSS', 'JavaScript'
      ]
  });

  const hayley = new Student({
    name: 'Hayley',
    location: 'Langley Falls',
    age: 21,
    gender: 'female',
    previousBackground: 'Student',
    className: 'CS19',
    favSubjects: [
        'Python', 'Django', 'OOP'
    ]
});

const glenn = new ProjectManager({
    name: 'Glenn',
    location: 'Quahog',
    age: 55,
    gender: 'male',
    gradClassName: 'CS15',
    favInstructor: 'Cameron'
});

const roberta = new ProjectManager({
    name: 'Roberta',
    location: 'Stoolbend',
    age: 18,
    gender: 'female',
    gradClassName: 'WEB13',
    favInstructor: 'Ryan'
});

fred.speak();
lois.speak();
hayley.speak();
cleveland.speak();
glenn.speak();
roberta.speak();
fred.demo('JavaScript');
fred.grade(cleveland, 'JavaScript');
lois.demo('Django');
lois.grade(hayley, 'Python');
hayley.listsSubjects();
cleveland.PRAssignment('User Interface I');
hayley.sprintChallenge('Python OOP');
glenn.standUp('#web25_ah');
glenn.debugsCode(hayley, 'OOP in Python');
roberta.debugsCode(cleveland, 'Advanced CSS');
roberta.standUp('#web23_code_challenge');