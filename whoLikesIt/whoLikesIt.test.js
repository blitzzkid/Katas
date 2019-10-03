const likes = require("./whoLikesIt");

describe("People who likes this post", () => {
  describe("If the user input some names", () => {
    it("Passes in an empty array", () => {
      expect(likes([])).toBe("no one likes this");
    });
    it("Passes in an array with 1 name", () => {
      expect(likes(["Peter"])).toBe("Peter likes this");
    });
    it("Passes in an array with 2 names", () => {
      expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
    });
    it("Passes in an array with 3 names", () => {
      expect(likes(["Max", "John", "Mark"])).toBe(
        "Max, John and Mark like this"
      );
    });
    it("Passes in an array with 4 names", () => {
      expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
        "Alex, Jacob and 2 others like this"
      );
    });
    it("Passes in an array with 5 names", () => {
      expect(likes(["Alex", "Jacob", "Mark", "Max", "John"])).toBe(
        "Alex, Jacob and 3 others like this"
      );
    });
  });

  describe("If the user did not input anything", () => {
    it("should return a prompt", () => {
      expect(likes()).toBe("no one likes this");
    });
  });
});
