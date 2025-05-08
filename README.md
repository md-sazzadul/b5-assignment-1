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

## Key Differences:

- ### Declaration Syntax and Merging

We can declare **Interfaces** by the keyword **'interface'** and **Types** by the keyword **'type'**. **Interfaces** support merging with the same name, that means we can declare **Interfaces** with the same name multiple times. **Types** can not be merged, so we can't declare **Types** with the same name multiple times. For example:

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged interface
const user: User = { name: "Alice", age: 25 }; // ✅ It will work perfectly
```

```ts
type User = { name: string };
type User = { age: number }; // ❌ Error: Duplicate identifier 'User'
```
