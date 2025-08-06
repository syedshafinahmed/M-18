const numbers = [1, 2, 3, 4, 5];
const tournament_runs = [[], [], [], []];
const exam_marks = [
    [98, 97, 84, 90, 88],
    [82, 85, 81, 80, 98],
    [81, 77, 82, 89, 78],
    [89, 87, 83, 70, 79],
]

console.log(exam_marks[0][0]);


const first_class_first = exam_marks[0][0];
console.log(first_class_first);


exam_marks[0][4] = 68;
console.log(exam_marks[0][4]);


for(const marks of exam_marks){
    console.log(marks);
}