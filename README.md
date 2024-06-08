Explanation of the Code
This project includes both an interactive photo gallery and two JavaScript coding challenges: string transformation and array manipulation.

1. Interactive Photo Gallery
The HTML, CSS, and JavaScript provided create an interactive photo gallery. The gallery displays information about different animals, with hover effects and a "Know more" link to view the image and description in a larger format.

HTML Structure:

The HTML file includes the structure of the gallery with four photos.
Each photo has a caption with the name and country of the animal.
There is an overlay that appears on hover and a "Know more" link that opens a larger view of the image with a description.
CSS Styling:

CSS is used to style the gallery, including the hover effects.
The photos scale and change opacity on hover.
The caption transitions smoothly on hover.
The single image view displays the selected image in full-screen mode with a description.
JavaScript Functions:

applyHoverStyle(photo): Applies the hover effect to a photo.
removeHoverStyle(photo): Removes the hover effect from a photo.
showMore(element): Displays the selected image in a larger view with a description.
closeSingleImage(): Closes the larger image view and returns to the gallery view.
2. JavaScript Coding Challenges
A. String Transformation

This function transforms a string based on its length:

If the length is divisible by 3, the string is reversed.
If the length is divisible by 5, each character is replaced with its ASCII code.
If the length is divisible by both 3 and 5 (i.e., 15), both operations are performed in the specified order.
The function checks the length of the input string.
Depending on the divisibility of the length, it performs the appropriate transformations.
The split, reverse, join, and map methods are used to manipulate the string.
B. Array Manipulation

This function checks if there exists a contiguous subarray within the array that sums up to the target.
The function uses two pointers (start and end) to iterate through the array.
currentSum keeps track of the sum of the current subarray.
The end pointer expands the subarray by adding elements to currentSum.
If currentSum exceeds the target, the start pointer increments to reduce the subarray size.
If currentSum equals the target, the function returns true.
The function returns false if no subarray with the target sum is found.
This code ensures an efficient solution with a time complexity of O(n) and a space complexity of O(1).
