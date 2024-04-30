export type Modify<T, P> = Omit<T, keyof P> & P;
