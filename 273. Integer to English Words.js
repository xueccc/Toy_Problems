// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

//convert the first number to the english, check the length and convert if length is divisible by 3. 

var numberToWords = function(num) {
    let eng = {
      1: {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten'
      },
      2: {
        2: 'Twenty',
        3: 'Thirty', 
        4: 'Fourty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninty'
      },
      3: [100, 'Hundred'],
      4: [1000, 'Thousand'],
      7: [1000000, 'Million'],
      11: [1000000000, 'Billion']
    }
};