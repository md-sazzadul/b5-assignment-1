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

- ### Extending/Combining

**Interfaces** can extend other interfaces to inherit their members by using the keyword **'extends'**. We can not extend like this in **Types**, but we can combine them by using intersection **'&'**. For example:

```ts
interface Animal {
  name: string;
}
interface Dog extends Animal {
  species: string;
}
```

```ts
type Animal = {
  name: string;
};
type Dog = Animal & { species: string };
```

- ### Implementation in Classes

**Interfaces** can be implemented by a class whether only object-like **Types** can be implemented. Unions and primitives **Types** can not be implemented by a class. For example:

```ts
interface Animal {
  name: string;
  bark(): void;
}

class Dog implements Animal {
  name = "Buddy";
  bark() {
    console.log("Ghew!");
  }
}
```

```ts
type Runnable = { run(): void };
class Robot implements Runnable {} // ✅ It will work

type ID = string | number;
class MyID implements ID {} // ❌ It will throw an Error
```

In practice, the choice between using **Interfaces** and **Types** depends on the specific needs of the TypeScript codebase. We can use **Interfaces** for defining object shapes, especially for public APIs or class implementation. On the other hand, we can use **Types** for unions, tuples or complex type definitions and manipulations.
