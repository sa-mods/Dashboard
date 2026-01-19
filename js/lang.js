let lang = "pt";

function toggleLang() {
    lang = lang === "pt" ? "en" : "pt";

    document.querySelector("h2").innerText =
        lang === "pt"
        ? "Engenheiro de Software • Bacharel"
        : "Software Engineer • Bachelor";

    document.querySelector(".btn-download").innerText =
        lang === "pt"
        ? "⬇ Download do Currículo (PDF)"
        : "⬇ Download Resume (PDF)";
}
