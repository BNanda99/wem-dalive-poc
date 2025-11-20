# EDS Global Project guidelines for Code Generation of Blocks
## This project guidelines is for EDS block code generation only.

### JS Rules
- Use camelCase for variables and functions.
- Use const by default.
- Use let when value needs to change.
- Avoid var due to scope issues.
- Keep functions small and focused.
- Use object destructuring.
    ```
        const { name, age } = user;
    ```
- Use spread operator for copies.
    ```
        const newArray = [...oldArray];
        const newObject = { ...oldObject };
    ```
- Use async/await instead of plain promises.
    ```
        async function getData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        }
    ```
- Group related code together.
- Use Comments.
    ```
        /**
        * Calculates the total price including tax
        * @param {number} price - The base price
        * @param {number} taxRate - The tax rate percentage
        * @returns {number} Total price with tax
        */
        function calculateTotalWithTax(price, taxRate) {
            return price * (1 + taxRate / 100);
        }
    ```

### CSS Rules
- Always refer styles/styles.css and use variables from global styles before making any changes to EDS block CSS.
- If there is no matching variables for font family, color etc is present in global styles, make updates to styles/styles.css first and the use the variables at block css.