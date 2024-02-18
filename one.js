const allusers = [
    "meera",
    "priya",
    "mithun",
    "sheela",
];
function isUserpresent(user){
    if (allusers.includes(user)) {
        console.log(`Yes, ${user} is a valid user.`);
        return true;
      } else {
        console.log(`No, ${user} is not a valid user.`);
        return true;
      }
    }
    isUserpresent("mithun");

// OUTPUT: Yes, Mithun is a valid user.

isUserpresent("someone");

// OUTPUT: No, Someone is not a valid user.
