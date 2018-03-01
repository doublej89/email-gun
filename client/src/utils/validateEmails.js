const rgex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
    if (emails.length < 1) {
        return 'Emails field cannot be left empty!';
    }
    if (emails.charAt(emails.length-1) === ',') {
        emails = emails.substring(0, emails.length-1);
    }
    const badEmails = emails.split(',').map(email => email.trim()).filter(email => !rgex.test(email));
    if (badEmails.length === 1) {
        return `This email is not valid: ${badEmails}`;
    } else if (badEmails.length > 1) {
        return `These emails are not valid: ${badEmails}`;
    }
    return;
};