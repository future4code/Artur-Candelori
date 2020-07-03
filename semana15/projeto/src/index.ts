import moment from 'moment'
import {Student, Teacher, TEACHER_SPECIALTY} from './Users'
import {NightMission, FullTimeMission} from './Missions'
import {FileManager} from './FileManager'

const newStudent = new Student("1", "Aluno", "a@a.com", moment("12/03/1991", "DD/MM/YYYY"), ["aaa"])

const newTeacher = new Teacher("2", "Professor", "b@b.com", moment("12/03/1991", "DD/MM/YYYY"), [TEACHER_SPECIALTY.REACT])

const newMissionDay = new FullTimeMission(
  "123", 
  moment("01/01/2021", "DD/MM/YYYY"),
  moment("01/07/2021", "DD/MM/YYYY"),
)

newMissionDay.setName("Turma dia")
newMissionDay.addStudent(newStudent)
newMissionDay.addTeacher(newTeacher)
console.log(newMissionDay)
//console.log(newMissionDay.getStudentAge("1"))

const newMissionNight = new NightMission(
  "321",
  moment("01/01/2021", "DD/MM/YYYY"),
  moment("01/07/2021", "DD/MM/YYYY"),
)

newMissionNight.setName("Turma noite")
newMissionNight.addStudent(newStudent)
newMissionNight.addTeacher(newTeacher)
console.log(newMissionNight)