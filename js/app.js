$( document ).ready(function() {

	retourStorage();
    var storage= [];


    $('#btn').on('click', function () {
    	storage.push($('#inp').val());
    	localStorage.setItem('array', storage);
   
    	$('#inp').val("");
    });

	function retourStorage() {
	
		var retour = localStorage.getItem('array');
			if (retour !== null) {
				$('#storage').html("<h1>"+retour+"</h1>");
			}
	}




});