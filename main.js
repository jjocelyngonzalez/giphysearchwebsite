const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query === "") {
    alert("Please enter a search term.");
    return;
  }

  const apiKey = "iPzozNNLnYh9XqIrta0pmHlrCPT8NuJf";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      results.innerHTML = ""; // clear previous results
      data.data.forEach((gif) => {
        const img = document.createElement("img");
        img.src = gif.images.fixed_height.url;
        results.appendChild(img);
      });
    })
    .catch((err) => {
      console.error("Error fetching GIFs:", err);
      results.innerHTML = "<p>Something went wrong. Try again!</p>";
    });
});
