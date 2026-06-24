var reverseWords = function(s) {
    let a = s.trim().split(' ').filter(word => word.length > 0);
    return a.reverse().join(' ');
};