let instruction = prompt("What do you want to do?")
const todos = [];

while (instruction !== "quit" && instruction !== "q") {

    if (instruction === "list") {
        console.log("*****")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("*****")
    }

    else if (instruction === "new") {
        const newtodo = prompt("What is the new todo?");
        todos.push(newtodo);
        console.log(`${newtodo} added to the list.`);
    }

    else if (instruction === "delete") {
        const index = prompt("Enter an index to delete");
        const deleted = todos.splice(index, 1);
        console.log(`Deleted ${deleted[0]}`);
    }

    instruction = prompt("What do you want to do?")
}

console.log("You quit the app :(")