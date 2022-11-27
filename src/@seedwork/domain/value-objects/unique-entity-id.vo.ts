import InvalidUUIDError from "../../../@seedwork/errors/invalid-uuid.error";
import { v4 as uuid, validate as validateUUID } from "uuid";
import ValueObject from "./value-object";

export default class UniqueEntityId extends ValueObject {
  constructor(readonly id?: string) {
    super(id || uuid());
    this.validate();
  }

  private validate() {
    const isValid = validateUUID(this.value);
    if (!isValid) {
      throw new InvalidUUIDError();
    }
  }
}
