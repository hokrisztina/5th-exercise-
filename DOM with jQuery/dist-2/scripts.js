let names = ['Chandler ', 'Ross ', 'Rachel ', 'Krisztina '];
$("ul").append(names);
//one solution
let cars = ['Porsche ', 'Nissan ', 'Ford ', 'Hyundai '];
cars.forEach(element => {
    $("ol").append(cars); 
});
//solution with foreach function
//second exercise

$("#addedwith").append("Title: Added with javascript");
$(".titleofbook").append("This block was added using JavaScript's jQuery library. How awesome!");