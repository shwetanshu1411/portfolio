export default function emailFunc(name:string, email_id:string, message:string){
    const emailStr =`<h2>New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email_id}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
    return emailStr;
}