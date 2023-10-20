// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// SOLUTION BY SHABAB HUSSAIN:

function humanReadable(seconds) {
    if (seconds === 0) {
        console.log(`00:00:00`);
        return (`00:00:00`);
    }
    else if (seconds < 60) {
        console.log(`00:00:${seconds}`);
        return (`00:00:${seconds}`);
    } else if (seconds >= 3600) {
        numHH = (Math.floor(seconds / 3600));
        numMM = (Math.floor((seconds / 60) - (numHH * 60)));
        numSS = (seconds % 60);
        numHH = numHH.toString().padStart(2, '0');
        numMM = numMM.toString().padStart(2, '0');
        numSS = numSS.toString().padStart(2, '0');
        console.log(`${numHH}:${numMM}:${numSS}`);
        return (`${numHH}:${numMM}:${numSS}`);
    } else if (seconds >= 60 && seconds < 3600) {
        numMM = (Math.floor(seconds / 60));
        numSS = (seconds % 60);
        numMM = numMM.toString().padStart(2, '0');
        numSS = numSS.toString().padStart(2, '0');
        console.log(`00:${numMM}:${numSS}`);
        return (`00:${numMM}:${numSS}`);
    }
};