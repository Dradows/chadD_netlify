export default async function handler(req, res) {
  await fetch('https://chatd-production.up.railway.app/api/check', {
    method: 'POST',
    body: req.body,
  });
  res.status(200);
}
