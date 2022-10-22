setInterval(timeCalc,1000);
function timeCalc(){
    let clock= new Date();
    let hour = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();
    const options ={ weekday: 'long'};
    let day1 = new Intl.DateTimeFormat('en-US',options).format(clock);
    let date = clock.getDate();
    const options2 ={month: 'long'};
    let month = new Intl.DateTimeFormat('en-US',options2).format(clock);
    let year = clock.getFullYear();
    greet1 = " ";
    if(hour<12){
        greet1="Good Morning";
    }
    if(hour>=12 && hour<=16){
        greet1="Good Afternoon";
    }
    if(hour>16){
        greet1="Good Evening";
    }
    let updatedTime = hour + ":" + min + ":" + sec;
    document.getElementById("time")
        .innerHTML = updatedTime;
    let updatedDay = day1;
    document.getElementById("day")
        .innerHTML = updatedDay;
    let updatedDate = month + "   " + date + "  " + year;
    document.getElementById("date")
         .innerHTML = updatedDate;
    document.getElementById("greet")
          .innerHTML = greet1;
}
