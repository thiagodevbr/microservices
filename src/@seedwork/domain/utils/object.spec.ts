import { deepFreeze } from "./object";

describe("object unit test", () => {
  it("should be a immutable object", () => {
    const obj = deepFreeze({ prop1: "value", deep: { prop2: "value2" } });

    expect(() => {
      (obj as any).prop1 = "test";
    }).toThrow(
      "Cannot assign to read only property 'prop1' of object '#<Object>'"
    );

    expect(() => {
      (obj as any).deep.prop2 = "test";
    }).toThrow(
      "Cannot assign to read only property 'prop2' of object '#<Object>'"
    );
  });

  it("should not freeze a scalar value", () => {
    {
      const str = deepFreeze("a");
      expect(typeof str).toBe("string");
    }
    {
      const boolean = deepFreeze(true);
      expect(typeof boolean).toBe("boolean");
    }
    {
      const boolean = deepFreeze(false);
      expect(typeof boolean).toBe("boolean");
    }
    {
      const number = deepFreeze(2);
      expect(typeof number).toBe("number");
    }
  });
});
