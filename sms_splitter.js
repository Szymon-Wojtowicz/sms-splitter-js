function solution(S, K) {
    // Split the input string into an array of individual words
    const words = S.split(' ');
    // Initialize variables to keep track of the current SMS message being constructed
    // and the total number of SMS messages required
    let currentSMS = '';
    let numSMS = 0;

    // Loop through each word in the input string
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // Check if the length of the current word is greater than the maximum SMS message length
        if (word.length > K) {
            // If so, return -1 to indicate that it is not possible to split the input string into SMS messages
            return -1;
        }
        // Check if adding the current word to the current SMS message would exceed the maximum length
        if ((currentSMS + ' ' + word).trim().length > K) {
            // If so, increment the number of SMS messages and start a new SMS message with the current word
            numSMS++;
            currentSMS = word;
        } else {
            // Otherwise, add the current word to the current SMS message
            currentSMS = (currentSMS === '') ? word : currentSMS + ' ' + word;
        }
    }

    // Check if there is any remaining text that has not been added to an SMS message
    if (currentSMS !== '') {
        // If so, increment the number of SMS messages to account for the remaining text
        numSMS++;
    }

    // Return the total number of SMS messages required
    return numSMS;
}

const S = "SMS messages are really short";
const K = 12;
const messageCount = solution(S, K);
document.getElementById("resultSMS").innerHTML = `SMS: ${S} <br> Number of SMS messages needed: ${messageCount}`;
/* Given the input parameters S = "SMS messages are really short" and K = 12, the solution() function will return 3.
This is because the input string can be split into three separate messages as follows:
"SMS"
"messages are"
"really short"
Each of these messages has a length of 12 or less, and they cannot be further divided without breaking up a word.
Therefore, the function returns the minimum number of SMS messages needed to accommodate the whole text, which in this case is 3. */

const S1 = "Hello world";
const K1 = 12;
const messageCount1 = solution(S1, K1);
document.getElementById("resultSMS1").innerHTML = `SMS: ${S1} <br> Number of SMS messages needed: ${messageCount1}`;
// S = "Hello world", K = 12: This input is short enough (has 11 characters) to fit within a single SMS message, so the function returns 1.

const S2 = "The quick brown fox jumps over the lazy dog";
const K2 = 12;
const messageCount2 = solution(S2, K2);
document.getElementById("resultSMS2").innerHTML = `SMS: ${S2} <br> Number of SMS messages needed: ${messageCount2}`;
// This input is longer than 12 characters, so the function splits it into multiple SMS messages. In this case, it takes four SMS messages to send the entire message:
// "The quick", "brown fox", "jumps over" and "the lazy dog". Therefore, the function returns 4.

const S3 = "This input has a word that is longerrrrrrrr than the maximum SMS message length so the function should return -1";
const K3 = 12;
const messageCount3 = solution(S3, K3);
document.getElementById("resultSMS3").innerHTML = `SMS: ${S3} <br> Number of SMS messages needed: ${messageCount3}`;
// S = "This input has a word that is longerrrrrrrr than the maximum SMS message length so the function should return -1", K = 12: This input contains a word ("longerrrrrrrr") that is longer
// than the maximum SMS message length. Therefore, the function returns -1.
// longerrrrrrrr - 13 characters

const S4 = "I am using JavaScript to solve this problem";
const K4 = 12;
const messageCount4 = solution(S4, K4);
document.getElementById("resultSMS4").innerHTML = `SMS: ${S4} <br> Number of SMS messages needed: ${messageCount4}`;
// This input is longer than 12 characters, so the function splits it into multiple SMS messages. In this case, it takes four SMS messages to send the entire message:
// "I am using", "JavaScript", "to solve" and "this problem". Therefore, the function returns 4.

const S5 = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
const K5 = 12;
const messageCount5 = solution(S5, K5);
document.getElementById("resultSMS5").innerHTML = `SMS: ${S5} <br> Number of SMS messages needed: ${messageCount5}`;
// This input is longer than 12 characters, so the function splits it into multiple SMS messages. In this case, it takes six SMS messages to send the entire message:
// "Lorem ipsum", "dolor sit", "amet", "consectetur", "adipiscing" and "elit". Therefore, the function returns 6.

const S6 = "This is a very long message that needs to be split into multiple SMS messages in order to send it to my friend";
const K6 = 12;
const messageCount6 = solution(S6, K6);
document.getElementById("resultSMS6").innerHTML = `SMS: ${S6} <br> Number of SMS messages needed: ${messageCount6}`;
// S = "This is a very long message that needs to be split into multiple SMS messages in order to send it to my friend", K = 12: This input is longer than 12 characters, so the function
// splits it into multiple SMS messages. In this case, it takes ten SMS messages to send the entire message:
// "This is a", "very long", "message that", "needs to be", "split into", "multiple SMS", "messages in", "order to", "send it to", "my friend". Therefore, the function returns 10.

const S7 = "There are no two consecutive spaces in this message";
const K7 = 12;
const messageCount7 = solution(S7, K7);
document.getElementById("resultSMS7").innerHTML = `SMS: ${S7} <br> Number of SMS messages needed: ${messageCount7}`;
// This input is longer than 12 characters, so the function splits it into multiple SMS messages. In this case, it takes five SMS messages to send the entire message:
// "There are no", "two", "consecutive", "spaces in", "this message". Therefore, the function returns 5.

const S8 = "AND HERE IS LAST TEXT";
const K8 = 12;
const messageCount8 = solution(S8, K8);
document.getElementById("resultSMS8").innerHTML = `SMS: ${S8} <br> Number of SMS messages needed: ${messageCount8}`;
// This input is longer than 12 characters, so the function splits it into multiple SMS messages. In this case, it takes two SMS messages to send the entire message:
// "AND HERE IS", "LAST TEXT". Therefore, the function returns 2.
