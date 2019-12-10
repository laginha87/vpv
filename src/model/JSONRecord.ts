export interface JSONRecord<T, R extends string> {
  attributes: T;
  relationships: { [k in R]: { data: JSONRelation[] | JSONRelation } };
  id: string;
  type: string;
}

export interface JSONRelation {
  id: number;
  type: string;
}
