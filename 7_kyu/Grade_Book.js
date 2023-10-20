// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// SOLUTION BY SHABAB HUSSAIN:

function getGrade(s1, s2, s3) {
    let score = (parseInt(s1) + parseInt(s2) + parseInt(s3)) / (3);
    if (score < 60) {
        return ("F");
    } else if (score < 70) {
        return ("D");
    } else if (score < 80) {
        return ("C");
    } else if (score < 90) {
        return ("B");
    } else if (score <= 100) {
        return ("A");
    }
};