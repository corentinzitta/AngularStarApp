export class Star {

    id: number;
    age: number;
    name: string;
    picture: string;
    createdOn: Date;
    types: string[];

    constructor(
        name: string = 'Entrer un nom',
        age: number = 0,
        picture: string = 'https://xxxxx',
        createdOn: Date = new Date(),
        types: string[] = ['Pop'],
    )
    {
        this.name = name;
        this.age = age;
        this.picture = picture;
        this.createdOn = createdOn;
        this.types = types;

    }


}
