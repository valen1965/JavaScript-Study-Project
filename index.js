
// If ..else  statement

// Hour
// If Hour is between 06am and 12pm: Good Morning! 
// If Hour is between 12pm and 6pm: Good Afternoon!
// Otherwise : Good Evening!

let hour = 12;

if (hour >=6 && hour < 12) 
    console.log('Good Morning!');
else if (hour >=12 && hour < 18) 
    console.log('Good Afternoon!');
else if (hour >=18 && hour < 24)
    console.log('Good Evening!');
else 
    console.log('Good Night!');