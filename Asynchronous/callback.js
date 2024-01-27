/* function findUser(id){
    const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
    };
    return user;
}

const user = findUser(1);
console.log("user", user);
 */

/* function findUser(id, cb){
    const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
    };
    cb(user);
}

findUser(1, function(user){
    console.log(user);
});
 */

function findUser(id) {
    let user;
    setTimeout(function () {
      console.log("waited 0.1 sec.");
      user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
    }, 100);
    return user;
  }
  
  const user = findUser(1);
  console.log("user:", user);