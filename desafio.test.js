require('./desafio');

describe('custom implementations of array functions', function () {
	describe('reduce', function () {
		test('returns undefined with function that returns undefined and has no initial value', function () {
			const targetArray = [3, 2, 1];

			const testFn = function (acc, item, index) {};

			const customResult = targetArray.customReduce(testFn);
			const originalResult = targetArray.reduce(testFn);

			expect(customResult).toEqual(originalResult);
			expect(customResult).toEqual(undefined);
		});

		test('returns first element with function that returns acc and has no initial value', function () {
			const targetArray = [3, 2, 1];

			const testFn = function (acc, item, index) {
				return acc;
			};

			const customResult = targetArray.customReduce(testFn);
			const originalResult = targetArray.reduce(testFn);

			expect(customResult).toEqual(originalResult);
			expect(customResult).toBe(3);
		});

		test('throws TypeError if used on an empty array and has no initial value', function () {
			const targetArray = [];

			const testFn = function (acc, item, index) {};

			const wrappedCustomResult = function () {
				targetArray.customReduce(testFn);
			};
			expect(wrappedCustomResult).toThrow(TypeError);
			expect(wrappedCustomResult).toThrow(
				'Reduce of empty array with no initial value'
			);
		});

		test('throws TypeError if used on an empty array anmd has initial value', function () {
			const targetArray = [];

			const testFn = function (acc, item, index) {};

			const customResult = targetArray.customReduce(testFn, 42);

			expect(customResult).toBe(42);
		});

		test('returns initial value with function that returns undefined and it has initial value', function () {
			const targetArray = [3, 2, 1];

			const testFn = function (acc, item, index) {};

			const initialValue = 42;

			const customResult = targetArray.customReduce(testFn, initialValue);
			const originalResult = targetArray.reduce(testFn, initialValue);

			expect(customResult).toEqual(originalResult);
			expect(customResult).toBe(undefined);
		});

		test('returns initial value with function that returns acc and it has initial value', function () {
			const targetArray = [3, 2, 1];

			const testFn = function (acc, item, index) {
				return acc;
			};

			const initialValue = 42;

			const customResult = targetArray.customReduce(testFn, initialValue);
			const originalResult = targetArray.reduce(testFn, initialValue);

			expect(customResult).toEqual(originalResult);
			expect(customResult).toBe(42);
		});

		test('returns sum of elements of array (no initial value)', function () {
			const targetArray = [3, 2, 1];

			const testFn = function (acc, item, index) {
				return acc + item;
			};

			const customResult = targetArray.customReduce(testFn);
			const originalResult = targetArray.reduce(testFn);

			expect(customResult).toEqual(originalResult);
			expect(customResult).toBe(6);
		});

		test('returns sum of elements of array (with initial value)', function () {
			const targetArray = [3, 2, 1];

			const testFn = function (acc, item, index) {
				return acc + item;
			};

			const initialValue = 0;

			const customResult = targetArray.customReduce(testFn, initialValue);
			const originalResult = targetArray.reduce(testFn, initialValue);

			expect(customResult).toEqual(originalResult);
			expect(customResult).toBe(6);
		});
	});

	describe('customFind', function () {
		test('returns first element equal to the callback function', function () {
			const targetArray = [0, 3, 4, 5];

			const testFn = function (item) {
				item === 3;
			};

			const customResult = targetArray.customFind(testFn);
			const originalResult = targetArray.find(testFn);

			expect(customResult).toEqual(originalResult);
		});

		test("returns undefined because didn't find the element in the array", function () {
			const targetArray = [0, 2, 4, 5];

			const testFn = function (item) {
				item === 3;
			};

			const customResult = targetArray.customFind(testFn);
			const originalResult = targetArray.find(testFn);

			expect(customResult).toEqual(originalResult);
		});
	});
	describe('customFilter', function () {
		test('returns a new array with the elements that pass the test.', function () {
			const targetArray = [0, 13, 4, 45];

			const testFn = function (item) {
				item > 10;
			};

			const customResult = targetArray.customFilter(testFn);
			const originalResult = targetArray.filter(testFn);

			expect(customResult).toEqual(originalResult);
		});

		test('returns empty array because no elements pass the test.', function () {
			const targetArray = [0, 2, 4, 5];

			const testFn = function (item) {
				item > 10;
			};

			const customResult = targetArray.customFilter(testFn);
			const originalResult = targetArray.filter(testFn);

			expect(customResult).toEqual(originalResult);
		});
	});

	describe('customSome', function () {
		test('returns true if the callback function returns a truthy value for at least one element in the array.', function () {
			const targetArray = [0, 13, 4, 45];

			const testFn = function (item) {
				item > 10;
			};

			const customResult = targetArray.customSome(testFn);
			const originalResult = targetArray.some(testFn);

			expect(customResult).toEqual(originalResult);
		});

		test("returns false if the callback function didn't return a Truthy value.", function () {
			const targetArray = [0, 2, 4, 5];

			const testFn = function (item) {
				item > 10;
			};

			const customResult = targetArray.customSome(testFn);
			const originalResult = targetArray.some(testFn);

			expect(customResult).toEqual(originalResult);
		});
	});

	describe('customMap', function () {
		test('A new array with each element being the result of the callback function.', function () {
			const targetArray = [0, 13, 4, 45];

			const testFn = function (item) {
				return item + 10;
			};

			const customResult = targetArray.customMap(testFn);
			const originalResult = targetArray.map(testFn);

			expect(customResult).toEqual(originalResult);
		});
	});
});
