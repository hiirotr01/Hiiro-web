
const characters = {
  "Rapi (Nikke)": "Rapi from Nikke, silver hair, combat uniform, rifle, serious expression",
  "Alice (Nikke)": "Alice from Nikke, blue-white outfit, sniper rifle, shy expression",
  "Belfast (Azur Lane)": "Belfast from Azur Lane, silver hair, elegant maid outfit, large breasts",
  "Scarlet (Nikke)": "Scarlet from Nikke, red long hair, skin-tight suit, seductive pose",
  "Zero Two (Darling in the FranXX)": "Zero Two, pink hair, horns, red bodysuit, anime style",
  "Asuka Langley (Evangelion)": "Asuka Langley, red plugsuit, twin tails, confident look",
  "Hoshino (Blue Archive)": "Hoshino from Blue Archive, pink hair, school uniform, smiling",
  "G11 (Girls Frontline)": "G11 from Girls Frontline, messy hair, oversized jacket, sleepy look"
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

  const basePrompt = characters[charSelect.value] || "";
  const stylePrompt = styles[styleSelect.value] || "";

  result.value = "masterpiece, best quality, " + basePrompt + stylePrompt;
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
