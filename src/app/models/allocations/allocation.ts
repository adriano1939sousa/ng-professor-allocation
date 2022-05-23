import { Course } from "../courses/course";
import { Professor } from "../professores/professor";

export class Allocation {

    public day?: String;
    public id?: number;
    public start?: String;
    public end? : String;
    public courseId? : number;
    public course? : Course;
    public professor? : Professor;
    public nomeProfessor? : string;
    public nomeCurso?:  string;
   

    }