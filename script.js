document.getElementById('infoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Display the collected info
    const outputDiv = document.getElementById('formOutput');
    outputDiv.innerHTML = `
        <h3>Thank you for submitting your information!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
    `;

    // Clear the form
    document.getElementById('infoForm').reset();
});
