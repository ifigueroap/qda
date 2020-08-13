export type Code = string;
export type Document = string;

export class Project {

    name: string;
    codes: Array<Code>;
    documents: Array<Document>;
    
    constructor(name) {
        this.name = name;
        this.codes = [];
        this.documents = [name+"_Doc1", name+"_Doc2", name+"_Doc3", name+"_Doc4"];
    }

    toString() {
        return `${this.name} / ${this.documents}`;
    }
    
}