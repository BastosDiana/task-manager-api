const sgMail = require('@sendgrid/mail');

// Set up the API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bastosdsb@gmail.com',
        subject: 'Thanks for joinning us!',
        text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
    })
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'bastosdsb@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}. Hope to see you back soon!.`
    })
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};