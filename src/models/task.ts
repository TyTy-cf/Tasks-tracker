
import {User} from './user';
import {Project} from './project';

export class Task {
  user: User;
  project: Project;
  continue: boolean;
  createAt: Date;

  //#region property taskNumber
  private _taskNumber: number;
  public get taskNumber(): number {
    return this._taskNumber;
  }
  public set taskNumber(value: number) {
    this._taskNumber = value;
  }
  //#endregion

  //#region property name
  private _title: string;
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._title = value;
  }
  //#endregion

  //#region property duration
  private _duration: number;
  public get duration(): number {
    return this._duration;
  }
  public set duration(value: number) {
    if (!value) {
      throw new Error('The duration cannot be empty');
    }
    if (value < 0) {
      throw new Error('The duration cannot be negative');
    }
    this._duration = value;
  }
  //#endregion

  constructor() { }

}
