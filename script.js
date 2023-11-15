function enrollStudent() {
    var name = document.getElementsByName('name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var website = document.getElementsByName('website')[0].value;
    var imageLink = document.getElementsByName('imageLink')[0].value;
    var gender = document.getElementsByName('gender')[0].value;
    var skills = document.getElementsByName('skills')[0].value;

    if (!name || !email || !website || !imageLink || !gender || !skills) {
        alert('Please fill in all fields.');
        return;
    }

    var enrolledStudent = document.createElement('div');
    enrolledStudent.innerHTML = '<strong>Name:</strong> ' + name + '<br>' +
        '<strong>Email:</strong> ' + email + '<br>' +
        '<strong>Website:</strong> ' + website + '<br>' +
        '<strong>Image Link:</strong> ' + imageLink + '<br>' +
        '<strong>Gender:</strong> ' + gender + '<br>' +
        '<strong>Skills:</strong> ' + skills;

    document.querySelector('.boxRight .container').appendChild(enrolledStudent);

    clearForm();
}

function clearForm() {
    var form = document.querySelector('.boxLeft form');
    form.reset();
}

document.querySelector('.boxLeft input[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault();
    enrollStudent();
});

document.querySelector('.boxLeft input[type="reset"]').addEventListener('click', function () {
    clearForm();
});