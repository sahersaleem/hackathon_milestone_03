var _a;
(_a = document.getElementById("image-upload")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function (e) {
    var fileInput = e.target;
    if (fileInput.files && fileInput.files[0]) {
        var files = fileInput.files[0];
        var previewImage_1 = document.getElementById("image-preview");
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            var _a;
            previewImage_1.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            previewImage_1.style.display = "block";
        };
        fileReader.readAsDataURL(files);
    }
});
function generateResume() {
    var _a;
    var userName = document.getElementById("userName")
        .value;
    console.log(userName);
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number")
        .value;
    var linkedinUrl = document.getElementById("address")
        .value;
    var address = document.getElementById("linkedinProfile").value;
    var jobTitle = document.getElementById("jobTitle")
        .value;
    var companyName = document.getElementById("companyName").value;
    var startDate = document.getElementById("startDate")
        .value;
    var enddate = document.getElementById("endDate")
        .value;
    var degree = document.getElementById("degree").value;
    var field = document.getElementById("field").value;
    var institutionName = document.getElementById("institutionName").value;
    var professionalSummary = document.getElementById("professional-summary").value;
    var date = document.getElementById("date").value;
    var skills = document.getElementById("skills")
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
    var language = document.getElementById("language")
        .value;
    var bio = document.getElementById("bio").value;
    var resumeContent = "   \n    <div class=\"first-part\">\n  <div class=\"image-div\">\n    <img src=\"".concat((_a = document
        .getElementById("image-preview")) === null || _a === void 0 ? void 0 : _a.getAttribute("src"), "\" alt=\"profile-image\"/>\n    </div>\n      <div>\n          <h1>").concat(userName, "</h2>\n            <p>").concat(bio, "</p>\n             </div>\n           </div>\n\n<div class=\"second-part\">\n<div class=\"first-section\">\n\n<div><h1>Contact information</h1>\n  <p>").concat(email, "</p>\n <p>").concat(phoneNumber, "</p>\n  <p>").concat(linkedinUrl, "</p>\n  <p>").concat(address, "</p>\n</div>\n\n<div>\n<h1>Education</h1>\n<p><span>Degree:</span> ").concat(degree, "</p>\n<p><span><Field:</span>").concat(field, "</p>\n<p><span> Institution:</span> ").concat(institutionName, "</p>\n<p><span>Date:</span>").concat(date, "</p>\n</div>\n\n<div>\n<h1>Languages</h1>\n<p><p>").concat(language, "</p></p>\n</div>\n\n<div>\n<h1>Skills</h1>\n<p>").concat(skills, "</p>\n</div>\n\n\n</div>\n\n<div class=\"second-section\">\n<div class=\"professionalSummary\">\n<h1>Professional Summary</h1>\n<p><p>").concat(professionalSummary, "</p></p>\n</div>\n\n\n<div>\n<h1>Work Experience</h1>\n<p><span>Job title:</span>").concat(jobTitle, "</p>\n<p><span>Comany name:</span>").concat(companyName, "</p>\n<p><span>Start date:</span>").concat(startDate, "</p>\n<p><span>End date:</span>").concat(enddate, "</p>\n</div>\n</div>\n</div>\n\n");
    var resumeContainer = document.getElementById("resume-container");
    resumeContainer.innerHTML = resumeContent;
    if (resumeContainer) {
        resumeContainer.style.display = "block";
    }
}
function printPdf() {
    window.print();
}
