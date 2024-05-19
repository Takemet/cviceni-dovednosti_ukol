

const updateSkill = (ID, úroveň) => {
    const progress = document.querySelector(`#${ID} .skill__progress`); 
    const value = document.querySelector(`#${ID} .skill__value`);
    const bar = document.querySelector(`#${ID} .skill__bar`);
    progress.style.height = `${úroveň}%`;
    progress.style.width = `${úroveň}%`;
    value.textContent = `${úroveň} / 100`;
    if (úroveň < 50) {value.style.color = "red";} else {value.style.color = "green";};
   
  };

  
  const HTML = prompt("Uveďte svou úroveň znalostí v HTML od 0 (nejnižší úroveň) do 100 (nejvyšší úroveň). Napište celé číslo.");
  const CSS = prompt("Uveďte svou úroveň znalostí v CSS od 0 (nejnižší úroveň) do 100 (nejvyšší úroveň). Napište celé číslo.");
  const JS = prompt("Uveďte svou úroveň znalostí v JavaScriptu od 0 (nejnižší úroveň) do 100 (nejvyšší úroveň). Napište celé číslo.");
 
updateSkill('skill1', HTML);
updateSkill('skill2', CSS);
updateSkill('skill3', JS);

