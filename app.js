document.getElementById('sopForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;
    const background = document.getElementById('background').value;
    const experience = document.getElementById('experience').value;
    const goals = document.getElementById('goals').value;

    const sop = `
        <h2>Your Generated SOP</h2>
        <p>My name is <strong>${name}</strong>. I am applying for the <strong>${program}</strong>.</p>
        <p>My academic background: <strong>${background}</strong>.</p>
        <p>Relevant experiences that I have: <strong>${experience}</strong>.</p>
        <p>My career goals: <strong>${goals}</strong>.</p>
    `;

    const sopOutput = document.getElementById('sopOutput');
    sopOutput.innerHTML = sop;
    sopOutput.classList.add('show');
});


