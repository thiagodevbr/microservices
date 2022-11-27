import ValueObject from "./value-object";

type AddressType = {
  street: string;
  number: number;
  complement: string;
  zipCode: number;
  state: string;
};

export default class UniqueEntityAddress extends ValueObject {
  constructor({ street, complement, number, state, zipCode }: AddressType) {
    super({ street, number, complement, zipCode, state });
  }
}
