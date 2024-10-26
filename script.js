document.getElementById('sopForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;
    const background = document.getElementById('background').value;
    const experience = document.getElementById('experience').value;
    const goals = document.getElementById('goals').value;

    const sop = `
        My name is ${name}. I am applying for the ${program} program. 
        My academic background: ${background}. 
        Relevant experiences that I have: ${experience}. 
        My career goals: ${goals}.
    `;

    localStorage.setItem('sopContent', sop);
    showSopOutput();
});

function showSopOutput() {
    const sopOutput = document.getElementById('sopOutput');
    const sopContent = localStorage.getItem('sopContent');

    if (sopContent) {
        sopOutput.textContent = sopContent;
    }

    document.querySelector('.container').style.display = 'none';
    document.querySelector('.sop-container').style.display = 'block';

    document.getElementById('downloadTxt').addEventListener('click', function() {
        const blob = new Blob([sopContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'SOP.txt';
        a.click();
        URL.revokeObjectURL(url);
    });

    document.getElementById('downloadPdf').addEventListener('click', function() {
        const pdfContent = `
            <h1>Your Generated SOP</h1>
            <p>${sopContent.replace(/\n/g, '<br>')}</p>
        `;
        const pdfWindow = window.open('', '', 'width=600,height=400');
        pdfWindow.document.write(`<html><head><title>Your SOP</title></head><body>${pdfContent}</body></html>`);
        pdfWindow.document.close();
        pdfWindow.print();
    });

    document.getElementById('goBack').addEventListener('click', function() {
        window.location.reload(); 
    });
}
