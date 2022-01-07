var vue = new Vue({
    el: '#app',
    data: {
      result: '',
      numseven: [7],
      numeight: [8],
	  numnine: [9],
	  opplus: ['+'],
	  numfour: [4],
	  numfive: [5],
	  numsiks: [6],
	  opminus: ['-'],
	  numone: [1],
	  numtwo: [2],
	  numthree: [3],
	  opshare: ['/'],
	  numzero: [0],
	  dot: ['.'],
	  opmulti: ['*'],
    },
    methods: {
      input: function(char) {
        //this.result = this.result.toString();
        this.result+=char;
      },
      
      calc: function() {
        
      }
    }
  })



$("#send").on("click", function() {
	
	var name = $("#name").val().trim();
	

	if(name == "") {
		$("#errorMess").text("Введите число");
		return false;
	
	}

	$("#errorMess").text("");

	$.ajax({
	  url: 'bek.php',
	  type: 'POST',
	  cache: false,
	  data: { 'name': name },
	  dataType: 'html',
	 // beforeSend: function() {
		//$("#sendMail").prop("disabled", true);
	  //},
	  success: function(data) {
      alert(data);
	  
	
	
		//$("#send").prop("disabled", false);
	  }
	});

	
});