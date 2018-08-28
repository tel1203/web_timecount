$(window).on('load',function(){
//var dd = new Date();
//document.write(dd.toLocaleString());
 
//strCurDate = dateToFormatString(new Date(), '%YYYY%年%MM%月%DD%日 (%w%) %HH%時%mm%分%ss%秒');
//strCurDate = dateToFormatString(new Date(), '%HH%:%mm%:%ss%');
//document.write(strCurDate);
var printCurDate = function() {
	strCurDate = dateToFormatString(new Date(), '%HH%:%mm%:%ss%');
	$("#curDate").text(strCurDate);
}

var statusOnBreaktime = function() {
	$("#labelDate").show();
	$("#curDate").show();
	$("#status00").show();

	$("#labelTitle").hide();
	$("#printTitle").hide();
	$("#printPresenter").hide();
	$("#status10").hide();
	$("#status11").hide();
	$("#status12").hide();
	$("#printTime").show();
}
var statusOnPresentationtime = function() {
	$("#labelDate").hide();
	$("#curDate").hide();
	$("#status00").hide();

	$("#labelTitle").show();
	$("#printTitle").show();
	$("#printPresenter").show();
	$("#status10").hide();
	$("#status11").hide();
	$("#status12").hide();
	$("#printTime").show();
}

var curPresentation = function(timeTable) {
	for(var i=0; i<timeTable.length; i++) {
		var tmp;

		strCurHour = dateToFormatString(new Date(), '%HH%');
		strCurMin  = dateToFormatString(new Date(), '%mm%');

		tmp = timeTable[i]["begintime"].split(":");

		if (tmp[0] >= strCurHour && tmp[1] >= strCurMin) {
			break;
		}
	}

	console.log(i);
	console.log(timeTable[i]);
}

//var printCurDate = function() {
//}

//statusOnPresentationtime();

var timeTable = [
	{begintime:"19:45", presentationtime:1, breaktime:1,
		number:"00", name:"横山輝明", title:"開発テーマのタイトルをここに0"},
	{begintime:"19:59", presentationtime:1, breaktime:1,
		number:"01", name:"横山輝明", title:"開発テーマのタイトルをここに0"},
	{begintime:"20:03", presentationtime:1, breaktime:1,
		number:"02", name:"横山輝明", title:"開発テーマのタイトルをここに0"},
	{begintime:"20:03"}, 
	{begintime:"20:06", presentationtime:1, breaktime:1,
		number:"03", name:"横山輝明", title:"開発テーマのタイトルをここに0"},
	{begintime:"20:11", presentationtime:1, breaktime:1,
		number:"04", name:"横山輝明", title:"開発テーマのタイトルをここに0"},
];


curPresentation(timeTable);

// i=0 休憩中A
// timeTable[i-1]がいま
	// 休憩？発表でモード切替
	// 発表時、発表時間中？発表時間終了後？で切り替え

setInterval(printCurDate, 200);
setInterval(printCurDate, 200);

});
