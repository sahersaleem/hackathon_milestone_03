var _a;
function addSkill() {
    var skillContainer = document.getElementById("skill-container");
    // Create input div
    var skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-div");
    // Create  input element
    var skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.name = "skillInputList[]";
    skillInput.placeholder = "Add skill";
    skillDiv.appendChild(skillInput);
    skillContainer === null || skillContainer === void 0 ? void 0 : skillContainer.appendChild(skillDiv);
}
function addLanguage() {
    var languageContainer = document.getElementById("language-container");
    var languageDiv = document.createElement("div");
    languageDiv.classList.add("language-div");
    var languageInput = document.createElement("input");
    languageInput.type = "text";
    languageInput.name = "languageList[]";
    languageInput.placeholder = "Add language";
    languageDiv.appendChild(languageInput);
    languageContainer === null || languageContainer === void 0 ? void 0 : languageContainer.appendChild(languageDiv);
}
(_a = document.getElementById("image-upload")) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function (e) {
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
    var date = document.getElementById("date").value;
    var skills = document.getElementById("skills").value;
    var language = document.getElementById("language")
        .value;
    var resumeContent = "\n\n    <div class=\"first-part\">\n     <div class=\"image-div\">\n     <img src=\"".concat((_a = document
        .getElementById("image-preview")) === null || _a === void 0 ? void 0 : _a.getAttribute("src"), "\" alt=\"profile-image\"/>\n     \n     </div>\n     <div class=\"first-div-content\">  \n    \n     <h1>").concat(userName, "</h1>\n     \n    </div>\n<div class=\"second-part\">\n\n<p>").concat(email, "</p>\n<p>").concat(phoneNumber, "</p>\n<p>").concat(linkedinUrl, "</p>\n<p>").concat(address, "</p>\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n");
    var resumeContainer = document.getElementById("resume-container");
    resumeContainer.innerHTML = resumeContent;
    if (resumeContainer) {
        resumeContainer.style.display = "block";
    }
}
