
//alarm sound: process.stdout.write('\x07');

const setTimer = (alarms) => {
  alarms = process.argv.slice(2);
  let timeout = 0;
  if (alarms) {
    alarms.forEach(element => {
      if (element !== NaN && element > 0) {
        timeout = (Number(element) * 1000);
        setTimeout(() => {
          process.stdout.write('\x07');
        }, timeout);
      }
    });
  }
};

setTimer();

//Edge Cases
// input is not negative
// input is not NaN
// input is not empty


