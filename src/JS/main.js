// Home page parallax
let parallaxBg1 = document.getElementById("bg1");
let parallaxBg1Content = document.getElementById("bg1-content");
let scrolled;

window.addEventListener("scroll", function parallaxScrollBg1() {
  scrolled = window.pageYOffset || this.document.documentElement.scrollTop;

  parallaxBg1.style.transform = `translate3d(0, ${scrolled / 3}px, 0)`;
  parallaxBg1Content.style.transform = `translate3d(0, ${scrolled / 6}px, 0)`;
});

// Event triggers when hover on card.
let addCards = document.getElementById(`shop`);
let africa = document.getElementById(`Africa`);
let europe = document.getElementById(`Europe`);
let asia = document.getElementById(`Asia`);
let australia = document.getElementById(`Australia`);
let latin = document.getElementById(`Latin`);
let america = document.getElementById(`America`);
let before = document.getElementById(`beforeCards`);
let search = document.getElementById(`search`);

function activate() {
  addCards.style.transition = `400ms`;

  if (
    africa.addEventListener("mouseover", function () {
      addCards.style.backgroundImage = `url('https://images.pexels.com/photos/5487407/pexels-photo-5487407.jpeg?cs=srgb&dl=pexels-jurie-maree-5487407.jpg&fm=jpg')`;
      addCards.style.backgroundSize = `cover`;
      addCards.style.backgroundPosition = `center`;
      addCards.style.transition = `100ms`;
      before.style.color = `black`;
    })
  );
  if (
    europe.addEventListener("mouseover", function () {
      addCards.style.backgroundImage = `url('https://images.pexels.com/photos/3879160/pexels-photo-3879160.jpeg?cs=srgb&dl=pexels-alex-azabache-3879160.jpg&fm=jpg')`;
      addCards.style.backgroundSize = `cover`;
      addCards.style.backgroundPosition = `center`;
      addCards.style.transition = `100ms`;
      before.style.color = `white`;
    })
  );
  if (
    asia.addEventListener("mouseover", function () {
      addCards.style.backgroundImage = `url('https://images.pexels.com/photos/5205307/pexels-photo-5205307.jpeg?cs=srgb&dl=pexels-ryutaro-tsukata-5205307.jpg&fm=jpg')`;
      addCards.style.backgroundSize = `cover`;
      addCards.style.backgroundPosition = `center`;
      addCards.style.transition = `100ms`;
      before.style.color = `white`;
    })
  );
  if (
    australia.addEventListener("mouseover", function () {
      addCards.style.backgroundImage = `url('https://images.pexels.com/photos/2122408/pexels-photo-2122408.jpeg?cs=srgb&dl=pexels-ethan-brooke-2122408.jpg&fm=jpg')`;
      addCards.style.backgroundSize = `cover`;
      addCards.style.backgroundPosition = `center`;
      addCards.style.transition = `100ms`;
      before.style.color = `white`;
    })
  );
  if (
    latin.addEventListener("mouseover", function () {
      addCards.style.backgroundImage = `url('https://images.pexels.com/photos/8639332/pexels-photo-8639332.jpeg?cs=srgb&dl=pexels-rodnae-productions-8639332.jpg&fm=jpg')`;
      addCards.style.backgroundSize = `cover`;
      addCards.style.backgroundPosition = `center`;
      addCards.style.transition = `100ms`;
      before.style.color = `black`;
    })
  );
  if (
    america.addEventListener("mouseover", function () {
      addCards.style.backgroundImage = `url('https://images.pexels.com/photos/2360574/pexels-photo-2360574.jpeg?cs=srgb&dl=pexels-nicolas-poupart-2360574.jpg&fm=jpg')`;
      addCards.style.backgroundSize = `cover`;
      addCards.style.backgroundPosition = `center`;
      addCards.style.transition = `100ms`;
      before.style.color = `black`;
    })
  );
}

// Currency change
let currency = document.getElementById(`cash`);
let cAfrica = document.getElementById(`priceAfrica`);
let cEurope = document.getElementById(`priceEurope`);
let cAsia = document.getElementById(`priceAsia`);
let cAustralia = document.getElementById(`priceAustralia`);
let cLatin = document.getElementById(`priceLatinAmerica`);
let cAmerica = document.getElementById(`priceAmerica`);

function cur() {
  currency.addEventListener(`click`, () => {
    if (currency.value === `GBP`) {
      cAfrica.innerHTML = `£4,196`;
      cEurope.innerHTML = `£3,916`;
      cAsia.innerHTML = `£3,182`;
      cAustralia.innerHTML = `£10,472`;
      cLatin.innerHTML = `£3,515`;
      cAmerica.innerHTML = `£6,787`;
    } else if (currency.value === `USD`) {
      cAfrica.innerHTML = `$5,715 USD`;
      cEurope.innerHTML = `$5,334 USD`;
      cAsia.innerHTML = `$4,334 USD`;
      cAustralia.innerHTML = `$14,265 USD`;
      cLatin.innerHTML = `$4,788 USD`;
      cAmerica.innerHTML = `$9,245 USD`;
    } else if (currency.value === `EUR`) {
      cAfrica.innerHTML = `€4,853`;
      cEurope.innerHTML = `€4,529`;
      cAsia.innerHTML = `€3,680`;
      cAustralia.innerHTML = `€12,113`;
      cLatin.innerHTML = `€4,066`;
      cAmerica.innerHTML = `€7,851`;
    } else if (currency.value === `AUD`) {
      cAfrica.innerHTML = `$7,810 AUD`;
      cEurope.innerHTML = `$7,289 AUD`;
      cAsia.innerHTML = `$5,923 AUD`;
      cAustralia.innerHTML = `$19,493 AUD`;
      cLatin.innerHTML = `$6,543 AUD`;
      cAmerica.innerHTML = `$12,633 AUD`;
    } else if (currency.value === `CAD`) {
      cAfrica.innerHTML = `$7,248 CAD`;
      cEurope.innerHTML = `$6,764 CAD`;
      cAsia.innerHTML = `$5,496 CAD`;
      cAustralia.innerHTML = `$18,089 CAD`;
      cLatin.innerHTML = `$6,071 CAD`;
      cAmerica.innerHTML = `$11,724 CAD`;
    }
    return currency;
  });
}
console.log(cur());
