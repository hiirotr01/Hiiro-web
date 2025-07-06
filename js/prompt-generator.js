const characters = {
  "Rapi (Nikke)": "Rapi from Nikke, silver hair, combat uniform, rifle, serious expression",
  "Alice (Nikke)": "Alice from Nikke, blue-white outfit, sniper rifle, shy expression",
  "Modernia (Nikke)": "Modernia from Nikke, black bodysuit, machine gun, dark wings",
  "Belfast (Azur Lane)": "Belfast from Azur Lane, silver hair, elegant maid outfit, large breasts",
  "Enterprise (Azur Lane)": "Enterprise from Azur Lane, white uniform, eagle motif, cold expression",
  "Z23 (Azur Lane)": "Z23 from Azur Lane, military outfit, brown hair, confident smile",
  "Hoshino (Blue Archive)": "Hoshino from Blue Archive, pink hair, school uniform, smiling",
  "Yuuka (Blue Archive)": "Yuuka from Blue Archive, glasses, blazer, intelligent look",
  "Arona (Blue Archive)": "Arona from Blue Archive, small girl, blue theme, AI assistant",
  "Zero Two (Darling in the FranXX)": "Zero Two, pink hair, horns, red bodysuit, anime style",
  "Asuka Langley (Evangelion)": "Asuka Langley, red plugsuit, twin tails, confident look",
  "Shinobu (Demon Slayer)": "Shinobu from Kimetsu no Yaiba, butterfly motif, gentle expression",
  "Makima (Chainsaw Man)": "Makima from Chainsaw Man, red hair, black suit, dominating aura",
  "Raiden Shogun (Genshin)": "Raiden Shogun from Genshin Impact, purple outfit, electric powers, stoic",
  "Kokomi (Genshin)": "Sangonomiya Kokomi from Genshin Impact, aquatic design, pastel colors",
  "Kafka (Honkai Star Rail)": "Kafka from HSR, red eyes, black coat, alluring expression"
};

const styles = {
  "default": "",
  "sexy": ", large breasts, seductive, revealing outfit, soft lighting",
  "loli": ", small body, cute, big eyes, youthful, pastel colors",
  "school": ", school uniform, indoors, classroom background",
  "maid": ", maid outfit, frilly dress, headband, serving tea",
  "warrior": ", armor, sword or gun, action pose, battlefield",
  "nsfw": ", nude, soft lighting, detailed skin, erotic pose, high quality"
};

function generatePrompt() {
  const charSelect = document.getElementById("characterSelect");
  const styleSelect = document.getElementById("styleSelect");
  const result = document.getElementById("resultPrompt");
  const img = document.getElementById("charImage");

  const basePrompt = characters[charSelect.value] || "";
  const stylePrompt = styles[styleSelect.value] || "";
  result.value = "masterpiece, best quality, " + basePrompt + stylePrompt;

  const nameKey = charSelect.value.split(" ")[0].toLowerCase();
  const imagePath = "assets/" + nameKey + ".jpg";
  img.src = imagePath;
  img.style.display = "block";
}

function copyPrompt() {
  const result = document.getElementById("resultPrompt");
  result.select();
  document.execCommand("copy");
  alert("📋 Đã sao chép prompt!");
}

window.onload = () => {
  const charSelect = document.getElementById("characterSelect");
  for (const name in characters) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    charSelect.appendChild(option);
  }
};