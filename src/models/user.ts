
export class User {
  password: string;

  //#region property firstName
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    // falsy : undefined, 0, null, NaN, "", false
    if (!value) {
      throw new Error('The firstname cannot be empty');
    }
    this._firstName = value;
  }
  //#endregion

  //#region property firstName
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    // falsy : undefined, 0, null, NaN, "", false
    if (!value) {
      throw new Error('The lastname cannot be empty');
    }
    this._lastName = value;
  }
  //#endregion

  //#region property firstName
  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    // falsy : undefined, 0, null, NaN, "", false
    if (!value) {
      throw new Error('The email cannot be empty ');
    }
    if (!value.search('@')) {
      throw new Error('The email isnot a valid email');
    }
    this._email = value;
  }
  //#endregion

  constructor(firstName: string, lastName: string, email: string, password: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this.password = password;
  }

}

