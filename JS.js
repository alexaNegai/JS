fetch("https://reqres.in/api/users?page=2")
 	.then(function (response) {
     response.json().then(function (data) {
     console.log('data', data)
     })
   })
