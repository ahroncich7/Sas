const footer = document.querySelector("footer");

export async function setFooter() {
    let head = document.querySelector("head");
    head.innerHTML += "<link rel=stylesheet href=components/footer/footer.css>";

    let script = document.createElement("script");
    script.src = "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";
    head.appendChild(script);

    const html = await fetch("components/footer/footer.html");
    const content = await html.text();
    footer.innerHTML = content;

    document.getElementById("sendMessageBtn").addEventListener("click", () => {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        let messageText = message.value.replace(" ", "%20");
        let whatsaapMessage = `https://wa.me/+543548434942?text=${messageText},nombre:%20${name.value}%20email:%20${email.value}`;
        window.open(whatsaapMessage, "_blank");
        name.value = "";
        email.value = "";
        message.value = "";
    });

}

