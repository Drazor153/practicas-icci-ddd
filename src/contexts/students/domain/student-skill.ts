export interface PrimitiveStudentSkill {
  id: number;
  skill: string;
  level: number;
}
export class StudentSkill {
  constructor(private attributes: PrimitiveStudentSkill) {}

  static create(createStudentSkill: PrimitiveStudentSkill): StudentSkill {
    return new StudentSkill({
      id: createStudentSkill.id,
      skill: createStudentSkill.skill,
      level: createStudentSkill.level,
    });
  }

  toValue(): PrimitiveStudentSkill {
    return this.attributes;
  }
}
