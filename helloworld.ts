class HelloWorld {

    firstName: string;
    lastName : string;
    constructor(Daniel: string, Trujillo: string) {
        this.firstName = Daniel;
        this.lastName = Trujillo;    
    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.')
    }

}

const myHelloClassInstance = new HelloWorld('Daniel', 'Trujillo'); 
myHelloClassInstance.sayHello();