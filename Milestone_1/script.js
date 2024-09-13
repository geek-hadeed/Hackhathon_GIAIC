var _a, _b, _c;
var educationData = [
    {
        diploma: "Matriculation",
        institution: "EGSS",
        year: "2022",
    },
    {
        diploma: "Intermediate",
        institution: "GDBC johar",
        year: "",
    },
];
var skillsData = ["HTML", "CSS", "JavaScript", "TypeScript"];
var workExperienceData = [
    {
        position: "",
        company: "",
        years: "",
        description: "Not Yet",
    },
];
function populateEducation() {
    var _a;
    var educationSection = (_a = document
        .getElementById("education-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card-grid");
    if (educationSection) {
        educationData.forEach(function (edu) {
            var educationCard = document.createElement("div");
            educationCard.classList.add("card");
            educationCard.classList.add("education-card");
            educationCard.innerHTML = "\n                    <h3 class=\"card-title\">".concat(edu.diploma, "</h3>\n                    <p class=\"card-subtitle\">").concat(edu.institution, "</p>\n                    <p class=\"card-details\">").concat(edu.year, "</p>\n                ");
            educationSection.appendChild(educationCard);
        });
    }
}
function populateSkills() {
    var _a;
    var skillsSection = (_a = document
        .getElementById("skills-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".skill-list");
    if (skillsSection) {
        skillsData.forEach(function (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    }
}
function populateWorkExperience() {
    var _a;
    var workExperienceSection = (_a = document
        .getElementById("work-experience-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card-grid");
    if (workExperienceSection) {
        workExperienceData.forEach(function (work) {
            var workCard = document.createElement("div");
            workCard.classList.add("card");
            workCard.classList.add("work-experience-card");
            workCard.innerHTML = "\n                    <h3 class=\"card-title\">".concat(work.position, "</h3>\n                    <p class=\"card-subtitle\">").concat(work.company, "</p>\n                    <p class=\"card-details\">").concat(work.years, "</p>\n                    <p class=\"card-details\">").concat(work.description, "</p>\n                ");
            workExperienceSection.appendChild(workCard);
        });
    }
}
function activateTab(tabId) {
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) { return section.classList.remove("active"); });
    var activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add("active");
    }
}
(_a = document
    .getElementById("education-tab")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return activateTab("education-content"); });
(_b = document
    .getElementById("skills-tab")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return activateTab("skills-content"); });
(_c = document
    .getElementById("experience-tab")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return activateTab("work-experience-content"); });
populateEducation();
populateSkills();
populateWorkExperience();
