# Differences Between Interfaces and Types in TypeScript

I will now discuss about the key differences between **Interfaces** and **Types** although they serve the similar purposes in TypeScript. To know the differences, first we need to know the definition of **Interfaces** and **Types**.

## Interfaces

**Interfaces** in TypeScript can define the structure of an object by declaring properties, methods and their types. For example:

```ts
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greetings: () => void;
}
```

## Types

**Types** in TypeScript can define primitive types, union types, intersection types as well as complex types. For example:

```ts
type ID = string | number;
```
