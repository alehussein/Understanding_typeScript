"use strict";
let logged;
function senAnalytics(data) {
    console.log(data);
    logged = true;
}
senAnalytics("The Data");
