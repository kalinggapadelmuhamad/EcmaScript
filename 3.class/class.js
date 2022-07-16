//class
class Foo {

    //constructor
    constructor(prop){
        this.prop = prop;
    }

    //static method
    static staticMethod(){
        return 'Foo';
    }

    //getFoo
    getProp(){
        return this.prop;

    }
}

//inheritance
class Bar extends Foo {

    //constructor
    constructor(prop, barProp){
        
        //super merujuk kepada parent class / foo
        super(prop * 2);
    }

    //staticMethod
    static method(){

        //super merujuk parent class
        return super.staticMethod() + ' Bar';
    }
}

//use
console.log(bar.staticMethod());
const bar = new Bar(123);
console.log(bar.getProp());

