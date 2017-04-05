$( document ).ready(function() {

	retourStorage();


    $('#btn').on('click', function () {
    	var storage= $('#inp').val();
    	localStorage.setItem('string', storage);
   
    	$('#inp').val("");
    });

	function retourStorage() {
	
		var retour = localStorage.getItem('string');
			if (retour !== null) {
				$('#storage').html("<p>"+retour+"</p>");
			}
	}




});