function arrayToList(arr){
    console.log(arr);
    let list = {};
    for(i=0; i<arr.length; i++){
       list.value = arr[i];
       list.rest = null;
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

    it.only("must convert [50] array to a list object", ()=>{
        expect(arrayToList([50])).toEqual({
            value: 50,
            rest: null
        });
    });
});