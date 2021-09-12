module.exports = {
    sayHello: function() {
      return 'hello'
    },

    nonNumerical: function(arr1) {
      let myArr1 = []; 
      myArr1 = arr1.replace(/[^\d]/g, '');
      return myArr1; 
    },

    noDuplicates: function(arr2) {
      let uniqueChars = new Set(arr2)
      console.log(uniqueChars); 
      const myArr2 =  Array.from(uniqueChars);
      return myArr2;
      console.log(myArr2); 
    }
}

 


