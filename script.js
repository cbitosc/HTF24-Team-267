document.getElementById('sopForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const program = document.getElementById('program').value;
    const background = document.getElementById('background').value;
    const experience = document.getElementById('experience').value;
    const goals = document.getElementById('goals').value;

    const sopContent = `
        Statement of Purpose

        Name: ${name}

        Educational Program: ${program}

        Academic Background: ${background}

        Experience: ${experience}

        Career Goals: ${goals}
    `;

    localStorage.setItem('sopContent', sopContent);
    showSopOutput(name, program, background, experience, goals);
});

function showSopOutput(name, program, background, experience, goals) {
    const sopPreview = document.getElementById('sopPreview');
    sopPreview.innerHTML = `
        <h2>Statement of Purpose</h2>
        <h3>Name</h3>
        <p>${name}</p>
        <h3>Educational Program</h3>
        <p>${program}</p>
        <h3>Academic Background</h3>
        <p>${background}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Career Goals</h3>
        <p>${goals}</p>
    `;

    document.querySelector('.container').style.display = 'none';
    document.querySelector('.sop-container').style.display = 'block';

    document.getElementById('downloadTxt').addEventListener('click', function() {
        const blob = new Blob([localStorage.getItem('sopContent')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'SOP.txt';
        a.click();
        URL.revokeObjectURL(url);
    });

document.getElementById('downloadPdf').addEventListener('click', function() {
    const pdfWindow = window.open('', '', 'width=600,height=800');
    pdfWindow.document.write(`
        <html>
            <head>
                <title>Your SOP</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                        background: url('https://png.pngtree.com/background/20230616/original/pngtree-faceted-abstract-background-in-3d-with-shimmering-iridescent-metallic-texture-of-picture-image_3653595.jpg') no-repeat center center fixed;
                        background-size: cover;
                    }
                    .content {
                        background: rgba(255, 255, 255, 0.8); /* Translucent white */
                        padding: 20px;
                        border-radius: 10px;
                    }
                    h1 {
                        text-align: center;
                        font-size: 32px;
                    }
                    h2 {
                                    text-decoration: underline;
                                    font-size: 24px;
                                    margin: 10px 0;
                                }
                                h4 {
                                    font-size: 32px;
                                    margin: 10px 0;
                                }
                                p {
                                    font-size: 18px;
                                    margin: 5px 0 15px;
                                }
                            </style>
                        </head>
                        <body>
                            <h1>Statement of Purpose</h1>
                            
                            <h4>${name}<br><br></h4>

                            <h2>Educational Program</h2>
                            <p>${program}<br><br></p>
                            
                            
                            <h2>Academic Background</h2>
                            <p>${background}<br><br></p>
                            
                            
                            <h2>Experience</h2>
                            <p>${experience}<br><br></p>
                            
                            
                            <h2>Career Goals</h2>
                            <p>${goals}<br></p>
                        </body>
                    </html>
    `);
    pdfWindow.document.close();
    pdfWindow.print();
});


    document.getElementById('goBack').addEventListener('click', function() {
        window.location.reload(); 
    });
}
