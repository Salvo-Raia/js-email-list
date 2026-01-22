console.log("JS is ready");
const mailList = document.getElementById("mail-list");
let listItem = "";


for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
        const randomMail = response.data.response;
        listItem += `<li>${randomMail}</li>`
        mailList.innerHTML = listItem;
        console.log(randomMail);
    })
    .catch((error) => {
        console.log(error.message);
    })
}
    