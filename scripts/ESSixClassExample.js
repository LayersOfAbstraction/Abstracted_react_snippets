//In ES6 features, class syntax by the identifier that can be used to create objects.
//Consturctor method is always called in object initialization. Any parameters passed into 
//the object will be passed into the new object. 

//PROBLEM: To create an igor skate from an inline skate model.
//START
//CREATE Class Roller_Blades.
    //CONSTRTUCT property Name "Inline Skate" 

    //RETURN SkateType "I am a "  Name " designed for mass production."
//END CLASS
    
//CREATE Child Class SEBA_Roller_Blades of Parent Rollerblades.
        //OVERRIDE SkateType "I am a high qaulity Seba inline skate.
    //END CLASS
//END

class InlineSkate {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return  "I am a " + this.brand + " designed for mass production."
    }
  }


//This string outside the class will output 'K2 Skate' back into
// InlineSkate.CreateRollerBlade().  
var skate = new InlineSkate('K2 Skate');
document.write(skate.present());
ReactDOM.render(React.createElement(InlineSkate, null), document.getElementById('esSixClassExample'));