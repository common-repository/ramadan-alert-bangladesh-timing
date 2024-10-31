$(document).ready(function(){

	$('#timings').append('<div id="date"></div>');
	$('#timings').append('<div id="day"></div>');
	$('#timings').append('<select id="city" style="width:100%;"></select>');
	
	var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
	var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December")
	
	var mydate = new Date()
	var year = mydate.getFullYear()
	var day = mydate.getDay()
	var month = mydate.getMonth()
	var daym = mydate.getDate()
	var days = daym+'.'+(month+1)+'.'+year
	
	$('#date').html('<center>'+daym+' '+montharray[month]+' '+year+' '+dayarray[day]+'</center>');
	
	var citys = new Array('DHAKA', 'RAJSHAHI', 'CHITTAGONG', 'SYLHET', 'DINAJPUR', 'NILFAMARI', 'MOULOVI-BAZAR', 'CHAA-DANGA');
	$('#city').append('<option>Choose City</option>');
	for (c in citys) {
		$('#city').append('<option>'+citys[c]+'</option>');
	}
	
	$('#timings').append('<div id="ramazan"></div>');
	$('#timings').append('<div id="date"></div>');
	$('#timings').append('<ul id="times"></ul>');
	
	$("#city").change(onSelectChange);
	
	function onSelectChange(){
		$.ajax({
			type: "GET",
			url: "wp-content/plugins/ramadan-alert-bangladesh-timing/20102.xml",
			dataType: "xml",
			success: function(xml) {
				$(xml).find('time').each(function(){
					var city = $(this).attr('city');
					var day = $(this).attr('day');
					var date = $(this).attr('date');
					var sehri = $(this).attr('sehri');
					var iftar = $(this).attr('iftar');
					if (city==$('#city :selected').text()) {
						if (date==days) {
							$('#times').html(
											'<center>'+day+' Ramazan 1431</center>' +
											'<li><span style="float:left;width:50px;">Sehri</span><span>:</span> <span style="float:right"> '+sehri+'</span></li>' +
											'<li><span style="float:left;width:50px;">Iftar</span><span>:</span> <span style="float:right"> '+iftar+'</span></li>' +
											'<div style="clear:both"></div>');
						}
					}
				});
			}
		});
	}
	
});