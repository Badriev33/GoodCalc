var vue = new Vue({
    el: '#app',
    data: { // Массивы для чисел и оппераций
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
      input: function(char) { //Функция для отображения чисел в Input
        this.result = this.result.toString();
        this.result+=char;
      },
      
      calc: function() {
        
      }
    }
  })



$("#send").on("click", function() {  //функция для кнопки "=" - отправить.
	
	var name = $("#name").val(); //trim();
	


	$.ajax({  //AJAX-запрос для отправки данных на бек
	  url: 'bek.php',
	  type: 'POST',
	  cache: false,
	  data: { 'name': name },
	  dataType: 'html',
	 
	  success: function(data) {  //Функция, которая возвращает рассчитанное значение с бекенда в html
      //alert(data);
		
	 $('.babytwo').html(data); //возвращает значение с бека и выводит его в определённый див
		
	  }

	});
	
});






	
  
