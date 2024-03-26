import firebaseAPI from "./scripts/firebaseAPI.js";
import Nav from "./scripts/nav.js";
import Lists from "./scripts/lists.js";

new Nav();
new Lists();
await firebaseAPI.initLocalData();
