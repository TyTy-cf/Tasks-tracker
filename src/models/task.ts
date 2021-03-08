
import {User} from './user';
import {Project} from './project';

export class Task {
  continue: boolean;

  //#region property createAt
  private _createAt: Date;
  public get createAt(): Date {
    return this._createAt;
  }
  public set createAt(value: Date) {
    this._createAt = value;
  }
  //#endregion

  //#region property project
  private _project: Project;
  public get project(): Project {
    return this._project;
  }
  public set project(value: Project) {
    this._project = value;
  }
  //#endregion

  //#region property user
  private _user: User;
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }
  //#endregion

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
