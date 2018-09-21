/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.arr = [];
  this.sets = {};
  this.idx = 0;
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {

   if (this.sets[val] !== undefined){
       return false;
   } else {
       this.sets[val] = this.idx ;
       this.arr[this.idx] = val;
       this.idx++;
       return true;
   }
};

/**
* Removes a value from the set. Returns true if the set contained the specified element. 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
   if (this.sets[val] !== undefined){
       let valIdx = this.sets[val];
       let lastItem = this.arr[this.idx -1];
       
       
       this.sets[lastItem] = valIdx;
       this.arr[valIdx] = lastItem;
       
       delete this.sets[val];
       this.arr.pop();
       this.idx--;
       
       return true;
   } else {
       return false;
   }
};

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
   let idx = Math.floor(Math.random() * this.arr.length);
  
   return this.arr[idx];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = Object.create(RandomizedSet).createNew()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/