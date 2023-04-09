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

}
