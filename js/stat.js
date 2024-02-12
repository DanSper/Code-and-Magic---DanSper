var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 150;
var CLOUD_Y = 10;
var TITLE_HEIGHT = 70;
var GAP = 10;
var TEXT_HEIGHT = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = CLOUD_HEIGHT - TEXT_HEIGHT - TEXT_HEIGHT - GAP - TITLE_HEIGHT;

var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
	var maxElement = arr[0];
	
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	
	return maxElement;
};

function randomNum(max) {
	return Math.floor(Math.random() * max);
};	

window.renderStatistics = function(ctx, names, times) {
	
	renderCloud(ctx,  CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
	
	ctx.fillStyle = '#000';
	ctx.font = '16px PT Mono';
	ctx.fillText('Ура! Вы победили!', CLOUD_X + (GAP) * 2, CLOUD_Y + (TEXT_HEIGHT) * 2);
	ctx.fillText('Список результатов:', CLOUD_X + (GAP) * 2, CLOUD_Y + (TEXT_HEIGHT) * 3);

	
	
	var maxTime = getMaxElement(times);
	
	
	for (var i = 0; i < names.length; i++) {		
		var currentBarHeight = 	(BAR_HEIGHT * times[i]) / maxTime;
		var currentDelta = BAR_HEIGHT - currentBarHeight;
		ctx.fillStyle = '#000';
		ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_WIDTH * 2 + GAP) * i, CLOUD_HEIGHT);
		ctx.fillText((Math.floor(times[i])), CLOUD_X + BAR_WIDTH + (BAR_WIDTH * 2 + GAP) * i, TITLE_HEIGHT + GAP + currentDelta);
		ctx.fillStyle = 'rgba(' + randomNum(180) + ',' + randomNum(180) +', 255)';
		if (names[i] == "Вы") {
			ctx.fillStyle = 'rgba(255, 0, 0, 1)';
		}		
		ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_WIDTH * 2 + GAP) * i, TITLE_HEIGHT + (GAP) * 2 + currentDelta, BAR_WIDTH, currentBarHeight);		
	}			
}; 

