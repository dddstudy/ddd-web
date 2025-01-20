type ArrayElement<T> = T extends Array<infer U> ? U : never;

export { type ArrayElement };
