export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  // we need a CONSTRUCTOR so we can instantiate this class with the NEW keyword passing the
  // arguments to the constructor
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
