import moment from 'moment'
import { FileManager } from './FileManager'

interface User {
    id: string;
    name: string;
    email: string;
    birthDate: moment.Moment;
}
  
export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ) {
        const studentsManager = new FileManager('students.json')
        const students = studentsManager.readFile()
        students.push(this);
        studentsManager.writeFile(students)
    }
  
    public getAge(): number {
        return moment().diff(this.birthDate, "years");
    }
}

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
}
  
export class Teacher implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public specialties: TEACHER_SPECIALTY[]
    ) {
        const teachersManager = new FileManager('teachers.json')
        const teachers = teachersManager.readFile()
        teachers.push(this)
        teachersManager.writeFile(teachers)
    }
}

export function getStudentAge(id: string): number | string {
    const studentsManager = new FileManager('students.json')
    const students: Student[] = studentsManager.readFile()
    
    for(let s of students) {
        if(s.id === id) {
            return moment().diff(s.birthDate, "years")
        }
    }

    return "Id não encontrado"
}