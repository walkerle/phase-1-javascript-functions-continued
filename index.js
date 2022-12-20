// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// console.log(saturdayFun());
// console.log(saturdayFun('sleep'));

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

// console.log(mondayWork());
// console.log(mondayWork('go to class'));

function wrapAdjective(flair = '*') {
    function newFunc(para1 = 'special') {
        return `You are ${flair}${para1}${flair}!`;
    }
    return newFunc;
}