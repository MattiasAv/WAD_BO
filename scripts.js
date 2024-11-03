function dropdownClicked() {
    let dropdown = document.getElementsByClassName("dropdown_content")[0];
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}