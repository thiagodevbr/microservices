import InvalidUUIDError from "../../@seedwork/errors/invalid-uuid.error";
import UniqueEntityId from "./unique-entity-id.vo";

const spyValidateMethod = () => {
  return jest.spyOn(UniqueEntityId.prototype as any, "validate");
};

describe("UniqueEntityId Unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    const validateSpy = spyValidateMethod();
    expect(() => new UniqueEntityId("fake-uuid")).toThrow(
      new InvalidUUIDError()
    );
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("valid uuid generation", () => {
    const validateSpy = spyValidateMethod();
    expect(() => new UniqueEntityId()).not.toThrow();
    expect(validateSpy).toHaveBeenCalled();
  });

  test("validation of uuid props", () => {
    const validateSpy = spyValidateMethod();
    const vo = new UniqueEntityId("94236249-12d4-4095-92ad-c018d464cb55");
    expect(
      () => new UniqueEntityId("94236249-12d4-4095-92ad-c018d464cb55")
    ).not.toThrow();
    expect(vo.id).toBe("94236249-12d4-4095-92ad-c018d464cb55");
    expect(validateSpy).toHaveBeenCalled();
  });
});
