/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

let map = {};
let mapCounter = 0;
var encode = function(longUrl) {
    // console.log(longUrl)
    map[mapCounter] = longUrl;
    mapCounter++;
    return `http://tinyurl.com/${mapCounter- 1}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */

var decode = function(shortUrl) {
    let hash = shortUrl.replace('http://tinyurl.com/', '');
    //console.log(shortUrl)
    if (map[hash]) {
        return map[hash];
    } else {
        return 'short URL not found';
    }
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */