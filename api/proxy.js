const axios = require('axios');

module.exports = async (req, res) => {
  const targetUrl = 'https://app-polytrack.kodub.com';

  try {
    const response = await axios.get(targetUrl, {
      responseType: 'text'  // Serve HTML content as text
    });
    
    res.setHeader('Content-Type', 'text/html');  // Set the correct content type
    res.status(200).send(response.data);  // Send the content to your iframe
  } catch (error) {
    res.status(500).send('Error proxying the content');
  }
};
