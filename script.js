document.getElementById("fetchBtn").addEventListener("click", async function () {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      const imageUrl = data.message;
  
      // Display the image inside the #result div
      document.getElementById("result").innerHTML =
        `<img src="${imageUrl}" alt="Random Dog">`;
    } catch (error) {
      document.getElementById("result").innerHTML = "<p>Could not fetch a dog. Try again!</p>";
      console.error("Fetch error:", error);
    }
  });  