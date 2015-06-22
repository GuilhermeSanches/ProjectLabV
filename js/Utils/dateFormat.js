var DateFormat = {
    format: function (date){
        
        if($.browser.chrome) {
            return date;
        }else{
            split = date.split('-');
            var date = new Date(split[0], split[1]-1, split[2]); 
            var day = date.getDate();
            if (day.toString().length == 1)
              day = "0"+day;
            var month = date.getMonth()+1;
            if (month.toString().length == 1)
              month = "0"+month;
            var year = date.getFullYear();  
            return day+"/"+month+"/"+year;
        }
    }
}