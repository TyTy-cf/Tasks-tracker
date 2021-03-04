
import {User} from './user';
import {Project} from './project';

export class Task {
  user: User;
  project: Project;
  isWebMastering: boolean;

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
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._name = value;
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

  /**
   * Constructor task
   * @param name task name
   * @param user user assign on the task
   * @param project project related to the task
   * @param isWebMastering iswebmastering
   */
  constructor(name: string, user: User, project: Project, isWebMastering: boolean) {
    this._name = name;
    this.user = user;
    this.project = project;
    this.isWebMastering = isWebMastering;
    this.createAt = new Date();
  }

}
