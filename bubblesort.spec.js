describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array of two elements', function(){
        expect( bubbleSort([2,1]) ).toEqual( [1,2] );
    });

    it('handles an array of many elements', function(){
        expect( bubbleSort([2,1,7,4,9]) ).toEqual( [1,2,4,7,9] );
    });

    it('handles an array of with negative numbers', function(){
        expect( bubbleSort([2,-1,7,-4,9]) ).toEqual( [-4,-1,2,7,9] );
    });

    it('handles an array of with repeated elements', function(){
        expect( bubbleSort([2,-1,7,-4,9,-1]) ).toEqual( [-4,-1,-1,2,7,9] );
    });

    it('handles an array of with repeated first and last numbers', function(){
        expect( bubbleSort([2,-1,7,-4,9,-1,2]) ).toEqual( [-4,-1,-1,2,2,7,9] );
    });

});