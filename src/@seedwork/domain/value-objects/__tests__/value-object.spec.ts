import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}

describe("Value object unit test", () => {
  it("should set value", () => {
    {
      const vo = new StubValueObject("string value fake");
      expect(vo.value).toBe("string value fake");
    }

    {
      const vo = new StubValueObject({ prop: "value fake" });
      expect(vo.value).toStrictEqual({ prop: "value fake" });
    }
  });

  it("should convert to a string", () => {
    const date = new Date();
    const arrange = [
      // {
      //   props: null,
      //   expected: "null",
      // },
      // {
      //   props: undefined,
      //   expected: "undefined",
      // },
      {
        props: "",
        expected: "",
      },
      {
        props: "fake test",
        expected: "fake test",
      },
      {
        props: 0,
        expected: "0",
      },
      {
        props: 1,
        expected: "1",
      },
      {
        props: true,
        expected: "true",
      },
      {
        props: false,
        expected: "false",
      },
      {
        props: date,
        expected: date.toString(),
      },
      {
        props: {
          props1: "some value",
        },
        expected: JSON.stringify({ props1: "some value" }),
      },
    ];

    arrange.forEach((value) => {
      const vo = new StubValueObject(value.props);
      expect(vo.toString()).toBe(value.expected);
    });
  });
});
