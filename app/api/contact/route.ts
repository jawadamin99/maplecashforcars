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
    const pageUrl = String(formData.get("pageUrl") || "");

    const forwardedFor = req.headers.get("x-forwarded-for") || "";
    const realIp = req.headers.get("x-real-ip") || "";
    const ipAddress = forwardedFor.split(",")[0].trim() || realIp || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const to = process.env.CONTACT_TO || "example@example.com";
    const from = process.env.CONTACT_FROM || "example@example.com";
    const cc = "info@jawadamin.com";

    const port = Number(process.env.SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER || "dummy@gmail.com",
        pass: process.env.SMTP_PASS || "dummy-password",
      },
    });

    const images = formData.getAll("images");
    const cameraVideo = formData.get("cameraVideo");
    const attachments = await Promise.all(
      [...images, cameraVideo].map(async (file) => {
        if (!(file instanceof File)) return null;
        const arrayBuffer = await file.arrayBuffer();
        return {
          filename: file.name,
          content: Buffer.from(arrayBuffer),
          contentType: file.type,
        };
      })
    );
    const imageAttachments = attachments.filter(
      (item): item is NonNullable<(typeof attachments)[number]> => item !== null
    );

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; background:#f4f6f8; padding:24px;">
        <div style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e5e7eb;">
          <div style="background:#2b6cb0; color:#ffffff; padding:18px 24px;">
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
              <div style="white-space:pre-wrap; color:#111827; font-size:14px;">${message || "-"}</div>
            </div>
            <div style="margin-top:16px; padding:12px; background:#f4f6f8; border-radius:8px; border:1px solid #e5e7eb;">
              <div style="font-size:12px; color:#6b7280; margin-bottom:6px;">Submission Metadata</div>
              <div style="font-size:13px; color:#111827;">
                <div><strong>IP Address:</strong> ${ipAddress}</div>
                <div><strong>Browser:</strong> ${userAgent}</div>
                <div><strong>Page URL:</strong> ${pageUrl || "-"}</div>
                <div><strong>Camera Video Attached:</strong> ${cameraVideo instanceof File ? "Yes" : "No"}</div>
              </div>
            </div>
          </div>
          <div style="padding:14px 24px; background:#f4f6f8; font-size:12px; color:#6b7280;">
            This email was generated from your Maple Cash for Cars website form.
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Maple Cash For Cars" <${from}>`,
      to,
      subject: "Maple Cash For Cars Inquiry",
      cc,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `City: ${city}`,
        `Vehicle: ${vehicle}`,
        `Message: ${message}`,
        "",
        "Submission Metadata:",
        `IP Address: ${ipAddress}`,
        `Browser: ${userAgent}`,
        `Page URL: ${pageUrl || "-"}`,
        `Camera Video Attached: ${cameraVideo instanceof File ? "Yes" : "No"}`,
      ].join("\n"),
      html,
      attachments: imageAttachments,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error("Email send failed", {
      message: err instanceof Error ? err.message : String(err),
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: !!process.env.SMTP_USER,
      pass: !!process.env.SMTP_PASS,
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
    });
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
