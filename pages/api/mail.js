import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    
    const body = JSON.parse(req.body);

    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

    const data = {
        to: 'contact@plnguyen.dev',
        from: 'contact@plnguyen.dev',
        subject: 'plnguyen Contact Form - New Message',
        text: message,
        html: message.replace(/\r\n/g, '<br>')
    };

    await sendgrid.send(data);

    return res.status(200).json({ status: 'Ok' });
};