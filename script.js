document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM Loaded");

    if (window.location.pathname.includes('index.html')) {
        console.log("On Website_2.html");

        document.getElementById('submit').addEventListener('click', checkPassword);

        function checkPassword(event) {
            // Prevent form submission
            event.preventDefault();

            var p_word = document.getElementById('fname').value;

            if(p_word === '1') {
                console.log("HEY ALI WAZUP")
                location.href='poisons/Arsenic.html';
            }
            else if(p_word === '2') {
                location.href='poisons/cyanide.html';
            }
            else if(p_word === '3') {
                location.href='poisons/lead.html';
            }
            else if(p_word === '4') {
                location.href='poisons/francium.html';
            }
                ;
            }     
        }
    }
);
