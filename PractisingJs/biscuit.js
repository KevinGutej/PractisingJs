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

class Item {
    #id
    #name
    #effect
    #price
    #amount

    constructor(id, name, effect, price, amount) {
        this.#id = id;
        this.#name = name;
        this.#effect = effect;
        this.#price = price;
        this.#amount = amount;
        this.DOMElement = $('...')
        this.button = $('button.#id')

    }
    
    set price(priceFactor)
}