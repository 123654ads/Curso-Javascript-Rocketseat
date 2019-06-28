axios.get('https://api.github.com/users/123654ads')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
        

