export class Project {

    name: string;
    codes: Array<string>;
    documents: Array<string>;
    
    constructor(name) {
        this.name = name;
        this.codes = ["foo", "bar", "baz"];
        this.documents = [name+"_Doc1", name+"_Doc2", name+"_Doc3", name+"_Doc4"]
    }

    toString() {
        return `${this.name} / ${this.documents}`;
    }
    
}