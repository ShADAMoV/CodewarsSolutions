/*
* Can Santa save Christmas?
    Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

    But he has only 24 hours left. Can he do it?

Your Task:
    You will get an array as input with time durations as string in the following format: HH:MM:SS. 
    Each duration represents the time taken by Santa to deliver a present. 
    Determine whether he can do it in 24 hours or not. 
    In case the time required to deliver all of the presents is exactly 24 hours, 
    Santa can complete the delivery ;-) .
*/

function determineTime (durations) {
    let allTime = 0;

    for (let time of durations) {
        time = time.split(':');
        allTime += +time[0] + +time[1]/60 + +time[2]/3600;
    }
    
    if (allTime <= 24) {
        return true;
    } else return false;
}
    
    

// Test cases
console.log(determineTime(['00:00:00', '03:00:15', '04:02:15', '05:10:15']))
console.log(determineTime(['00:00:00', '00:00:00', '00:00:00', '00:00:00']))
console.log(determineTime(['24:00:00', '24:00:15','24:02:15','24:10:15']))
console.log(determineTime(['00:59:00', '21:00:15','01:01:00','01:00:00']))
