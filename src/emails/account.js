const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({ 
//     to: 'mok.kevin11@gmail.com',
//     from: 'mok.kevin11@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually gets to you.'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({ 
        to: email,
        from: 'mok.kevin11@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how to get along with the app.`,
        // html: ''
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({ 
        to: email,
        from: 'mok.kevin11@gmail.com',
        subject: 'We are sad to see you go :(',
        text: `We are sad to see you go ${name}! Kindly, would you tell us why you are leaving?`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}