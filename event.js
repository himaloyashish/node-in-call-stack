const emitter = new EventEmitter();

// Register a listener for bellRing the emit
emitter.on("bellRing", ({})=>{
    console.log(`We need to run because ${period} ${tex}`);
})

// Raise an emit 

setTimeout(() => {
    emitter.emit("bellRing", {
        period: 'first',
        text: 'period ended'
    })
}, 2000);