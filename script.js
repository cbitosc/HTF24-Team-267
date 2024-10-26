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
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.sop-container').style.display = 'block';

    document.getElementById('downloadTxt').addEventListener('click', function() {
        const sopContent = localStorage.getItem('sopContent');
        const blob = new Blob([sopContent], { type: 'text/plain' });
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
                                    margin: 20px;
                                    background: url('https://png.pngtree.com/background/20230616/original/pngtree-faceted-abstract-background-in-3d-with-shimmering-iridescent-metallic-texture-of-picture-image_3653595.jpg') no-repeat center center fixed;
                                    background-size: cover;
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
                            
                            <h4>${name}<br></h4>

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
