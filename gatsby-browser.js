/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

function validateForm() {
    var x = document.newsletter.email.value;
    if (x =="" || x == null){
        alert("Fill The Form Correctly You Idiot!")
        return false;
    }
}