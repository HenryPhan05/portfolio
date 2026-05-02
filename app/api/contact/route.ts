import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request){
  try{
    const body = await req.json();

    const {name, email, message} = body;
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "henry.phan2601@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,

      html: `
        <div>
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });
    return Response.json(data);
  }
  catch(error){
    return Response.json(
      {error: "Cannot send the data"},
      {status: 500}
    );
  }
}