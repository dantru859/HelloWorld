var HelloWorld = (function () {
    function HelloWorld(Daniel, Trujillo) {
        this.firstName = Daniel;
        this.lastName = Trujillo;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Daniel', 'Trujillo');
myHelloClassInstance.sayHello();
