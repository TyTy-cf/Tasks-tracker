
export class Server {

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

  //#region property url
  private _url: string;
  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    if (!value) {
      throw new Error('The url cannot be empty');
    }
    this._url = value;
  }
  //#endregion

  constructor() { }
}
