function arrayToList(arr){
  console.log(arr);
  let list = null;
  for(i=arr.length-1; i>=0; i--){
      list = {
          value: arr[i],
          rest: list
        }
  }
  return list;
};      


describe("A list exercise", ()=>{
    it("must convert [1,2,3] array to a list object", ()=>{
        expect(arrayToList([1,2,3])).toEqual({
            value: 1,
            rest: {
              value: 2,
              rest: {
                value: 3,
                rest: null
              }
            }
          });
    });

    it("must convert [50] array to a list object", ()=>{
        expect(arrayToList([50])).toEqual({
            value: 50,
            rest: null
        }); 
    });
});