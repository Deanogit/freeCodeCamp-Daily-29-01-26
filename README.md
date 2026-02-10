## Letters-Numbers

Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

### Solution

What is this special insertion character `$&`? It translates as "Take whatever you just found and put it right back where you found it."

When you use `.replace()` the goal is usually to swap one thing for another. But here, you don't want to delete the letters or numbers, you just want to put a dash between them.

How `$&` works in practice:

Imagine you have a string `a1`.

    1. The Search: Your Regex finds the boundary where the `"a"` meets the `"1"`.
    2. The Match: The "match" is the `a`.
    3. The Replacement:
        - `$&`says: "Keep the `'a'`."
        - `-` says: "Add a dash."
    4. The Result: `a-`. Then it continues to the next character.

The Regex:
The RegExp uses a lookahead to check if the next character is different from the current character. `/([a-zA-Z])(?=[0-9])|([0-9])(?=[a-zA-Z])/g`
We are also using an `|` OR operator to check that both cases, letter then number and number then letter are accounted for.
