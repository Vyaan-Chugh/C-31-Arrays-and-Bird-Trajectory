//datatypes => undefined, null,
//number
var num = 99.9;
console.log(num);

//string
var name = "Vyaan"
console.log(name)

//boolean
var coder = true;
console.log(coder)

//object = properties and functions
//var box = createSprite(10,10,10,10);
//console.log(box)

//arrays
//denoted by []
//index number: value
//index starts from 0..... length of the array - 1
var friends = ["Ayaan", "Aryan", "Siddhant"]
console.log(friends[0]);

var student = ["Vyaan", 99.9, true, "Paris"]
console.log(student)
student.pop()
student.push("paneer");
console.log(student)

for(var i = 0; i < student.length; i++){
    console.log(student[i])
}


/* Position and Trajectory*/
var pos = [20,40];
console.log(pos);
//trajectory stores list of arrays
var trajectory = []
trajectory.push(pos);
console.log(trajectory)
pos = [50,70]
trajectory.push(pos);
pos = [100,120]
trajectory.push(pos);
//trajectory = [[20,40],[50,70],[100,120]]


/*console.log(trajectory[0][0], trajectory[0][1])
console.log(trajectory[1][0], trajectory[1][1])
console.log(trajectory[2][0], trajectory[2][1])*/

for(var i = 0; i < trajectory.length;i++){
    console.log(trajectory[i][0], trajectory[i][1])
    //image(img,trajectory[i][0],trajectory[i][1])
}