//app.js - Main Application Entry Point

//importing functions from utils.js
import { formatDate } from "./utils.js";
import { validateTask } from "./utils.js";
import { mergeTaskUpdate } from "./utils.js";

//testing out functions
console.log('Server starting. . .');
console.log(formatDate(new Date("2026-07-22")));
console.log(validateTask());
console.log(validateTask({ title: "Bring index card", dueDate: "2026-07-17"}));
console.log(mergeTaskUpdate({title: "Bring index card"}, {title: "Bring water bottle"} ));

