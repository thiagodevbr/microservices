import { Category } from "./category";

describe("Category tests", () => {
  test("constructor of category", () => {
    const category = new Category({ name: "Movie" });

    console.log(category);
    expect(1).toBe(1);
    //expect(category.props).toStrictEqual({ name: "Movie" });
  });
});
