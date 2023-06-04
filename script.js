function toggleMenu() {
        var menu = document.getElementById("navbarMenu");
        menu.classList.toggle("active");
      }

const searchContainer = document.querySelector(".search-container");
const searchIcon = document.querySelector(".search-icon");
const container = document.getElementById("container");

searchIcon.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});

const data = [
  {
    id: 22,
    title: "Happy Birthday",
    subtitle: "Wishing you a day filled with joy and celebration!",
    description:
      "Sending you warm wishes on your special day. May this birthday bring you happiness, laughter, and unforgettable memories!",
  },
  {
    id: 1,
    title: "Congratulations on Your Achievement",
    subtitle: "You did it!",
    description:
      "Your hard work and dedication have paid off. Congratulations on your well-deserved success! Wishing you continued growth and more achievements in the future.",
  },
  {
    id: 10,
    title: "Get Well Soon",
    subtitle: "Sending healing thoughts your way",
    description:
      "Wishing you a speedy recovery and hoping to see you back on your feet soon. Take good care of yourself and know that you're in our thoughts.",
  },
  {
    id: 2,
    title: "Thank You",
    subtitle: "Grateful for your kindness",
    description:
      "Expressing heartfelt gratitude for your thoughtfulness and support. Your kindness has made a difference, and we are truly thankful to have you in our lives.",
  },
  {
    id: 23,
    title: "Happy Anniversary",
    subtitle: "Celebrating another year of love and togetherness",
    description:
      "Congratulations on reaching this beautiful milestone. May your love continue to grow stronger with each passing year. Wishing you a day filled with love and cherished memories.",
  },
  {
    id: 5,
    title: "New Baby",
    subtitle: "Welcome to the world, little one",
    description:
      "Sending warmest congratulations on the arrival of your precious bundle of joy. May this new chapter bring you endless love, joy, and wonderful moments as a family.",
  },
  {
    id: 19,
    title: "Thinking of You",
    subtitle: "You're always in our thoughts",
    description:
      "Sending you love and positive energy during this time. You're not alone—we're thinking of you and here for you. Take care and know that brighter days are ahead.",
  },
  {
    id: 21,
    title: "Happy Retirement",
    subtitle: "Wishing you endless relaxation and new adventures",
    description:
      "Congratulations on a well-deserved retirement. May this new phase of life be filled with joy, fulfillment, and exciting adventures. Enjoy every moment!",
  },
  {
    id: 20,
    title: "Wedding Wishes",
    subtitle: "Congratulations on your special day",
    description:
      "Sending you heartfelt congratulations on your wedding day. May your love shine brighter with each passing day, and may your journey together be filled with love, happiness, and harmony.",
  },
  {
    id: 3,
    title: "Sympathy",
    subtitle: "In loving memory",
    description:
      "During this difficult time, we want you to know that you are in our thoughts and prayers. May the memories of your loved one bring you comfort and strength. Our deepest condolences.",
  },
  {
    id: 4,
    title: "Good Luck",
    subtitle: "You've got this!",
    description:
      "Wishing you the best of luck as you embark on this new endeavor. Believe in yourself, stay positive, and remember that you have the skills and determination to succeed.",
  },
  {
    id: 18,
    title: "Graduation",
    subtitle: "Congratulations, graduate!",
    description:
      "You did it! Congratulations on your well-earned graduation. May your future be filled with exciting opportunities, personal growth, and great success. The world is yours to conquer!",
  },
  {
    id: 6,
    title: "Welcome Home",
    subtitle: "Home sweet home",
    description:
      "Welcome back! After your journey, it's time to relax and enjoy the comforts of home. May this place always be filled with love, happiness, and cherished memories.",
  },
  {
    id: 9,
    title: "Engagement",
    subtitle: "Congratulations on your engagement",
    description:
      "Wishing you a lifetime of love, happiness, and beautiful moments together. Congratulations on your engagement—may this be the beginning of a wonderful journey towards a lifetime of togetherness.",
  },
  {
    id: 11,
    title: "New Job",
    subtitle: "Congratulations on your new adventure",
    description:
      "Wishing you the best of luck in your new job. May this opportunity bring you growth, fulfillment, and success. You've got what it takes to shine in your new role!",
  },
  {
    id: 12,
    title: "Baby Shower",
    subtitle: "Celebrating the upcoming arrival",
    description:
      "Sending you warmest wishes as you prepare to welcome your little one. May this special time be filled with joy, excitement, and anticipation. Congratulations on your growing family!",
  },
  {
    id: 13,
    title: "Friendship",
    subtitle: "Thankful for your friendship",
    description:
      "In a world where friendships are rare treasures, I feel incredibly grateful to have you in my life. Thank you for being a wonderful friend—your presence brings joy and meaning to my days.",
  },
  {
    id: 7,
    title: "Valentine's Day",
    subtitle: "For the one I love",
    description:
      "On this day of love, I want to express how much you mean to me. You fill my life with happiness, and I'm grateful to have you by my side. Happy Valentine's Day, my love!",
  },
  {
    id: 15,
    title: "New Home",
    subtitle: "Congratulations on your new space",
    description:
      "Congratulations on finding your perfect place! May your new home be a haven of love, laughter, and cherished memories. Wishing you many wonderful years in this new chapter of your life.",
  },
  {
    id: 8,
    title: "Encouragement",
    subtitle: "You're stronger than you think",
    description:
      "During challenging times, it's important to remember your strength. Believe in yourself, stay positive, and keep pushing forward. You've overcome obstacles before, and you will do it again.",
  },
  {
    id: 17,
    title: "Just Because",
    subtitle: "A little something to brighten your day",
    description:
      "Sometimes, no special occasion is needed to remind you how special you are. Sending you this card just because you deserve a smile and a reminder that you're loved and appreciated.",
  },
  {
    id: 16,
    title: "Farewell",
    subtitle: "Wishing you the best in your new journey",
    description:
      "As you embark on a new path, we want you to know that you'll be missed. Thank you for the wonderful memories and contributions. Wishing you every success and happiness in your new endeavor.",
  },
  {
    id: 14,
    title: "Just Married",
    subtitle: "Congratulations on your wedding",
    description:
      "Wishing you a lifetime of love, laughter, and happiness as you begin this beautiful journey together. Congratulations on your marriage—may every day be filled with love and romance!",
  },
];

