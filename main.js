var score = 0;
var time_counter = 0;
var timer_check = 0;
var drawn_sketch = 0;
var answer_holder= 0;

random_number = Math.floor((Math.random()*array_1.length)+1);
console.log(array_1[random_number]);
sketch = array_1[random_number];
document.getElementById("sketch_name").innerHTML = "sketch to be drawn = " + sketch;