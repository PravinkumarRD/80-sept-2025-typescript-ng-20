interface Physics {
    physicsCalci(): void;
}
interface Chemistry {
    chemistryCalci(): void;
}
interface Biology {
    biologyCalci(): void;
}
class Science implements Physics, Chemistry, Biology {
    chemistryCalci(): void {
        console.log('This method will hold chemistry calculations!');
    }
    physicsCalci(): void {
        console.log('This method will hold physics calculations!');
    }
    biologyCalci(): void {
        console.log('This method will hold biology calculations!');
    }
}

const physicsHod: Physics = new Science();
const chemistryHod: Chemistry = new Science();
const biologyHod: Biology = new Science();

interface Student {
    rollNo: number;
    studentName: string;
    field: string;
    isBlackListed?: boolean;
    getStudentDetails(): string;
}

class HighSchoolStudent implements Student {
    private _rollNo: number;
    public get rollNo(): number {
        return this._rollNo;
    }
    public set rollNo(v: number) {
        this._rollNo = v;
    }
    isBlackListed?: boolean;
    studentName: string;
    field: string;
    getStudentDetails(): string {
        throw new Error("Method not implemented.");
    }
}

const student1:Student = new HighSchoolStudent();
student1.rollNo = 101;
student1.studentName = 'John Doe';
student1.field = 'Science';
student1.isBlackListed = false;

const displayStudentInformation = (student: Student) => {
    console.log(`Student Name: ${student.studentName}, Roll No: ${student.rollNo}, Field: ${student.field}!`);
}

displayStudentInformation(student1);