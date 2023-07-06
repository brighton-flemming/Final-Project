//Declaring Variables
const generalbutton = document.getElementById("general");
const businessbutton = document.getElementById("business");
const sportsbutton = document.getElementById("sports");
const entertainmentbutton = document.getElementById("entertainment");
const technologybutton = document.getElementById("technology");
const sciencebutton = document.getElementById("science");
const searchbutton = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

//Creation of an array.
// let newsDataArray = [];

//API Definitions
const apiKey = "efd835f7364448069a0d9c25ceeb703a";
const headlines_news =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=efd835f7364448069a0d9c25ceeb703a";
const technology_news =
  "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=efd835f7364448069a0d9c25ceeb703a";
const sports_news =
  "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=efd835f7364448069a0d9c25ceeb703a";
const search_news = "https://newsapi.org/v2/everything?q=";
const general_news =
  "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=efd835f7364448069a0d9c25ceeb703a";
const entertainment_news =
  "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=efd835f7364448069a0d9c25ceeb703a";
const science_news =
  "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=efd835f7364448069a0d9c25ceeb703a";
const business_news =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=efd835f7364448069a0d9c25ceeb703a";

window.onload = function () {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();
};

generalbutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>General News</h4>";
  fetchGeneralNews();
});

businessbutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business</h4>";
  fetchBusinessNews();
});

sportsbutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Sports</h4>";
  fetchSportsNews();
});

entertainmentbutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Entertainment</h4>";
  fetchEntertainmentNews();
});

technologybutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology</h4>";
  fetchTechnologyNews();
});

searchbutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Search :" + newsQuery.value + "</h4>";
  fetchQueryNews();
});

sciencebutton.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Science</h4>";
  fetchScienceNews();
});

const fetchHeadlines = async () => {
  const response = await fetch(headlines_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchGeneralNews = async () => {
  const response = await fetch(general_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(business_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(sports_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(entertainment_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(technology_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchQueryNews = async () => {
  if (newsQuery.value == null) return;

  const response = await fetch(
    search_news + newsQuery.value + "&apiKey=" + apiKey
  );
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

const fetchScienceNews = async () => {
  const response = await fetch(science_news);
  newsDataArray = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
  } else {
    //Displays errors.
    console.log(response.status, response.statusText);
  }

  displayNews();
};

function displayNews() {
  newsDetails.innerHTML = "";

  if (newsDataArray.length == 0) {
    newsDetails.innerHTML = "<h5>No data for you.<h5>";
    return;
  }
  newsDataArray.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var description = document.createElement("p");
    description.className = "text-muted";
    description.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(description);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsDetails.appendChild(col);
  });
}
