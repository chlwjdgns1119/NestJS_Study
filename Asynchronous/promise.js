/* findUser(1).then(function (user) {
    console.log("user:", user);
  });
  
  function findUser(id) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        console.log("waited 0.1 sec.");
        const user = {
          id: id,
          name: "User" + id,
          email: id + "@test.com",
        };
        resolve(user);
      }, 100);
    });
  } */

/* const promise = new Promise(function(resolve, reject) { ... } ); */

function devide(numA, numB){
  return new Promise((resolve, reject)=>{
    if (numB == 0) reject(new Error("Unable to devide."));
    else resolve(numA/numB);
  });
}

devide(8,2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));