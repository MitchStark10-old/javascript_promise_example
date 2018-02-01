function generateRandomNumber () {
    return new Promise(function (resolve, reject) {
      var randomNumber = Math.floor((Math.random() * 10) + 1)
      if (randomNumber <= 5) {
        resolve(randomNumber)
      } else {
        reject(randomNumber)
      }
    })
  }
  

async function testResult() {
    try {
        let p =  await generateRandomNumber()
        console.log("Success : " + p);
    } catch (e) {
        console.log("Error : " + e);
    }

    console.log('testing concurrency');
}
  
testResult()
console.log("This will probably come first...");
