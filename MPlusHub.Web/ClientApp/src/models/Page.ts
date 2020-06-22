export class Page {
  name: string;
  path: string;
  active: boolean;
  
  constructor(
    name: string,
    path: string,
    active: boolean = false,
  ) {
    this.name = name;
    this.path = path;
    this.active = active;
  }
}