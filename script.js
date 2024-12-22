
    document.querySelector('button.btn-primary').addEventListener('click', function(event) {
        event.preventDefault(); 

 
        const email = document.getElementById('exampleFormControlInput1').value;
        const query = document.getElementById('exampleFormControlSelect1').value;
        const isMember = document.getElementById('gridCheck1').checked;
        const isTraveller = document.getElementById('gridCheck2').checked;
        const isBlogger = document.getElementById('gridCheck3').checked;
        const aboutYourself = document.getElementById('exampleFormControlTextarea1').value;
        const concern = document.getElementById('exampleFormControlTextarea2').value;


        const formData = {
            email,
            query,
            isMember,
            isTraveller,
            isBlogger,
            aboutYourself,
            concern
        };


        localStorage.setItem('formData', JSON.stringify(formData));
        document.getElementById('exampleFormControlInput1').value = '';
        document.getElementById('exampleFormControlSelect1').value = '';
        document.getElementById('gridCheck1').checked = false;
        document.getElementById('gridCheck2').checked = false;
        document.getElementById('gridCheck3').checked = false;
        document.getElementById('exampleFormControlTextarea1').value = '';
        document.getElementById('exampleFormControlTextarea2').value = '';
    });

