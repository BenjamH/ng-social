// deefines contract that class required these properties
export interface IPost {
    id: number;
    title: string;
    link: string;
    complete: boolean;
    caption: string;
    likes: string;
}
// ensures class has ITodo
export class Post implements IPost {
    id: number;
    title: string;
    link: string;
    complete: boolean = false;
    caption: string;
    likes: string;

    // accept only interface values, id will be generated when adding to do.
    constructor(values: IPost) {
        // copy values of all properties to 'this'
        Object.assign(this, values);
    }
}
