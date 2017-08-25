   var hour = time.substring(0,2);
   var after = time.substring(2,8);
   var m = time.substring(8,11);
   if (m == "PM") {
   switch(hour) {
       case "01": hour = "13"; break
       case "02": hour = "14"; break
       case "03": hour = "15"; break
       case "04": hour = "16"; break
       case "05": hour = "17"; break
       case "06": hour = "18"; break
       case "07": hour = "19"; break
       case "08": hour = "20"; break
       case "09": hour = "21"; break
       case "10": hour = "22"; break
       case "11": hour = "23"; break       
   }    
   }
    
   if (m == "AM") {
   switch(hour) {
       case "12": hour = "00"; break        
          
   }            
   }
 
    console.log(hour + after);