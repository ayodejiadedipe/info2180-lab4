window.onload = function () {
    var button = document.  querySelector("button");
    var httpRequest;

    button.addEventListener('click', function (e) {
        e.preventDefault();

        httpRequest = new XMLHttpRequest();

        var url = "superheroes.php";
        httpRequest.onreadystatechange = list;
        httpRequest.open('GET', url);
        httpRequest.send();

    });

    function list() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // response received    
            if (httpRequest.status === 200) {
                //perfect
                response = httpRequest.responseText;
                alert(response);
            }
            else {
                alert('There was a problem with the request. ');
            }
        }  
    }
};
