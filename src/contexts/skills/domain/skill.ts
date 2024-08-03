export interface PrimitiveSkill {
  id: number;
  topic: string;
  description: string;
}

export class Skill {
  constructor(private attributes: PrimitiveSkill) {}

  static create(createSkill: PrimitiveSkill): Skill {
    return new Skill(createSkill);
  }

  toValue(): PrimitiveSkill {
    return this.attributes;
  }
}
