The `bind()`, `apply()`, and `call()` functions work with context and arguments. In this exercise, you will learn how to replace one function with another to achieve functionality similar to `bind()`.

Implement and export by default a function that behaves like the built-in `bind(obj, fn)`. The function arguments are:

- `obj` – the object that acts as the context
- `fn()` – the function that is bound to the context

```javascript
const obj = { number: 5 };
const fn = function fn(number) {
return number + this.number;
};
const fnWithContext = bind(obj, fn);

// Takes the same number of arguments as the original function
fnWithContext(3); // 8
```
