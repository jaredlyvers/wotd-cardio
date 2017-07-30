// vars
var wotd;
var wotd_array;
var wotd_input_array;
var wotd_input_array_length;
var the_workout;

// array
wotd_array = {
	a: '30 situps / 1 lap track',
	b: '50 kettlebell swings',
	c: '25 burpees',
	d: '25 squat press / 100 jump ropes',
	e: '20 planks / 50 russian twists',
	f: '40 dumbbell flys / 25 jumping jacks',
	g: '100 jump ropes',
	h: '40 speed skaters',
	i: '20 plank to elbow',
	j: '400 meter run',
	k: '30 plank walks',
	l: '25 clean press / 20 deadlift',
	m: '50 chest press / 20 jump squats',
	n: '25 burpees / 25 crunches',
	o: '50 crunches',
	p: '50 walking lunges',
	q: '400 meter run',
	r: '50 air squats',
	s: '30 tricept dips / 50 bicep curls',
	t: '100 jumping jacks',
	u: '100 bicycles / hold hover 1 minute',
	v: '25 tricep pushups',
	w: '60 plank rotations (elbow to knee)',
	x: '30 split lunge jumps',
	y: '25 jump squats',
	z: '100 bicycles'
};


// buit_it function
function build_it(){
	console.log(wotd_input_array);
	wotd_input_array_length = wotd_input_array.length;
	for( i=0; i < wotd_input_array_length; i++){
		console.log(wotd_input_array[i]);
		console.log(wotd_array[wotd_input_array[i]]);
		the_workout = '<p><input type="checkbox" /> <strong>'+wotd_input_array[i]+': </strong>'+wotd_array[wotd_input_array[i]]+'</p>';
		$('.build_workout').append(the_workout);
	}
}

// all document ready functions
$(document).ready(function(){
	$('#submit').click(function(e){
		e.preventDefault();
		// pull form input value
		wotd = $('#wotd').val();
		// convert to lowercase
		wotd = wotd.toLowerCase();
		// replace all special chars. we only want letters
		wotd = wotd.replace(/[^\w\s]|_/g, "");
		wotd = wotd.replace(/[0-9]/g, '');
		wotd = wotd.replace(/\s+/g, '');
		wotd = wotd.replace(/.{1}/g, "$&" + ",");
		//convert to an array for checking
		wotd_input_array = wotd.split(',');
		wotd_input_array.pop();
		// build Word Of The Day routine		
		build_it();		
	});

});