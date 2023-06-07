// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from 'openai';
import { NextRequest } from 'next/server';
import { connectToDatabase } from '../../libs/mongodb';
import { getTime } from './time.js';

export default async function handler(req, res) {
  await fetch('https://chatd-production.up.railway.app/api/feedback', {
    method: 'POST',
    body: req.body,
  });
  res.status(200);
}
