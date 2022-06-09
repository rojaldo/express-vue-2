export class Hero {
    constructor(private _name = '', private _description = '') { }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        }
    }
    get description(): string {
        return this._description;
    }
    set description(value: string) {
        this._description = value;
    }

    toJson(): any {
        return {
            name: this.name,
            description: this.description
        };
    }
}