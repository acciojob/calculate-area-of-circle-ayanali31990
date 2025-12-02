function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");
    
    // Convert input to a number
    radius = Number(radius);
    
    // Calculate area
    let area = Math.PI * radius * radius;
    
    // Round off to 2 decimal places
    area = area.toFixed(2);
    
    // Display the result
    console.log(`The area of the circle with radius ${radius} is ${area}`);
    alert(`The area of the circle with radius ${radius} is ${area}`);
}

calculateArea();
