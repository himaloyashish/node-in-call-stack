const School = require("./school");
const school = new School();

// Register a listener for bellRing the emit
school.on("bellRing", ({period, text})=>{
    console.log(`We need to run because ${period} ${text}`);
})

school.startPeriods();