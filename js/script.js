
   var input;
   var finalString=[ ]


   function calc(input, finalString){
   for (i = 0 ; i <= input; i++){
 
    if (input == 3){
       finalString.push("neighbor");
       
       
   }else if (input == 2){
       finalString.push("Boop");
       
   }else if (input == 1){
       finalString.push("Beep");
     
   }else {
       finalString.push(i);
   }
   
   
}
console.log(finalString);
console.log(input)

   }





$(document).ready(function(){

    $("#form").submit(function(event){
        event.preventDefault();


      
       
        
        var input = parseInt($("input#input").val());
        calc(input,finalString );
        
        
        
    })
 




})