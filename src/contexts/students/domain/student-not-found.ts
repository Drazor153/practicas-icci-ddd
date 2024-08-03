export class StudentNotFound extends Error {
  constructor(run: number) {
    super(`Student with run ${run} not found`);
  }
}
