const axios = require('axios');

module.exports = async (req, res) => {
  const targetUrl = 'https://app-polytrack.kodub.com';

  try {
    const response = await axios.get(targetUrl, {
      responseType: 'text',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      }
    });

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Error fetching external content:', error.message);
    res.status(500).send('Internal Server Error: Failed to load external content');
  }
};
