const axios = require("axios");
const requestall = async() =>{
    const first = await axios.get("https://www.facebook.com/")
    const second = await axios.get("https://mycourses.ict.mahidol.ac.th/login/index.php")
    console.log(first.data,"\n",second.data)
}
requestall();