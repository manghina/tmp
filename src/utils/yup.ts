export type YupShapeByInterface<T> = {
  [K in keyof T]: any;
};
