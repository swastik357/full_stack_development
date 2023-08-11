let input = prompt('What would you like to do? (Press quit/q/Quit/Q to quit)');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];

while (input !== 'quit' && input !== 'q' && input !== 'Quit' && input !== 'Q') {
    if (input === 'list') {
        console.log('Listing all tasks in todos');
        console.log('***********************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('***********************');
    } else if (input === 'new') {
        const newTodo = prompt('Enter the new todo: ');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter the index to delete: '));
        while (Number.isNaN(index) || index < 0 || index > todos.length) {
            console.log('Invalid Index Entered');
            const index = parseInt(prompt('Enter a valid index to delete: '));
        }
        const deleted = todos.splice(index, 1);
        console.log(`Deleted ${deleted} at index ${index}`);
    }
    input = prompt('What would you like to do? (Press quit/q/Quit/Q to quit)');
}

console.log('%c App has been quit!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
// console.log("App has been quit")