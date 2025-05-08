document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Accessed");
    const roundedSquare = document.getElementById('rounded-square');
    const roundedSquare2 = document.getElementById('rounded-square2');
    const roundedSquare3 = document.getElementById('rounded-square3');
    const hiddenText = document.getElementById('hidden-text');
    const hiddenText2 = document.getElementById('hidden-text2');
    const hiddenText3 = document.getElementById('hidden-text3');
    const line1 = document.getElementById("line-1");
    const line2 = document.getElementById("line-2");
    function hideAllLines(){
        line1.style.backgroundColor = "black";
        line2.style.backgroundColor = "black";
    }
    hideAllLines();
    roundedSquare.addEventListener('click', function() {
        hideAllLines();
        // Toggle visibility of the hidden text
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'block'; // Show the text
        } else {
            hiddenText.style.display = 'none'; // Hide the text
        }
    });
    roundedSquare2.addEventListener('click', function() {
        hideAllLines();
        // Toggle visibility of the hidden text
        if (hiddenText2.style.display === 'none' || hiddenText2.style.display === '') {
            hiddenText2.style.display = 'block'; // Show the text
        } else {
            hiddenText2.style.display = 'none'; // Hide the text
        }
        
    });
    roundedSquare3.addEventListener('click', function() {
        hideAllLines();
        // Toggle visibility of the hidden text
        if (hiddenText3.style.display === 'none' || hiddenText3.style.display === '') {
            hiddenText3.style.display = 'block'; // Show the text
        } else {
            hiddenText3.style.display = 'none'; // Hide the text
        }
    });
});
