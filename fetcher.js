const https = require('https');
https.get('https://www.istockphoto.com/photo/punjabi-chhole-also-known-as-chhola-masala-sabji-amritsari-chole-sabzi-masaledar-gm1388454301-446097435', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const match = data.match(/property="og:image" content="([^"]+)"/);
    console.log(match ? match[1] : 'not found');
  });
});
