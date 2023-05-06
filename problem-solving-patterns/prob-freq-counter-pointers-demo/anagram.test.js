describe("anagaram", function () {
  it("should exist", function () {
    expect(typeof anagram).toBe(
      "function",
      "did you remember to define the 'anagram' function?"
    );
  });

  it("should exist", function () {
    expect(typeof anagram).toBe(
      "function",
      "did you remember to define the 'anagram' function?"
    );
  });

  it("should work when given two correct inputs", function () {
    expect(anagram("dog", "god")).toEqual(true, "should return true");
    expect(anagram("breaker", "rebake")).toEqual(true, "should return true");
  });
  it("should not work when given incorrect input", function () {
    expect(anagram(1, 1)).toEqual(false, "should return false if not string");
    expect(anagram(75, "testanything")).toEqual(
      false,
      "should return false if not string"
    );
  });
  it("should be true even if there is a case difference", function () {
    expect(anagram(1, 1)).toEqual(false, "should return false if not string");
    expect(anagram(75, "testanything")).toEqual(
      false,
      "should return false if not string"
    );
  });
});
