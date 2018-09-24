/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//i: 2 strings
//o: string -> min string that contains all char in t
//e: 
//c: O(n)


var minWindow = function(s, t) {
    var result = '';
    var map = {};
    t.split('').forEach(char => map[char] = (map[char] || 0) + 1);
    
    var counter = Object.keys(map).length;
    
    var beg = 0;
    var end = -1;
    
    while (end < s.length){
        if (counter === 0){
            
            if (!result || result.length > end - beg + 1){
                result = s.slice(beg, end + 1)
            } else {
                if(map[s[beg]] !== undefined){
                    map[s[beg]]++;
                }
                if (map[s[beg]] > 0){
                   counter++;
                }
                beg++;
            }
            
        } else {
        
            end++;
            if (map[s[end]] != undefined){
                map[s[end]]--;
            }
            if (map[s[end]] === 0){
                counter--;
            }
        }
        
        
    }
    return result;
    
};