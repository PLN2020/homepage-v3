// import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const NEXT_PUBLIC_SENDGRID_API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY

const sendEmail = async ({ name, email, message }) => {
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
            'Content-Tyle': 'application/json',
            Authorization: `Bearer ${NEXT_PUBLIC_SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
            personalizations: [
                {
                    to: [
                    {
                        email
                    }
                ],
                    subject: 'plnguyen Contact Form - New Message'
                }
            ],
            from: {
                email: 'contact@plnguyen.com',
                name: `${name}`
            },
            content: [
                {
                    type: 'text/html',
                    value: `${message}`
                }
            ]
        })
    })
}

export { sendEmail }