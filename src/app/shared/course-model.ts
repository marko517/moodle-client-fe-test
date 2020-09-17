import { AssignmentModel } from './assignment-model';

export class CourseModel {
    id: number;
    fullname: string;
    assignments: AssignmentModel[];
}