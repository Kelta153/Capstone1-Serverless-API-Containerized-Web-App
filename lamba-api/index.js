import crypto from "crypto";

export const handler = async (event) => {
  try {
    console.log("Received data:", body);

    const submissionId = crypto.randomUUID();

    return {
      statusCode: 200,

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message: "Data successfully received and logged!",
        id: submissionId,
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 400,

      body: JSON.stringify({
        message: "Invalid request",
        error: err.message,
      }),
    };
  }
};
