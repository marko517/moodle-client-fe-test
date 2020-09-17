import { PluginModel } from './plugin-model';

export class SubmissionModel {
    id: number;
    userid: number;
    attemptnumber: number;
    timecreated: number;
    timemodified: number;
    status: string;
    plugins: PluginModel[];
}