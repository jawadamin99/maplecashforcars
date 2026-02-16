import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const vehicle = String(formData.get("vehicle") || "");
    const city = String(formData.get("city") || "");
    const message = String(formData.get("message") || "");

    const to = process.env.CONTACT_TO || "example@example.com";
    const from = process.env.CONTACT_FROM || "example@example.com";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "dummy@gmail.com",
        pass: process.env.SMTP_PASS || "dummy-password",
      },
    });

    const images = formData.getAll("images");
    const attachments = await Promise.all(
      images.map(async (file) => {
        if (!(file instanceof File)) return null;
        const arrayBuffer = await file.arrayBuffer();
        return {
          filename: file.name,
          content: Buffer.from(arrayBuffer),
          contentType: file.type,
        };
      })
    );

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:24px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
          <div style="background:#0f1412; color:#ffffff; padding:18px 24px;">
            <div style="font-size:18px; font-weight:700; letter-spacing:0.02em;">Maple Cash for Cars</div>
            <div style="font-size:12px; opacity:0.85;">New form submission</div>
          </div>
          <div style="padding:20px 24px;">
            <h2 style="margin:0 0 12px; font-size:18px; color:#111827;">Lead Details</h2>
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr><td style="padding:8px 0; color:#6b7280; width:120px;">Name</td><td style="padding:8px 0; color:#111827; font-weight:600;">${name}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Email</td><td style="padding:8px 0; color:#111827; font-weight:600;">${email}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Phone</td><td style="padding:8px 0; color:#111827; font-weight:600;">${phone}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">City</td><td style="padding:8px 0; color:#111827; font-weight:600;">${city}</td></tr>
              <tr><td style="padding:8px 0; color:#6b7280;">Vehicle</td><td style="padding:8px 0; color:#111827; font-weight:600;">${vehicle}</td></tr>
            </table>
            <div style="margin-top:16px; padding:12px; background:#f9fafb; border-radius:8px; border:1px solid #e5e7eb;">
              <div style="font-size:12px; color:#6b7280; margin-bottom:6px;">Message</div>
              <div style="white-space:pre-wrap; color:#111827; font-size:14px;">${message || "—"}</div>
            </div>
          </div>
          <div style="padding:14px 24px; background:#f4f6f8; font-size:12px; color:#6b7280;">
            This email was generated from your Maple Cash for Cars website form.
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from,
      to,
      subject: "New Cash for Cars Form Submission",
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `City: ${city}`,
        `Vehicle: ${vehicle}`,
        `Message: ${message}`,
      ].join("\n"),
      html,
      attachments: attachments.filter(Boolean) as any,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
