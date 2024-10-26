document.getElementById('sopForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;
    const background = document.getElementById('background').value;
    const experience = document.getElementById('experience').value;
    const goals = document.getElementById('goals').value;

    const sop = `
        <p>My name is ${name}, and I am applying for the ${program}. </p>
        <p>My academic background includes: ${background}.</p>
        <p>In terms of relevant experience, I have: ${experience}.</p>
        <p>My career goals are: ${goals}.</p>
    `;

    document.getElementById('sopOutput').innerHTML = sop;
});
