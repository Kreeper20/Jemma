import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN =  process.env.REFRESH_TOKEN;
const LIST_KEY = process.env.LIST_KEY;

let accessToken = '';

async function getAccessToken() {
    const response = await fetch('https://accounts.zoho.com/oauth/v2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
      }),
    });
  
    const data = await response.json();
    console.log('Token response:', data);  // <-- add this
    accessToken = data.access_token;
    console.log('Token refreshed:', accessToken);
  }
// Refresh token on startup and every 50 minutes
getAccessToken();
setInterval(getAccessToken, 50 * 60 * 1000);

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  const params = new URLSearchParams({
    resfmt: 'JSON',
    listkey: LIST_KEY,
    contactinfo: JSON.stringify({ 'Contact Email': email }),
  });

  try {
    const response = await fetch(
      `https://campaigns.zoho.com/api/v1.1/json/listsubscribe?${params}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
        },
      }
    );

    const text = await response.text();
    console.log('Raw response:', text);
    
    const data = JSON.parse(text);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

let cachedToken = null;
let tokenExpiry = 0;

async function getToken() {
  // Return cached token if still valid
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const response = await fetch('https://api.example.com/token', {
    method: 'POST',
    // ... your token request
  });

  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiry = Date.now() + (data.expires_in * 1000); // cache until expiry

  console.log('Token refreshed:', cachedToken);
  return cachedToken;
}

app.listen(3001, () => console.log('Proxy running on http://localhost:3001'));