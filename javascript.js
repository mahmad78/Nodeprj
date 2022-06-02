

let wait = "";
setTimeout(() => {
    wait = "arrived";
}, 5000);

const interval = setInterval(() => {
    if (wait === "arrived"){
        clearInterval(interval);
    }    
    console.log("Called");
}, 1000);

