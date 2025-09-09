class Science {
    chemistryCalci() {
        console.log('This method will hold chemistry calculations!');
    }
    physicsCalci() {
        console.log('This method will hold physics calculations!');
    }
    biologyCalci() {
        console.log('This method will hold biology calculations!');
    }
}
const physicsHod = new Science();
const chemistryHod = new Science();
const biologyHod = new Science();
class HighSchoolStudent {
    _rollNo;
    get rollNo() {
        return this._rollNo;
    }
    set rollNo(v) {
        this._rollNo = v;
    }
    isBlackListed;
    studentName;
    field;
    getStudentDetails() {
        throw new Error("Method not implemented.");
    }
}
const student1 = new HighSchoolStudent();
student1.rollNo = 101;
student1.studentName = 'John Doe';
student1.field = 'Science';
student1.isBlackListed = false;
const displayStudentInformation = (student) => {
    console.log(`Student Name: ${student.studentName}, Roll No: ${student.rollNo}, Field: ${student.field}!`);
};
displayStudentInformation(student1);
//# sourceMappingURL=interface-examples.js.map