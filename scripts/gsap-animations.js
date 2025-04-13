// Floating Tech Tags
const techWords = [
  "HTML", "CSS", "JavaScript", "React", 
  "Node.js", "Express", "MongoDB", "UI/UX",
  "TypeScript", "Git", "REST API", "Next.js",
  "GraphQL", "Python", "Django", "Vue",
  "SASS", "Redux", "Firebase", "AWS"
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".tech-tags");
  
  // Clear any existing tags
  container.innerHTML = '';
  
  // Create tags with better visibility
  for (let i = 0; i < 25; i++) { // Increased number of tags
    const word = techWords[Math.floor(Math.random() * techWords.length)];
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = word;
    
    // Random positioning with better distribution
    const left = Math.random() * 85 + 5; // Keep away from edges
    const top = Math.random() * 85 + 5;
    const delay = Math.random() * 5;
    const duration = 15 + Math.random() * 20;
    const size = 1.2 + Math.random() * 1.8; // Larger size range
    const opacity = 0.15 + Math.random() * 0.2; // Higher base opacity
    
    tag.style.left = `${left}%`;
    tag.style.top = `${top}%`;
    tag.style.animationDelay = `${delay}s`;
    tag.style.animationDuration = `${duration}s`;
    tag.style.fontSize = `${size}rem`;
    tag.style.opacity = opacity;
    tag.style.color = `rgba(30, 41, 59, ${0.15 + Math.random() * 0.15})`;
    
    // Add slight rotation for variety
    tag.style.transform = `rotate(${Math.random() * 15 - 7.5}deg)`;
    
    container.appendChild(tag);
  }
});