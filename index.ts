document.getElementById("image-upload")?.addEventListener("change", (e) => {
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
  const professionalSummary = (
    document.getElementById("professional-summary") as HTMLTextAreaElement
  ).value;

  const date = (document.getElementById("date") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement)
    .value;

  //   const skiilsDiv = document.getElementById('skillsDiv') as HTMLDivElement

  // const skillsArray = skills.split(',').map((skill)=>skill.trim())
  //   const skillsUl = document.createElement('skill-ul') as HTMLUListElement

  //  skillsArray.forEach((skill)=>{
  //       console.log(skill)
  //     const list = document.createElement('li') as HTMLLIElement
  //        list.innerText=skill
  //        skillsUl.appendChild(list)

  //     })
  //     skiilsDiv?.appendChild(skillsUl)

  const language = (document.getElementById("language") as HTMLTextAreaElement)
    .value;
  const bio = (document.getElementById("bio") as HTMLInputElement).value;
  const resumeContent = `   
    <div class="first-part">
  <div class="image-div">
    <img src="${document
      .getElementById("image-preview")
      ?.getAttribute("src")}" alt="profile-image"/>
    </div>
      <div>
          <h1>${userName}</h2>
            <p>${bio}</p>
             </div>
           </div>

<div class="second-part">
<div class="first-section">

<div><h1>Contact information</h1>
  <p>${email}</p>
 <p>${phoneNumber}</p>
  <p>${linkedinUrl}</p>
  <p>${address}</p>
</div>

<div>
<h1>Education</h1>
<p><span>Degree:</span> ${degree}</p>
<p><span><Field:</span>${field}</p>
<p><span> Institution:</span> ${institutionName}</p>
<p><span>Date:</span>${date}</p>
</div>

<div>
<h1>Languages</h1>
<p><p>${language}</p></p>
</div>

<div>
<h1>Skills</h1>
<p>${skills}</p>
</div>


</div>

<div class="second-section">
<div class="professionalSummary">
<h1>Professional Summary</h1>
<p><p>${professionalSummary}</p></p>
</div>


<div>
<h1>Work Experience</h1>
<p><span>Job title:</span>${jobTitle}</p>
<p><span>Comany name:</span>${companyName}</p>
<p><span>Start date:</span>${startDate}</p>
<p><span>End date:</span>${enddate}</p>
</div>
</div>
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
