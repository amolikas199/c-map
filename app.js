const summaries = {
    intro: "C is a general-purpose, procedural programming language developed in the 1970s. It is known for its efficiency and control over system resources.",
    syntax: "C programs consist of functions and statements. The basic structure includes headers, main function, and statements ending with a semicolon.",
    variables: "Variables in C store data. Common data types include int, float, char, and double.",
    control: "Control structures like if-else, switch, loops (for, while, do-while) allow decision-making and iteration.",
    functions: "Functions enable modular programming by grouping reusable code blocks. Functions can accept parameters and return values.",
    pointers: "Pointers store memory addresses, enabling dynamic memory management and complex data structures.",
    files: "File handling in C allows reading from and writing to files using functions like fopen(), fread(), and fwrite()."
};

function showSummary(topic) {
    const summaryContainer = document.getElementById("summary-container");
    summaryContainer.innerHTML = `<strong>${topic.replace(/^\w/, (c) => c.toUpperCase())}:</strong> ${summaries[topic]}`;
    summaryContainer.style.display = "block";
}