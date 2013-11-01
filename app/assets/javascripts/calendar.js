var dayName = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
var monthName = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var numDays = 0;

var today = new Date();							// Date object to store the current date
var todaysDay = today.getDay();					// Stores the current day number 1-7
var todaysDate = today.getDate();					// Stores the current numeric day within the month
var todaysMonth = today.getUTCMonth();				// Stores the current month 1-12
var todaysYear = today.getFullYear();					// Stores the current year
var monthNum = todaysMonth;						// Tracks the current month being displayed
var yearNum = todaysYear;						// Tracks the current year being displayed
var firstDate = new Date(String(monthNum)+"/1/"+String(yearNum));	// Object Storing the first day of the current month
var firstDay = firstDate.getUTCDay() + 1;					// Tracks the day number 1-7 of the first day of the current month
var currentDate = new Date();
var lastDate = new Date(1);
var calendarString = "";

// add new information to the designated calendar date.
function add_info(){
	var sTime = document.getElementById('time');
	var strTime = sTime.options[sTime.selectedIndex].text;
	var strDescript = document.getElementById('descript').value;
	if(strDescript == ""){
		alert("Description required!")
	}else{
		var entry = document.getElementById(currentDate.getDate());
		var text = document.createTextNode('  -' + String(strTime) + ': ' + String(strDescript));
		entry.appendChild(text);
		entry.appendChild(document.createElement("br"));
		document.getElementById("time").selectedIndex = 0;
		document.getElementById("descript").value = "";
	}
}

// change calendar date when appropriate button is clicked.
function change_date(button) {
	if (button == '<<') yearNum--;
	else if (button == '>>') yearNum++;
	else if (button == '<') monthNum--;
	else if (button == '>') monthNum++;

	if (monthNum == 0) {
		monthNum = 12;
		yearNum--;
	}
	else if (monthNum == 13) {
		monthNum = 1;
		yearNum++
	}

	firstDate = new Date(String(monthNum)+"/1/"+String(yearNum));
	firstDay = firstDate.getDay() + 1;
	get_days(monthName[monthNum - 1]);
	fill_calendar(monthName[monthNum - 1],numDays);
}

// set the current highlighted date.
function current_date(theDay){
	currentDate = new Date(String(monthNum) + ',' + String(theDay) + ',' + String(yearNum));
	document.getElementById(theDay).style.backgroundColor= '#FFFFFF';
	if(currentDate.getDate() != lastDate.getDate()){	
		var prevDay = lastDate.getDate();
		document.getElementById(prevDay).style.backgroundColor= '#DDDD88';
		lastDate = currentDate;
	}
}

// get number of days for designated month.
function get_days(month){ 
	if(month == "January" || month == "March" || month == "May" || month == "July" || 
		month == "August" || month == "October" || month == "December"){
		numDays = 31;
		return;
	}else if(month == "April" || month == "June" || month == "September" || month == "November"){
		numDays = 30;
		return;
	}else{
		if((yearNum % 4 == 0 && yearNum % 100 != 0) || yearNum % 400 == 0){
			numDays = 29;
			return;
		}else{
			numDays = 28;
			return;
		}
	}
}

// fills the month table with numbers
function fill_calendar(month,month_length)
{ 
  calendarString = '';
  var day = 1;
  
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getUTCMonth();
  var currentYear = currentDate.getFullYear();

  // begin the new month table
  calendarString += '<TABLE BORDER=3 CELLSPACING=3 CELLPADDING=%10><TR>'
  calendarString += '<TD COLSPAN=7 ALIGN=center><B>' + month + '   ' + yearNum + '</B><TR>'
  // column headings
  for(var i = 0; i < 7; i++)
  {
	 calendarString += '<TD ALIGN=center WIDTH=1000>' + dayName[i] + '</TD>'
  }
  // pad cells before first day of month
  calendarString += '</TR><TR>'
  for (var i = 1; i < firstDay; i++){
        calendarString += '<TD HEIGHT=50 WIDTH=100>'
  }
  // fill the first week of days
  for (var i = firstDay; i < 8; i++){
    calendarString += '<TD id =' + day + ' onclick = "current_date(' + day + ');" bgcolor=#DDDD88 ALIGN=left HEIGHT=50 WIDTH=100>&nbsp&nbsp' + day + '</TD>'
	day++;
  }
  calendarString += '<TR>'
  // fill the remaining weeks
  while (day <= month_length) {
     for (var i = 1; i <= 7 && day<=month_length;i++){
		calendarString += '<TD id =' + day + ' onclick = "current_date(' + day + ');" bgcolor=#DDDD88 ALIGN=left HEIGHT=50 WIDTH=100>&nbsp&nbsp' + day + '</TD>'
		day++;
     }
     calendarString +='</TR><TR>'
     // the first day of the next month
     todaysDay=i
  }
  calendarString += '</TR></TABLE><BR>'
  var object = document.getElementById('calendar');
  object.innerHTML = calendarString;

}

// end hiding -->

get_days(monthName[monthNum - 1]);
fill_table(monthName[monthNum - 1],numDays)

