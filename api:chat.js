import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.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
});

export default async function handler(req, res){
  const { message } = req.body;
  const response = await client.chat.completions.create({
    model: "gpt-4",
    messages: [{role:"user", content: message}]
  });
  res.status(200).json({reply: response.choices[0].message.content});
}
