
// Initialize localStorage if empty
if (!localStorage.getItem('admissionFormData')) {
    localStorage.setItem('admissionFormData', JSON.stringify({ fullname:'', placeholder:'Enter full name', date: ''}));
}

// Populate input on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedData = JSON.parse(localStorage.getItem('admissionFormData'));
    if (savedData) {
        document.getElementById('Names').value = savedData.fullname || '';
        document.querySelector('.date').value = savedData.date || '';
    }
});

// Save data on click
document.getElementById('draft').addEventListener('click', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('Names');
    const dateInput = document.querySelector('.date');
    const dataToSave = { fullname: nameInput.value, placeholder: 'Enter full name', date: dateInput.value };
    localStorage.setItem('admissionFormData', JSON.stringify(dataToSave));

    console.log('Updated data:', dataToSave);
    alert('Application saved to draft successfully!');
    console.log(savedData);
});

document.getElementById('submit-application').addEventListener('click', function(event) {

    localStorage.removeItem('admissionFormData');
    alert('Application submitted successfully!');
});








/*
formDetails.fields.map(field => {
console.log(field.value);
});
*/




    