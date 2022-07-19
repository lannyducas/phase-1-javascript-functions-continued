function saturdayFun (activity ="roller-skate"){
return `This Saturday, I want to ${activity}!`;
}// code your solution here
function mondayWork(activity='go to the office'){
return `This Monday, I will ${activity}.`
}
/*function wrapAdjective(param="special"){
return `You are ${param}!`
}*/

function wrapAdjective(wrap = '*'){
    return function innerFunction (adjective ="special"){
        return `You are ${wrap}${adjective}${wrap}!`;
    }
}
wrapAdjective("%")('a dedicated programmer');