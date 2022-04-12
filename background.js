chrome.alarms.create({ delayInMinutes: 3 });

chrome.alarms.onAlarm.addListener(() => {
    console.log("TICKED");
});
