const axios = require('axios');

module.exports = async (req, res) => {
  const targetUrl = 'https://app-polytrack.kodub.com';

  try {
    // Make a GET request to the external URL
    const response = await axios.get(targetUrl, {
      responseType: 'text',  // Get HTML content as text
    });

    // Set the content type to HTML and send the content back
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Error fetching external content:', error.message); // Log the error

    // Return a more helpful error message
    res.status(500).send('Internal Server Error: Failed to load external content');
  }
};
