class Cars {
    constructor (name) {
        this.brand = name;
    }

    present() {
        return "I have a " + this.brand;
    }
}

class Model extends Cars {
    constructor (name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return this.present() + ", it is a " + this.model;
    }
}