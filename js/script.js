
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
        countString = count.toString();
        countSplit = countString.split("");
        
        


        for (i = 0; i <= input; i++){
          count.push(i)
        }
        

       count.forEach(function(number){
           if (three.includes(number)){
               number = "Wont you be my neighbor?";
               finalString.push(number);
           }else if (two.includes(number)){
               number ="Boop";
               finalString.push(number);
           }else if (one.includes(number)){
               number="Beep"
               finalString.push(number);
           }
           else {
            finalString.push(number);

           }
       })
       
        console.log(finalString);
        
        
        
    

    })
 



})