const renderCards = (cardsData) => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  cardsData.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.classList.add("cardsamecolor");
    title.textContent = item.title;
    card.appendChild(title);

    const subtitle = document.createElement("h3");
    subtitle.classList.add("cardsubtitle");
    subtitle.textContent = item.subtitle;
    card.appendChild(subtitle);

    const description = document.createElement("p");
    description.classList.add("card-description", "cardsamecolor");
    description.textContent = item.description;
    card.appendChild(description);

    const downloadCount = document.createElement("p");
    downloadCount.classList.add("download-count");
    downloadCount.textContent = `Download Count: ${item.id}`;
    card.appendChild(downloadCount);

    const collapseBtn = document.createElement("p");
    collapseBtn.classList.add("collapse-btn");
    collapseBtn.innerHTML = '<i class="fas fa-plus"></i>';
    card.appendChild(collapseBtn);

    container.appendChild(card);

    collapseBtn.addEventListener("click", () => {
      if (description.style.display === "none") {
        description.style.display = "block";
        downloadCount.style.display = "block";
        collapseBtn.innerHTML = '<i class="fas fa-minus"></i>';
      } else {
        description.style.display = "none";
        downloadCount.style.display = "none";
        collapseBtn.innerHTML = '<i class="fas fa-plus"></i>';
      }
    });

    description.style.display = "none";
    downloadCount.style.display = "none";
  });
};

const handleOptionChange = () => {
  const selectElement = document.getElementById("alphabets");
  const selectedAlphabet = selectElement.value.toLowerCase();
  const filteredData = getFilteredItems(selectedAlphabet);
  renderCards(filteredData);
};

const getFilteredItems = (query) =>
  data.filter((item) => item.title.toLowerCase().startsWith(query));

const sortItems = () => {
  const selectElement = document.getElementById("optionsused");
  const selectedOption = selectElement.value;
  const sortedData = getSortedItems(selectedOption);
  renderCards(sortedData);
};

const getSortedItems = (option) => {
  if (option === "most-used") {
    return data.sort((a, b) => b.id - a.id);
  } else if (option === "rare-used") {
    return data.sort((a, b) => a.id - b.id);
  } else {
    return data;
  }
};

const handleSearch = (event) => {
  const searchQuery = event.target.value.toLowerCase();
  const matchingItems = getMatchingItems(searchQuery);
  renderCards(matchingItems);
};

const getMatchingItems = (query) =>
  data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

document
  .getElementById("alphabets")
  .addEventListener("change", handleOptionChange);
document.getElementById("optionsused").addEventListener("change", sortItems);
document
  .querySelector(".search-container input")
  .addEventListener("keyup", handleSearch);

// Initial rendering of cards
renderCards(data);
