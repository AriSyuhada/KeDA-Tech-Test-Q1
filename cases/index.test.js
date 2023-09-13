describe('Data Structure Test', () => {
  const quickSort = require('./quickSort');
  const slidingWindowMax = require('./slidingWindowMax');
  const sumAllEvenNumberInObject = require('./sumAllEvenNumberInObject');

  describe('Sorting Algorithm Question', () => {
    test('Should be sorted - Test 1', () => { 
      const unsortedArr = [1, 2, 4, 3, 5, 3, 2, 1];
      const sortedArr = [5, 4, 3, 3, 2, 2, 1, 1];

      expect(quickSort(unsortedArr)).toEqual(sortedArr);
    });
  });

  describe('Maximum Sub Array', () => {
    test('Should returned 700 - Test 1', () => {
      const arr = [100, 200, 300, 400];
      const size = 2;
      const res = 700;

      expect(slidingWindowMax(arr, size)).toEqual(res);
    });

    test('Should returned 39 - Test 2', () => {
      const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
      const size = 4;
      const res = 39;

      expect(slidingWindowMax(arr, size)).toEqual(res);
    });

    test('Should returned 5 - Test 3', () => {
      const arr = [-3, 4, 0, -2, 6, -1];
      const size = 2;
      const res = 5;

      expect(slidingWindowMax(arr, size)).toEqual(res);
    });
  });
  describe('Sum of All Even Numbers on Object', () => {
    test('Should returned 6 - Test 1', () => {
      const obj = {
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
          }
        }
      };
      const res = 6;
      expect(sumAllEvenNumberInObject(obj)).toEqual(res);
    });

    test('Should returned 12 - Test 2', () => {
      const obj = {
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 4}, ee: 'car'}
      };
      const res = 12;
      expect(sumAllEvenNumberInObject(obj)).toEqual(res);
    });
  });
});