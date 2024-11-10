function addSkill() {
  const skillContainer = document.getElementById("skill-container");

  // Create input div
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-div");

  // Create  input element
  const skillInput = document.createElement("input");
  skillInput.type = "text";
  skillInput.name = "skillInputList[]";
  skillInput.placeholder = "Add skill";

  skillDiv.appendChild(skillInput);

  skillContainer?.appendChild(skillDiv);
}

function addLanguage() {
  const languageContainer = document.getElementById("language-container");
  const languageDiv = document.createElement("div");
  languageDiv.classList.add("language-div");

  const languageInput = document.createElement("input");
  languageInput.type = "text";
  languageInput.name = "languageList[]";
  languageInput.placeholder = "Add language";

  languageDiv.appendChild(languageInput);
  languageContainer?.appendChild(languageDiv);
}

document.getElementById("image-upload")?.addEventListener('change', (e) => {
  const fileInput = e.target as HTMLInputElement;

  if (fileInput.files && fileInput.files[0]) {
    const files = fileInput.files[0];

    const previewImage = document.getElementById(
      "image-preview"
    ) as HTMLImageElement;

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      previewImage.src = e.target?.result as string;
      previewImage.style.display = "block";
    };
    fileReader.readAsDataURL(files);
  }
});

function generateResume() {
  const userName = (document.getElementById("userName") as HTMLInputElement)
    .value;
  console.log(userName);

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phoneNumber = (document.getElementById("number") as HTMLInputElement)
    .value;
  const linkedinUrl = (document.getElementById("address") as HTMLInputElement)
    .value;
  const address = (
    document.getElementById("linkedinProfile") as HTMLInputElement
  ).value;
  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement)
    .value;
  const companyName = (
    document.getElementById("companyName") as HTMLInputElement
  ).value;
  const startDate = (document.getElementById("startDate") as HTMLInputElement)
    .value;
  const enddate = (document.getElementById("endDate") as HTMLInputElement)
    .value;
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const field = (document.getElementById("field") as HTMLInputElement).value;
  const institutionName = (
    document.getElementById("institutionName") as HTMLInputElement
  ).value;
  const date = (document.getElementById("date") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;
  const language = (document.getElementById("language") as HTMLInputElement)
    .value;

  const resumeContent = `

    <div class="first-part">
     <div class="image-div">
     <img src="${document
       .getElementById("image-preview")
       ?.getAttribute("src")}" alt="profile-image"/>
     
     </div>
     <div class="first-div-content">  
    
     <h1>${userName}</h1>
     
    </div>
<div class="second-part">

<p>${email}</p>
<p>${phoneNumber}</p>
<p>${linkedinUrl}</p>
<p>${address}</p>




</div>



























 









`;

  const resumeContainer = document.getElementById(
    "resume-container"
  ) as HTMLDivElement;

  resumeContainer.innerHTML = resumeContent;

  if (resumeContainer) {
    resumeContainer.style.display = "block";
  }
}
