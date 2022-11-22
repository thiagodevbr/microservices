import { validate as uuidValidate } from "uuid";
import { Category, CategoryProperties } from "./category";
import { omit } from "lodash";

describe("Category tests", () => {
  test("constructor of category", () => {
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let date = new Date();
    category = new Category({
      name: "Movie",
      description: "test description",
      is_active: false,
      created_at: date,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "test description",
      is_active: false,
      created_at: date,
    });

    category = new Category({
      name: "Movie",
      description: "test description",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "test description",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    category = new Category({
      name: "Movie",
      created_at: date,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at: date,
    });
  });

  test("getter of name field", () => {
    const category = new Category({
      name: "Movie",
      description: "Movie description",
    });

    expect(category.name).toBe("Movie");
    expect(category.description).toBe("Movie description");
    expect(category.isActive).toBe(true);
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  test("id field", () => {
    type CategoryData = {
      props: CategoryProperties;
      id?: string;
    };
    const data: CategoryData[] = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null as null },
      { props: { name: "Movie" }, id: undefined as undefined },
      { props: { name: "Movie" }, id: "a1470a3a-243e-4766-a3c2-8cb609a6b812" },
    ];

    data.forEach((i) => {
      const category = new Category(i.props, i.id);
      expect(category.id).not.toBeNull();
      expect(uuidValidate(category.id)).toBeTruthy();
    });
  });
});
