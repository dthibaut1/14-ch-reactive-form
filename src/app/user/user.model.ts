export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string,
    public street: string,
    public postalCode: string,
    public city: string
  ) { }
}
