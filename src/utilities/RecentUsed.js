export class RecentUsed {
    constructor(max = 5) {
        this.max = max
        this.data = new Map()
    }

    setItem(key, value) {
        if (this.data.has(key)) this.data.delete(key)

        else if (this.data.size === this.max) {
            this.data.delete(this.data.keys().next().value)
        }

        this.data.set(key, value)
    }


    getItem(key) {
        let item = this.data.get(key)

        if (item) {
            this.data.delete(key)
            this.data.set(key, item)
        }

    }

    removeItem(key) {
        this.data.delete(key)
    }

}



