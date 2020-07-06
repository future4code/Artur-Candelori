import moment from 'moment'
import {Student, Teacher, TEACHER_SPECIALTY} from './Users'
import { FileManager } from './FileManager'

abstract class Mission {
    private name: string = "";
  
    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule: number | undefined = undefined
    ) {
        const missionManager = new FileManager('missions.json')
        const missions = missionManager.readFile()
        missions.push(this)
        missionManager.writeFile(missions)
    }
  
    public getId(): string {
        return this.id;
    }
  
    public getName(): string {
        return this.name;
    }
  
    public getStartDate(): moment.Moment {
        return this.startDate;
    }
  
    public getEndDate(): moment.Moment {
        return this.endDate;
    }
  
    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }
  
    public addTeacher(teacher: Teacher) {
        this.teachers.push(teacher);
    }
  
    public addStudent(student: Student) {
        this.students.push(student)
    }
  
    public setName(name: string) {
        this.name = name;
    }
}

export class FullTimeMission extends Mission {}

export class NightMission extends Mission {
    public setName(name: string) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        } else {
            super.setName(name + "-na-night")
        }
    }
}