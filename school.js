const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriods() {
    console.log("class started");

    // Raise an emit
    setTimeout(() => {
      this.emit("bellRing", {
        period: "first",
        text: "period ended",
      });
    }, 2000);
  }
}

module.exports= School;