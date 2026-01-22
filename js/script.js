console.log("JS is ready");
const mailList = document.getElementById("mail-list");
const generateBtn = document.querySelector(" .btn-success");
let listItem = "";


generateBtn.addEventListener("click", function () {
    listItem = ""
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
            const randomMail = response.data.response;
            mailList.classList.remove("d-none")
            listItem += `<li><i class="bi bi-envelope-at-fill px-2"></i>${randomMail}</li>`
            mailList.innerHTML = listItem;
            console.log(randomMail);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
})

