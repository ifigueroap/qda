export type QDACode = string;

export class QDADocument {
    name: string;
    contents: string;

    constructor(name, contents) {
        this.name = name;
        this.contents = contents;
    }

    toString() {
        return this.name;
    }
}

export class Project {

    name: string;
    codes: Array<QDACode>;
    documents: Array<QDADocument>;
    
    constructor(name) {
        this.name = name;
        this.codes = [];
        this.documents = [];
    }

    toString() {
        return `${this.name} / ${this.documents}`;
    }
    
}