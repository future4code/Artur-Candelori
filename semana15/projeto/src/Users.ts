import moment from 'moment'

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
    ) {}
  
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
    ) {}
}
