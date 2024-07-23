const axios = require('axios');

const update = async () => {
  const ipResponse = await axios.get("https://api.ipify.org?format=json");

  const ip = ipResponse.data.ip;

  let url = `https://dynamicdns.park-your-domain.com/update`;
  url += `?domain=${process.env.DOMAIN}`;
  url += process.env.HOST ? `&host=${process.env.HOST}` : '';
  url += `&password=${process.env.PASSWORD}`;
  url += `&ip=${ip}`;

  const updateResponse = await axios.get(url);

  console.log(updateResponse.data);
}

update()