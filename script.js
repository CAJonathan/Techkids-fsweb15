// function countDown(num)
// {
//     var i = num
//     for(i ; i >= 0 ; i--){
//         printNum(i, num - i);
//     }
// }

// function printNum(num, waitTime)
// {
//     setTimeout(function(){console.log(num);}, 1000 * waitTime);
// }

// countDown(10);

function countDown(num)
{
    for(let i = num ; i >= 0 ; i--){
        setTimeout(function(){console.log(i);}, 1000 * (num - i));
    }
}

countDown(10);