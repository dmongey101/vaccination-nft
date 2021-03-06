const pinataApiKey = "d9636e84b7fd6d0765ea";
const pinataSecretApiKey = "9cc9c7f14fa50864a70045a44d51e3a3879f6a2baef4af16e7d9407b5ff6dbcf";
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlZjU4N2JiMi05ZmRiLTRjMmEtYWViZC1iNGJmMzE5Mzk2OWIiLCJlbWFpbCI6ImRvbmFsbW9uZ2V5QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlfSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDk2MzZlODRiN2ZkNmQwNzY1ZWEiLCJzY29wZWRLZXlTZWNyZXQiOiI5Y2M5YzdmMTRmYTUwODY0YTcwMDQ1YTQ0ZDUxZTNhMzg3OWY2YTJiYWVmNGFmMTZlN2Q5NDA3YjVmZjZkYmNmIiwiaWF0IjoxNjE1MDIxODA4fQ.-D2jQ6-0RS1enWx0v0M24uyCy8i-yVpCqvJsMfX6NX0"
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
const pinFileToIPFS = async () => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  let data = new FormData();
  data.append("file", fs.createReadStream("./images/testHash.json"));
  const res = await axios.post(url, data, {
    maxContentLength: "Infinity", 
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: pinataApiKey, 
      pinata_secret_api_key: pinataSecretApiKey,
    },
  });
  console.log(res.data);
};
var myfunc = pinFileToIPFS();
myfunc.then(function (res) {
    console.log(res.data);
}).catch(function (err) {
     console.log(err.response);
});