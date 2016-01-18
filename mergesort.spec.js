describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        expect( merge([1,3,5],[2,4]) ).toEqual( [1,2,3,4,5] );
    });
});

describe('Split Array', function(){
    it('splits an array into half', function(){
        expect( split([1,3,5,2,4]) ).toEqual( [[1,3],[5,2,4]] );
    });
});

describe('MergeSort', function(){
    it('is able to sort an array', function(){
        expect( mergeSort([1,3,5,2,4]) ).toEqual( [1,2,3,4,5] );
    });

    it('calls the merge function', function(){
    spyOn(window, 'merge').and.callThrough();
    expect(mergeSort([1,3,5,2,4])).toEqual([1,2,3,4,5]);
    expect(merge).toHaveBeenCalled();
  });

    it('calls the split function', function(){
    spyOn(window, 'merge').and.callThrough();
    expect(mergeSort([1,3,5,2,4])).toEqual([1,2,3,4,5]);
    expect(split).toHaveBeenCalled();
  });
    
});