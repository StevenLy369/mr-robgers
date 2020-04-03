
//    var input;
//    var finalString=[ ]

//    function calc(input, finalString){
//    for (i = 0 ; i <= input; i++){
 
//     if (input == 3){
//        finalString.push("neighbor");
       
//    }if (input == 2){
//        finalString.push("Boop");
       
//    }if (input == 1){
//        finalString.push("Beep");
     
//    }else{
//     (finalString.push(i));
//     console.log("hi");
//    } 

//    }
   
   
// }


   //split input into array
   //does include and push to new array
 

//    for (i = 0; i <= input; i++){
//        if (input.contains(3)){
//            console.log("3")
//        }else if (input.contains(2)){
//            console.log("2")
//        }

//    }




$(document).ready(function(){
    var one = "1";
    var two = "2";
    var three = "3";
    var count=[];
    var finalString=[];


    $("#form").submit(function(event){
        event.preventDefault();
        var input = ($("#input").val());
        var finalString=[];
        


        for (i = 0; i <= input; i++){
          count.push(i)
     
        }
         console.log(count);
      



       count.forEach(function(number){
           if (one.includes(number)){
               number = "Beep!";
               finalString.push(number);
           }else if (two.includes(number)){
               number ="Boop";
               finalString.push(number);
           }else {
            finalString.push(number);

           }
       })
       
       console.log(finalString);
        
        // if (input.includes(3)){
        //     console.log("3")

        // }else if (input.includes(2)){
        // finalString.push("beep")

        // } else {
        //     finalString.push(i)
           
        // }
        
        
        
    

    })
 



})
