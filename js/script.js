console.log("JS is ready");
const mailList = document.getElementById("mail-list")

axios.get("https://flynn.boolean.careers/exercises/api/random/ail")
     .then((response) => {
        const randomMail = response.data.response;
        console.log(randomMail);
})
.catch((error) => {
    console.log(error.message);
})
