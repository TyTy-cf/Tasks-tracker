
export class Client {

  //#region property email
  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._email = value;
  }
  //#endregion

  //#region property phone
  private _phone: string;
  public get phone(): string {
    return this._phone;
  }
  public set phone(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._phone = value;
  }
  //#endregion

  //#region property firstName
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._firstName = value;
  }
  //#endregion

  //#region property lastName
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    if (!value) {
      throw new Error('The name cannot be empty');
    }
    this._lastName = value;
  }
  //#endregion

  constructor() { }
}
