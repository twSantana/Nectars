function switchForm(formId) {
    const panels = document.querySelectorAll(".form-panel");
    panels.forEach(panel => panel.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}