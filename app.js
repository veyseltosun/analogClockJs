const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

function getTime(){
    const now = new Date()
    const seconds = now.getSeconds()
    console.log(seconds, 'seconds')
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const timeInterval = 6
    secondsHand.style.transform ='rotate(' +(seconds*timeInterval)+'deg)'
    console.log(secondsHand, 'secondHand')
    console.log(now)
}
setInterval(getTime, 100)