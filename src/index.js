module.exports = function toReadable(num) {
    let result;
    let part1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let part2 = ["","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let remainder;
    result ='';

    if  (num%100 === 0 && num >= 100) {
        result = (part1[Math.trunc(num / 100)] + " hundred");
        return result;
    }
    if  ((num >= 100 && num < 1000) && (num%100 !== 0)){
        result = (part1[Math.trunc(num/100)]+" hundred");
        remainder = (num%100);
    }
    if ((remainder && remainder > 19) || (!remainder && num/10 > 0 && num > 19)){
        if (!remainder)
            remainder = num;
        else
        result += " ";
        result += (part2[Math.trunc(remainder/10)-1]);
        remainder = (num%10);
    }
    if (remainder || (!remainder && num < 20)) {
        if (!remainder)
            remainder = num;
        else
            result += " ";
        result += (part1[remainder]);
    }
    return result;
}

