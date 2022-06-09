export class User {
    constructor(private _id= 0, private _name = '', private _cardNumber = 0, private _cardExpiryDate = '') { }
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        }
    }
    get cardNumber(): number {
        return this._cardNumber;
    }
    set cardNumber(value: number) {
        this._cardNumber = value;
    }
    get cardExpiryDate(): string {
        return this._cardExpiryDate;
    }
    set cardExpiryDate(value: string) {
        this._cardExpiryDate = value;
    }

    getJson(): any {
        return {
            id: this.id,
            name: this.name,
            cardNumber: this.cardNumber,
            cardExpiryDate: this.cardExpiryDate
        };
    }
}