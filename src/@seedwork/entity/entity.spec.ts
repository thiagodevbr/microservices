import { validate as UUIDValidate } from "uuid";
import UniqueEntityId from "../domain/value-objects/unique-entity-id.vo";
import Entity from "./entity";

class StubEntity extends Entity<{ prop1: string; prop2: number }> {}

describe("entity unit tests", () => {
  it("should set props and id", () => {
    const arrange = { prop1: "test fake", prop2: 10 };
    {
      const entity = new StubEntity(arrange);
      expect(entity.props).toStrictEqual(arrange);
      expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
      expect(entity.uniqueEntityId).not.toBeNull();
      expect(UUIDValidate(entity.uniqueEntityId.value.toString())).toBeTruthy();
    }
  });

  it("should accept a valid uuid", () => {
    const uniqueEntityId = new UniqueEntityId();
    const arrange = { prop1: "test fake", prop2: 10 };
    const entity = new StubEntity(arrange, uniqueEntityId);
    expect(entity.uniqueEntityId).toBe(uniqueEntityId);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.uniqueEntityId).not.toBeNull();
    expect(entity.uniqueEntityId.value).toBe(uniqueEntityId.value);
  });

  it("should convert a entity to a json", () => {
    const uniqueEntityId = new UniqueEntityId();
    const arrange = { prop1: "test fake", prop2: 10 };
    const entity = new StubEntity(arrange, uniqueEntityId);
    expect(entity.toJSON()).toStrictEqual({
      id: uniqueEntityId.value,
      ...arrange,
    });
  });
});
