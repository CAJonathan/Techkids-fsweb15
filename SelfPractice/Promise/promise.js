const promiseExp = () => {
     return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("Okay");
        }, 5000);
        setTimeout(function(){
            reject("F***");
        }, 3000);
    });
}

// promiseExp()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(() => {
//         console.log("Err");
//     })

const muaRau = (money) => new Promise((resolve, reject) => {
    if(money > 10000){
        resolve("OK");
    } else{
        reject("LOL");
    }
})

const anRau = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Xong")
    }, 5000);
})

// muaRau(4)
//     .then((response) => {
//         console.log(response);
//         return anRau();
//     })
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

const asyncFunction = async() => {
    try{
        console.log("Bat dau");
        let muaRauResult = muaRau(10001);
        console.log(muaRauResult);
        console.log("Da co rau")
        let anRauResult = await anRau();
        console.log(anRauResult);
        console.log("Xong");
    } catch(err){
        console.log("LOL")
    }
}

asyncFunction();