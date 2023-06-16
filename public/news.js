const endpoint = "http://localhost:8080/api";
const newsContainer = document.querySelector("#newsContainer");

const getNews = async () => {
  const res = await fetch(`${endpoint}/news`);
  const data = await res.json();
  return data;
};

const drawElement = ({ id, title, text }) => {
  return `<div class="newsElement">
        <div>${title}</div>
        <div>${text}</div>
        <a href="/news/${id}" class="link-fill">${title}</a>
    </div>`;
};

const drawElements = (data) => {
  const elements = data.map((elem) => drawElement(elem)).join("");
  newsContainer.innerHTML = elements;
};

getNews().then((data) => {
  drawElements(data);
});
