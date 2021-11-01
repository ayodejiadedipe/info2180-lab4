window.onload = function () {
    var button = document.  querySelector("button");
    var httpRequest;

    button.addEventListener('click', function (e) {
        e.preventDefault();

        httpRequest = new XMLHttpRequest();

        var search = document.getElementById("search").value;
        console.log(search);

        var url = "superheroes.php";
        httpRequest.onreadystatechange = list;
        httpRequest.open('GET', 'superheroes.php?query=' + search, true);
        httpRequest.send();

        
    });

    function list() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // response received    
            if (httpRequest.status === 200) {
                //perfect
                var response = httpRequest.responseText;
                console.log(response);
                var result = document.getElementById("result");
                result.innerHTML = "<h2>RESULT</h2>" + response;
            }
            else {
                alert('There was a problem with the request. ');
            }
        }  
    }
};
