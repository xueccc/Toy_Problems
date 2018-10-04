class WordDictionary{
  constructor(){
      this.map = {};
  }
  addWord(word){
      if(!this.map[word]){
          this.map[word] = word;
      }
  }
  search(word){
      if (this.map[word]){
          return true;
      }
      
      if (!word.includes('.') && !this.map[word]){
          return false;
      }
      let result = false;
      for (let w in this.map) {
          if (!result && w.length === word.length){
              for (let i = 0; i < w.length; i++){
                  if(i === w.length - 1 && (word[i] === '.' || word[i] === w[i])){
                      result = true;
                  } else if (word[i] !== '.' && word[i] !== w[i]){
                      break;
                  }
              }
       
          }
      }
      return result;
  }
}