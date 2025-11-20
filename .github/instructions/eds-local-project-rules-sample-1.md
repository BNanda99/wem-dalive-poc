## This project guidelines is for EDS block code generation only.

### EDS Block generation rules
- Refer blocks/cards.js and blocks/cards.css as sample while generating code for new EDS Block.

### JS Lint Rules
- Trailing Spaces are not allowed.
    Examples of incorrect code for this rule:
    ```
        /*eslint no-trailing-spaces: "error"*/

        var foo = 0;/* trailing whitespace */     
        var baz = 5;/* trailing whitespace */  
        /* trailing whitespace */
    ```
    Examples of correct code for this rule:
    ```
    /*eslint no-trailing-spaces: "error"*/

        var foo = 0;
        var baz = 5;
    ```
- Block must not be padded by blank lines.
    ```
        function example() {

           console.log("Hello");

        }
    ```
    It should be corrected to:
    ```
    function example() {
        console.log("Hello");
    }
    ```


### CSS Update rules
- first update styles/styles.css with new variables for font family, color etc if not present in global styles already and then update the block css with the variables added in global styles.