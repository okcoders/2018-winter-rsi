
class ExampleClass extends AnotherClass {
    constructor(props) {
        super(props)
        this.props = props
    }

    hello() {
        console.log(`hello ${this.props}`)
    }
}

new ExampleClass("rsi").hello()