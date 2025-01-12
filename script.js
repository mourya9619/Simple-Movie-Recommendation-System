document.getElementById("recommend-btn").addEventListener("click", () => {
    const genre = document.getElementById("genre").value;
    const duration = document.getElementById("duration").value;
    const mood = document.getElementById("mood").value;
  
    const recommendations = {
      Comedy: {
        Short: { Happy: "Minions", Relaxed: "Mr. Bean's Holiday" },
        Medium: { Happy: "The Grand Budapest Hotel", Relaxed: "Crazy, Stupid, Love" },
        Long: { Happy: "Forrest Gump", Relaxed: "The Truman Show" }
      },
      Action: {
        Short: { Excited: "Die Hard", Adventurous: "Raiders of the Lost Ark" },
        Medium: { Excited: "Mad Max: Fury Road", Adventurous: "The Dark Knight" },
        Long: { Excited: "Avengers: Endgame", Adventurous: "Inception" }
      },
      // Add similar logic for Drama, Horror, and Sci-Fi...
    };
  
    const movie = recommendations[genre]?.[duration]?.[mood];
    const output = movie
      ? `We recommend watching "${movie}". Enjoy your movie time!`
      : "Sorry, we couldn't find a perfect match for your preferences.";
    document.getElementById("output").innerText = output;
  });
  