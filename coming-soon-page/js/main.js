/* Author: Jason Kingston
email: kingstondigitalmedia@gmail.com

Setup a countdown timer
*/

//Setup end date for Countdown - Store time in miliseconds
let launchDate = new Date("July 20, 2021 12:00:00").getTime();

//Set timer to tick every second
let timer = setInterval(tick, 1000);

function tick() {
    //Get current time
    let currentTime = new Date().getTime();
    //Calculate difference between curent time and end time
    let t = launchDate - currentTime;
    //Test that time is above 0
    if(t > 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        //Prefix 0 to days if less than 10
        if(days < 10) { days = "0" + days; }
        
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //Prefix 0 to hours if less than 10
        if(hours < 10) { hours = "0" + hours; }
        
        let min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        //Prefix 0 to minutes if less than 10
        if(min < 10) { min = "0" + min; }
        
        let seconds = Math.floor((t % (1000 * 60)) / 1000);
        if(seconds < 10) { seconds = "0" + seconds; }

        //Create time string
        let time = `${days} : ${hours} : ${min} : ${seconds}`;

        //Update time in DOM
        document.querySelector('.countdown').innerText = time;
    }
}