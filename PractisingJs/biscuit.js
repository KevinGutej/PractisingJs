let BiscuitAmount = 0;
let Bpc = 1;
let Cps = 0;
const UNIVERSAL_PRICE_FACTOR = 1.1;

const StoreItems[Items(id,effect,price,amount)];

class Effect {
    #value
    #type

    constructor(num, type) {
        this.#value;
        this.#type;
    }

    get value() {
        return this.#value;
    }

    get type() {
        return this.#type;
    }
}