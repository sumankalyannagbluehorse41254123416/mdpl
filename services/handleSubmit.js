"use server";
import axios from "axios";
import crypto from "crypto";

export async function handleSubmitForm(host, formData) {
  const baseurl = process.env.CMS_BASE_URL;
  const key = process.env.CMS_API_KEY;
  const secret = process.env.CMS_API_SECRET;
  const timestamp = Math.floor(Date.now());

  // Create HMAC SHA-256 signature
  const payload = Buffer.from(JSON.stringify({ timestamp })).toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers = {
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timestamp.toString(),
    "Content-Type": "application/json",
    "X-Host": host || "localhost:3000",
  };

  try {
    const res = await axios.post(
      `${baseurl}/form/submit/faf604e5-bfd9-4146-811f-831e7f1825cb`,
      formData,
      { headers }
    );
    return res.data;
  } catch (err) {
    console.log("Error submitting form:", err.response?.data || err.message);
    throw err; // Re-throw the error to handle it in the component
  }
}
