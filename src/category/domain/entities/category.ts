import Entity from "../../../@seedwork/entity/entity";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";

export type CategoryProperties = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category extends Entity<CategoryProperties> {
  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    super(props, id);
    this.description = this.props.description;
    this.isActive = this.props.is_active;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get isActive(): boolean {
    return this.props.is_active;
  }

  get createdAt(): Date {
    return this.props.created_at;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  private set isActive(value: boolean) {
    this.props.is_active = value ?? true;
  }
}
