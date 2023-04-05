const header = document.querySelector("header");

export async function setHeader() {
    let head = document.querySelector("head");
    head.innerHTML += "<link rel=stylesheet href=components/header/header.css>";

    const html = await fetch("components/header/header.html");
    const content = await html.text();
    header.innerHTML = content;
}
