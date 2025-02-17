import type { Role } from "./index.types.ts";

export interface UserWithoutPassword extends Omit<User, 'password'> {}

export interface User {
  //  _id: ObjectId;
  username: string;
  password: string;
  role: Role;
}

export interface Employee {
    //  _id: ObjectId;
    fullName: string;
    email: string;
    position: string;
    evaluations: Evaluation[];
}

export interface Question {
    //  _id: ObjectId;
    question: string;
    answer: string;
}

export interface Evaluation {
    //  _id: ObjectId;
    // employeeId: ObjectId;
    date: string;
    employeeName: string;
    questions: Question[];
    feedbacks: Feedback[];
}

export interface Feedback {
    //  _id: ObjectId;
    evaluationId: string;
    employeeId: string;
    feedback: string;
}

