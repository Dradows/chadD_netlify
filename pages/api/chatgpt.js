// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const prompt = JSON.parse(req.body);
  const text = await fetch('https://chatd-production.up.railway.app/api/chatgpt', {
    method: 'POST',
    body: JSON.stringify({
      prompt: prompt,
    }),
  });
  const json = await text.json()
  res.status(200).json(json);
}
