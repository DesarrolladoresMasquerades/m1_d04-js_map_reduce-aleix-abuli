// Class code examples

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


const callback = (oldAccumulator, currentElement) => {
    let newAccumulator = oldAccumulator + currentElement;
    return newAccumulator // MUST ALWAYS return the accumulator
};

const sum = numbers.reduce(
    callback,
    0 // Starting value of the accumulator
);

console.log(sum);

const students = [
    {firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Jessy', lastName: 'Mc Scrudge', age: 99},
  {firstName: 'Lisa', lastName: 'Parker', age: 22},
  {firstName: 'Marco', lastName: "Santo", age: 48}
]

// I would like to create an object with .reduce() that has properties that summarize the content of the students array
/*const summary = students.reduce(
    (obj, student)=>{
        obj.students.push(`${student.firstName} ${student.lastName}`);
        obj.count++;
    }
    ,
    { class: [],
    count: 0}
)

console.log(summary);*/

const countOlderthan30 = students.reduce(
    (count, student)=>{
        if(student.age > 30) return count+=1;
        else return count;
    },
    0
)

console.log(countOlderthan30);

const classRoster = students.reduce(
    (roster, student)=>{
        roster.push(`${student.firstName} ${student.lastName}`);
        return roster;
    }
    ,
    []
)

console.log("Roster: ", classRoster);