describe("Testing utilFunc", function() {
	it("should return a+b-c", function() {
		var x = MyFirstLib.util.utilFunc(5,4,3);
		expect(x).toBe(6);
	});

	it("should work for non-int values", function() {
		var x = MyFirstLib.util.utilFunc(6.5,7,8.2);
		expect(x).toBeCloseTo(5.3,2);
	})
});

describe("Testing anotherUtilFunc", function() {
	it("should return a*b+c-d", function() {
		var x = MyFirstLib.util.anotherUtilFunc(1,2,3,4);
		expect(x).toBe(1);
	});
});