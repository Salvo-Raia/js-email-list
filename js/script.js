console.log("JS is ready");
const mailList = document.getElementById("mail-list");
const generateBtn = document.querySelector(" .btn-success");
const status = document.getElementById("status");
let listItem = "";


generateBtn.addEventListener("click", function () {
    status.classList.remove("d-none");
    mailList.classList.add("d-none")
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
            status.classList.remove("d-none", "alert-warning");
            status.classList.add("alert-danger")
            status.innerText = `😫 ${error.message}`
            console.log(error.message);
        })
        .finally(() => {
             status.classList.add("d-none")
        })
    }
})

