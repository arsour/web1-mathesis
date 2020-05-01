    let total = 0; // sum of grades
    let gradeCounter = 0; // number of grades entered
    const calcButton = document.querySelector("#calc");
    const resetButton = document.querySelector("#reset");
    const newVathmos = document.querySelector("#vathm");
    const avgVathmos = document.querySelector("#averg");
    const errorMessage = document.querySelector("#error");
    const vathmoi = document.querySelector("#vathmoi");
    calcButton.addEventListener("click", calculate);
    resetButton.addEventListener("click", reset);
    newVathmos.addEventListener("keyup", (e)=>{if (e.code === "Enter"){
                                                calculate();
                                            }});
    function calculate(){
      let gradeValue = parseInt(newVathmos.value);
      console.log("gradevalue=", gradeValue);
      newVathmos.value = "";

      if (gradeValue>10 || gradeValue<0){
            errorMessage.innerHTML = "Please enter a number between 0 and 10"
      }
      else if(!isNaN(gradeValue) ){
           avgVathmos.value = average_vathmoi(gradeValue);
           errorMessage.innerHTML = "";
      }
      else {
           errorMessage.innerHTML = "Please enter a number";
      }
    }

    function average_vathmoi(gradevalue){
      total += gradevalue;
      gradeCounter += 1
      vathmoi.value = gradeCounter;
      average = total / gradeCounter;
      console.log(total, average)
      return average
    }
   function reset(){
   // reset the global variables
     total = 0;
     gradeCounter = 0;
     document.querySelector("#vathm").value = "";
     document.querySelector("#averg").value = "";
     document.querySelector("#vathmoi").value = "";
     return false;
   }