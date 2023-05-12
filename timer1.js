const timedBeep = function(times) {
  const validTimes = [];
  for (const time of times) {
    if (!isNaN(time) && time > 0) {
      validTimes.push(time);
    }
  }

  for (const time of validTimes) {
    setTimeout(() => {
      console.log("Beep! "+ time + " seconds");
      process.stdout.write('\x07');
    }, time * 1000);
  }

  return validTimes;
};

// Test
const validTimes = timedBeep([3,5,9,10,15]);
console.log(`Beeps scheduled for: ${validTimes}`);
