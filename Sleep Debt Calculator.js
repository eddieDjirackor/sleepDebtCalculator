const getSleepHours = (day) => {
  if (day === 'monday') {
    return 20;
  } else if (day === 'tuesday') {
    return 5;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 6;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 3;
  } else if (day === 'sunday') {
    return 2;
  }
};

//console.log(getSleepHours('sunday'));

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 7;
  return idealHours *= 7;
};
/*
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  const sleepDebt = Math.abs(idealSleepHours - actualSleepHours);
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('More sleep than needed: ' + sleepDebt + ' hours more');
  } else if (actualSleepHours < idealSleepHours) { 
    console.log('You should get some rest: ' + sleepDebt + ' hours more');
  }
};
calculateSleepDebt();