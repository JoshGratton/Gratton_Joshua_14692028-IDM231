/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
function getZodiac(month, day) {
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces';
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) return 'Gemini';
  if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) return 'Libra';
  if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  return null;
}


const signsData = [
  { name: 'Aries', image: 'blueberry.png', sound: 'bubblepop.mp3', color: '#e74c3c' },
  { name: 'Taurus', image: 'browniebatter.png', sound: 'comedicdrum.mp3', color: '#795548' },
  { name: 'Gemini', image: 'celebrationcookie.png', sound: 'familystore.mp3', color: '#f1c40f' },
  { name: 'Cancer', image: 'milkchocolate.png', sound: 'gameover.mp3', color: '#95a5a6' },
  { name: 'Leo', image: 'oreocheesecake.png', sound: 'gladpiano.mp3', color: '#e67e22' },
  { name: 'Virgo', image: 'oreocookie.png', sound: 'happy.mp3', color: '#2ecc71' },
  { name: 'Libra', image: 'oreosandwich.png', sound: 'levelup.mp3', color: '#9b59b6' },
  { name: 'Scorpio', image: 'smoresbrownie.png', sound: 'organ.mp3', color: '#34495e' },
  { name: 'Sagittarius', image: 'snookerdoodle.png', sound: 'pipe.mp3', color: '#d35400' },
  { name: 'Capricorn', image: 'sugarcookie.png', sound: 'popwow.mp3', color: '#16a085' },
  { name: 'Aquarius', image: 'weddingcake.png', sound: 'trombone.mp3', color: '#2980b9' },
  { name: 'Pisces', image: 'wonkacookie.png', sound: 'ukulele.mp3', color: '#8e44ad' }
];


function updatePage(sign) {
  if (!sign) return;

  
  document.body.style.backgroundColor = sign.color;

  
  const infoDisplay = document.getElementById('zodiacstuff');
  infoDisplay.innerHTML = `<h2>You are a ${sign.name}!</h2>`;

  
  const audio = new Audio(`sounds/${sign.sound}`);
  audio.play().catch(err => console.log("Click the page first to enable audio."));
}

// Make sure html is ready (ask emma for help)
document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.getElementById('birthday');
  const cookieImages = document.querySelectorAll('.image-grid img');

  
  dateInput.addEventListener('change', function() {
    const selectedDate = new Date(this.value);
    const month = selectedDate.getUTCMonth() + 1; 
    const day = selectedDate.getUTCDate();

    const signName = getZodiac(month, day);
    const sign = signsData.find(item => item.name === signName);
    
    updatePage(sign);
  });

  // cookie is clicked
  cookieImages.forEach(img => {
    img.addEventListener('click', function() {

      const filename = this.src.split('/').pop();
      
    
      const sign = signsData.find(item => item.image === filename);
      
      updatePage(sign);
    });
  });
});