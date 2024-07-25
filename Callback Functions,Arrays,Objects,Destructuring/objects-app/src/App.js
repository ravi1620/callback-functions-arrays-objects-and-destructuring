import React, { Component } from 'react';

import './App.css';

class App extends Component {
  
render(){

  let calTenthResult=(studentDetails)=>{
    let passMarks=35;
    if(studentDetails.telMarks>=passMarks&& 
      studentDetails.hindiMarks>=passMarks&&
        studentDetails.engMarks>=passMarks&&
        studentDetails.mathsMarks>=passMarks&&
        studentDetails.sciMarks>=passMarks&&
        studentDetails.socMarks>=passMarks){
console.log(`${studentDetails.firstName} ${studentDetails.lastName} Passed in Tenth`)
    }else{
      console.log(`${studentDetails.firstName} ${studentDetails.lastName} Failed in Tenth`)

    }
  }

  let gautamDetails=["Gautam Gambhir",44,"Natasha Jain","Deepak Gambhir","Left-handed","Top order Batsman"];
console.log(gautamDetails);
console.log(gautamDetails[3]);
 let{GautamFirstName,
GautamLastName,
GautamAge,GautamSpouseName,GautamFatherName,Role,}=gautamDetails;

console.log(GautamFirstName,
GautamLastName,
GautamAge,GautamSpouseName,GautamFatherName,Role,);

let RakeshDetails={
  firstName:"Rakesh",
  lastName:"Kumar",
   Age:"35",
   Profession:"Cricket",
   Awards:"Arjuna",
   Centuries:"90",
   Metriculation:"Passed",
BattingStyle:"Right Hand",
telMarks:"99",
hindiMarks:"99",
engMarks:"99",
mathsMarks:"100",
sciMarks:"100",
socMarks:"100",
MetriculationMarks:"580",
AboutRakesh:()=>{
  console.log(`Rakesh Kumar is one of the good best Cricket Players in the world.`)
},
 }
 console.log(RakeshDetails);



let {telMarks:RakeshTelMarks,
  hindiMarks:RakeshHindiMarks,
  engMarks:RakeshEngMarks,
  mathsMarks:RakeshMathsMarks,
  sciMarks:RakeshSciMarks,
  socMarks:RakeshSocMarks}=RakeshDetails;

  console.log(RakeshTelMarks,RakeshHindiMarks,RakeshEngMarks,RakeshMathsMarks,RakeshSciMarks,RakeshSocMarks);
 let RavanDetails={
  firstName:"Ravan",
  lastName:"Kumar",
  Age:"40",
  Profession:"Chattered Accounted",
  Achievements:"Best Employer",
  telMarks:"99",
hindiMarks:"90",
engMarks:"99",
mathsMarks:"90",
sciMarks:"100",
socMarks:"90",
  AboutRavan:()=>{
    console.log(`Ravan was the best employer of all time ever in the company.`)
  }
}

 console.log(RakeshDetails.MetriculationMarks);
 console.log(RakeshDetails.Metriculation);

 console.log(RavanDetails.Profession);
 console.log(RavanDetails.Achievements);

 RakeshDetails.AboutRakesh();
 RavanDetails.AboutRavan();

 calTenthResult(RakeshDetails);
calTenthResult(RavanDetails);






let passMarks=35;
  let calculateTenthResult=(telMarks,hindiMarks,engMarks,mathsMarks,sciMarks,socMarks,passFn,failFn)=>{

    if(telMarks>=passMarks && hindiMarks>=passMarks && engMarks>=passMarks && mathsMarks>=passMarks &&sciMarks>=passMarks && socMarks>=passMarks){
 passFn();
    }else{
 failFn();
    }
  }

  calculateTenthResult(45,55,66,56,88,99,()=>{
    console.log(`Student passed in Tenth`)
  },()=>{
    console.log(`Student failed in Tenth`)
  });
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
