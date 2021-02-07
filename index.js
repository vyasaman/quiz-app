var user = [{
    id: 'amanvyas720@gmail.com',
    pass: '12345',
    name: 'Aman Vyas',
    roll: '010EE120'
},
{
    id: 'abc@xyz.com',
    pass: '12345',
    name: 'Ankit Verma',
    roll: '010CS117'
}];
var count = 0;
var in_id = '';
var pass = '';
var u_name = '';
var u_roll = '';
function login() {
    in_id = document.getElementById('id').value;
    in_pass = document.getElementById('pass').value;
    for (var i = 0; i < user.length; i++) {
        if (user[i].id == in_id && user[i].pass == in_pass) {
            u_name = user[i].name;
            u_roll = user[i].roll;
            document.getElementById('login').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';


        }
    }
}
function test() {
    count = 0;
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('test1').style.display = 'block';


}
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login').style.display = 'block';

}
function nextQues(id, n_id) {
    console.log('hello');

    document.getElementById(id).style.display = 'none';
    document.getElementById(n_id).style.display = 'block';
    if (document.getElementById(n_id).id == 'end') {

        document.getElementById(n_id).style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    }
}
function next(id, n_id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById(n_id).style.display = 'block';
    count = count + 4;
}
function result() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    document.getElementById('name').innerText = u_name;
    document.getElementById('roll').innerText = u_roll;
    document.getElementById('marksOb').innerText = count;
    if (count >= 12) {
        document.getElementById('st').innerText = 'Pass';
    }
    else {
        document.getElementById('st').innerText = 'Fail';
    }
}