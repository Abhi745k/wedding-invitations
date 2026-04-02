// Create starfield animation
function createStarfield() {
  const starfield = document.getElementById('starfield');
  const starCount = 100;
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starfield.appendChild(star);
  }
}

// Button click handler
const startBtn = document.getElementById('startBtn');
const curtain = document.getElementById('curtain');
const bgMusic = document.getElementById('bg-music');
bgMusic.src = "Bismillah Tere Naam Se Shuru Azaan 128 Kbps.mp3";

startBtn.addEventListener('click', () => {
  // Play music
  if (bgMusic) {
    bgMusic.currentTime = 0;
    bgMusic.play().catch(err => {
      console.log('Audio blocked:', err);
    });
  }
  
  // Slide curtain up
  curtain.classList.add('slide-up');
  
  // Add effects
  createConfetti();
  createFloatingHearts();
  
  // Remove curtain from DOM after animation
  setTimeout(() => {
    curtain.style.display = 'none';
  }, 1200);
});

// Photo card reveal game (only for non-placeholder cards)
const photoCards = document.querySelectorAll('.photo-card:not(.placeholder)');

photoCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.add('revealed');
  });
});

// Initialize starfield on page load
window.addEventListener('DOMContentLoaded', () => {
  createStarfield();
});

// ===== SPECIAL EFFECTS =====

// Confetti Animation Function
function createConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  const colors = ['#ff6b9d', '#c44569', '#ffb3d9', '#ff9671', '#ffd5e5'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 0.5 + 's';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = confetti.style.width;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confettiContainer.appendChild(confetti);
  }
  
  // Remove confetti after animation
  setTimeout(() => {
    confettiContainer.innerHTML = '';
  }, 3500);
}

// Floating Hearts Function
function createFloatingHearts() {
  const heartsContainer = document.getElementById('hearts-container');
  const hearts = ['❤️', '💝', '💖', '💗'];
  
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => heart.remove(), 6000);
  }, 800);
}

// Fireworks Function
function createFireworks() {
  const fireworksContainer = document.querySelector('.fireworks-container');
  const colors = ['#ff6b9d', '#ffb3d9', '#c44569', '#ff9671', '#ffd5e5'];
  
  for (let i = 0; i < 30; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = '50%';
    firework.style.top = '50%';
    firework.style.width = firework.style.height = Math.random() * 10 + 5 + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const angle = (i / 30) * Math.PI * 2;
    const distance = 200;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    firework.style.setProperty('--tx', tx + 'px');
    firework.style.setProperty('--ty', ty + 'px');
    
    fireworksContainer.appendChild(firework);
    
    setTimeout(() => firework.remove(), 1500);
  }
}

// Blessing Button
const blessingBtn = document.getElementById('blessingBtn');
const midnightDiv = document.getElementById('midnight-surprise');

blessingBtn.addEventListener('click', () => {
  midnightDiv.style.display = 'flex';
  createFireworks();
  createConfetti();
  
  // Hide after 3 seconds
  setTimeout(() => {
    midnightDiv.style.display = 'none';
  }, 3000);
});

// Initialize all effects
window.addEventListener('DOMContentLoaded', () => {
  createStarfield();
  createFloatingHearts();
  // Midnight check removed - now uses button instead
});