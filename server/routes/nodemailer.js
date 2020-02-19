const nodemailer = require('nodemailer');

const sendNodemailer = (toEmail, password) =>  new Promise(function(resolve, reject) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'noshoesallowedhere@gmail.com',
            pass: 'noshoes#20'
        }
    });

    const mailOptions = {
        // sender address
        // from: 'noshoesallowedhere@gmail.com',
        from: 'noshoesallowedhere@gmail.com',

        // user’s email from input field
        to: toEmail,

        // email message content
    };
        mailOptions.subject = 'Noua ta parola'
        mailOptions.html=
        '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' +
        '<html>\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <meta content="width=device-width, initial-scale=1" name="viewport">\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '    <div >\n' +
            '<p>Bună ziua,</p>' +
            '<p>Iată noua parolă:</p>'+
            `${password}`+
            '<p>Vă rugăm să vă conectați cu noua dvs. parolă</p>'+
        '    </div>\n' +
        '</body>\n' +
        '\n' +
      '</html>'


    transporter.sendMail(mailOptions, (error, response) => {
        if (error) {
            console.log(error)
            reject('Something went wrong');
        } else {
            resolve('Done');
        }

        transporter.close();
    });

});

module.exports = sendNodemailer;