class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength)
        let result = "";
    }

    increase(value) {
        if (value > 0) {
            this.innerLength += value;
        }

    }

    decrease(value) {
        if (value > 0) {
            this.innerLength -= value;
        }
    }



    toString() {
        this.result = this.innerString;

        if (this.innerLength <= 0) {
            this.innerLength = 0;
            return this.result = '...'
        }

        else if (this.innerString.length > this.innerLength) {
            return this.result = this.innerString.slice(0, this.innerLength) + '...'

        } else if (this.innerString.length <= this.innerLength) {
            return this.result
        }
    }
}