

// BUTTONS

const buttons=document.querySelectorAll("button");

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{



if(btn.innerText==="Shop Now"){
showSuccess("Opening Shop");
}

if(btn.innerText==="Explore"){
showSuccess("Exploring Products");
}

});

});

// CARD HOVER EFFECT

const cards=document.querySelectorAll(
".feature-card,.category-card,.product-card"
);

cards.forEach(card=>{

card.addEventListener("mousemove",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

const readBtn = document.getElementById("readBtn");
const moreText = document.getElementById("moreText");

readBtn.addEventListener("click", () => {

    if(moreText.style.display === "none"){
        moreText.style.display = "block";
        readBtn.innerHTML = "Read Less";
    }
    else{
        moreText.style.display = "none";
        readBtn.innerHTML = "Read More";
    }

});


const storyBtn = document.querySelector(".story-btn");
const missionBtn = document.querySelector(".mission-btn");

const storyText = document.getElementById("storyText");
const missionText = document.getElementById("missionText");

storyBtn.addEventListener("click",()=>{

if(storyText.style.display==="block"){
storyText.style.display="none";
}
else{
storyText.style.display="block";
missionText.style.display="none";
}

});

missionBtn.addEventListener("click",()=>{

if(missionText.style.display==="block"){
missionText.style.display="none";
}
else{
missionText.style.display="block";
storyText.style.display="none";
}

});

function addCustomer() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

if(name === "" || email === "" || phone === ""){
alert("Fill all fields");
return;
}

let table =
document.querySelector("#customerTable tbody");

let row = table.insertRow();

row.insertCell(0).innerHTML =
table.rows.length;

row.insertCell(1).innerHTML = name;
row.insertCell(2).innerHTML = email;
row.insertCell(3).innerHTML = phone;

row.insertCell(4).innerHTML =
`
<button onclick="editRow(this)">Edit</button>
<button onclick="deleteRow(this)">Delete</button>
`;

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";
}

function deleteRow(btn){
btn.parentElement.parentElement.remove();
}

function editRow(btn){

let row = btn.parentElement.parentElement;

document.getElementById("name").value =
row.cells[1].innerHTML;

document.getElementById("email").value =
row.cells[2].innerHTML;

document.getElementById("phone").value =
row.cells[3].innerHTML;

row.remove();
}

function searchProducts(){

let input =
document.getElementById("search")
.value
.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

let text =
card.innerText.toLowerCase();

if(text.includes(input)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}

function viewDetails(product){

alert(
"Product Details\n\n" +
product +
"\n\nPremium YSL luxury product crafted with elegance and quality."
);

}

// HERO BUTTONS

document.getElementById("addBtn").addEventListener("click", () => {

    document.querySelector(".form-section")
    .scrollIntoView({
        behavior:"smooth"
    });

});


document.getElementById("viewBtn").addEventListener("click", () => {

    document.querySelector(".table-section")
    .scrollIntoView({
        behavior:"smooth"
    });

});


document.getElementById("reportBtn").addEventListener("click", () => {

    showPopup(
        "Report Generated",
        "Customer report generated successfully."
    );

});


document.getElementById("exportBtn").addEventListener("click", () => {

    showPopup(
        "Export Complete",
        "Customer data exported successfully."
    );

});


document.getElementById("printBtn").addEventListener("click", () => {

    window.print();

});


document.getElementById("refreshBtn").addEventListener("click", () => {

    location.reload();

});


// CUSTOMER FORM

const customerForm = document.getElementById("customerForm");
const tableBody = document.getElementById("tableBody");

let customerID = 2;

customerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const product =
    document.getElementById("product").value;

    const quantity =
    document.getElementById("quantity").value;

    const price =
    document.getElementById("price").value;

    const address =
    document.getElementById("address").value;

    const row =
    document.createElement("tr");

    row.innerHTML = `

    <td>${customerID}</td>

    <td>${name}</td>

    <td>${email}</td>

    <td>${phone}</td>

    <td>${product}</td>

    <td>${quantity}</td>

    <td>$${price}</td>

    <td>${address}</td>

    <td>

        <button
        class="edit-btn"
        onclick="editCustomer(this)">
        Edit
        </button>

        <button
        class="delete-btn"
        onclick="deleteCustomer(this)">
        Delete
        </button>

        <button
        class="msg-btn"
        onclick="messageCustomer()">
        Message
        </button>

    </td>

    `;

    tableBody.appendChild(row);

    customerID++;

    customerForm.reset();

    showPopup(
        "Success",
        "Customer added successfully."
    );

});


// EDIT CUSTOMER

function editCustomer(button){

    const row =
    button.parentElement.parentElement;

    const currentName =
    row.cells[1].innerText;

    const newName =
    prompt(
        "Update customer name:",
        currentName
    );

    if(newName && newName.trim() !== ""){

        row.cells[1].innerText =
        newName;

        showPopup(
            "Updated",
            "Customer updated successfully."
        );

    }

}


// DELETE CUSTOMER

function deleteCustomer(button){

    const row =
    button.parentElement.parentElement;

    row.remove();

    showPopup(
        "Deleted",
        "Customer deleted successfully."
    );

}


// MESSAGE CUSTOMER

function messageCustomer(){

    showPopup(
        "Message Sent",
        "Customer message sent successfully."
    );

}


// SEARCH

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const filter =
    this.value.toLowerCase();

    const rows =
    tableBody.getElementsByTagName("tr");

    for(let i = 0; i < rows.length; i++){

        const customerName =
        rows[i]
        .getElementsByTagName("td")[1];

        if(customerName){

            const text =
            customerName.textContent
            || customerName.innerText;

            if(
                text.toLowerCase()
                .indexOf(filter) > -1
            ){

                rows[i].style.display = "";

            }else{

                rows[i].style.display = "none";

            }

        }

    }

});


// WELCOME POPUP

window.onload = function(){

    setTimeout(() => {

        showPopup(
            "Welcome",
            "Welcome to YSL Customer Database Management System"
        );

    }, 800);

};

// CONTACT FORM

const contactForm =
document.getElementById("contactForm");

const successPopup =
document.getElementById("successPopup");

const okBtn =
document.getElementById("okBtn");


// SHOW POPUP

function showPopup(){

    successPopup.style.display = "flex";

}


// CLOSE POPUP

function closePopup(){

    successPopup.style.display = "none";

}


okBtn.addEventListener("click", closePopup);


// SUBMIT FORM

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    showPopup();

    contactForm.reset();

});


// CLOSE POPUP WHEN CLICKING OUTSIDE

window.addEventListener("click", function(e){

    if(e.target === successPopup){

        closePopup();

    }

});


// SOCIAL MEDIA BUTTONS

const socialButtons =
document.querySelectorAll(".social-buttons button");

socialButtons.forEach(button => {

    button.addEventListener("click", function(){

        const platform =
        this.innerText;

        document.querySelector(
        ".success-box h2"
        ).innerText = platform;

        document.querySelector(
        ".success-box p"
        ).innerText =
        "Opening " + platform +
        " page...";

        showPopup();

    });

});

function toggleTheme(){
document.body.classList.toggle("light");

localStorage.setItem("theme",
document.body.classList.contains("light") ? "light" : "dark"
);
}

window.onload=function(){
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
}
}

        
        // Labada meeloodba waxay noqdeen "cart-btn" oo xariiq leh
        let cartBtn = document.getElementById("cart-btn");

        if (cartBtn) {
            cartBtn.addEventListener("click", function() {
                // 1. Beddel qoraalka
                cartBtn.textContent = "Added to Cart ✓";

                // 2. Ku dar class-ka isbeddelka midabka
                cartBtn.classList.add("added");

                // 3. Xannib badhanka
                cartBtn.disabled = true;
            });
        }

        // =========================
// TAB SWITCH
// =========================
function switchTab(tab) {
document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

if (tab === "login") {
document.getElementById("login").classList.add("active");
document.querySelectorAll(".tab")[0].classList.add("active");
} else {
document.getElementById("register").classList.add("active");
document.querySelectorAll(".tab")[1].classList.add("active");
}
}

// =========================
// SHOW / HIDE PASSWORD
// =========================
function togglePass(id, el) {
let input = document.getElementById(id);

if (input.type === "password") {
input.type = "text";
el.textContent = "🙈";
} else {
input.type = "password";
el.textContent = "👁️";
}
}

// =========================
// VALIDATION FUNCTIONS
// =========================

// email validation
function validEmail(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// phone validation (7–15 digits)
function validPhone(phone) {
return /^[0-9]{7,15}$/.test(phone);
}

// strong password:
// 8+ chars, uppercase, lowercase, number
function strongPass(pass) {
return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass);
}

// =========================
// CLEAR FORM FUNCTION
// =========================
function clearForm(formId) {
let form = document.getElementById(formId);

// clear inputs
form.querySelectorAll("input").forEach(input => {
input.value = "";

// reset password fields back to hidden
if (input.type === "text" && input.getAttribute("type-original") === "password") {
input.type = "password";
}
});

// reset show/hide text
form.querySelectorAll(".pass-wrapper span").forEach(span => {
span.textContent = "👁️";
});

// clear error
let error = form.querySelector(".error");
if (error) {
error.textContent = "";
error.style.color = "#ff4d4d";
}
}

// =========================
// REGISTER FUNCTION
// =========================
function register() {

let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let pass = document.getElementById("pass").value;
let cpass = document.getElementById("cpass").value;

let err = document.getElementById("regError");

// validation
if (!validEmail(email)) {
err.textContent = "Invalid email format";
return;
}

if (!validPhone(phone)) {
err.textContent = "Invalid phone number";
return;
}

if (!strongPass(pass)) {
err.textContent = "Password must be 8+ chars, include uppercase, lowercase & number";
return;
}

if (pass !== cpass) {
err.textContent = "Passwords do not match";
return;
}

// success
err.style.color = "lightgreen";
err.textContent = "Account created successfully!";

// clear + switch after delay
setTimeout(() => {
clearForm("register");
switchTab("login");
}, 1200);
}

// =========================
// LOGIN FUNCTION
// =========================


function login() {

let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;
let err = document.getElementById("loginError");

if (user === "" || pass === "") {
err.textContent = "Fill all fields";
return;
}

// ✅ NEW: strong password check added here
if (!strongPass(pass)) {
err.textContent = "Password is not strong enough (8+ chars, uppercase, lowercase, number)";
return;
}

// success
err.style.color = "lightgreen";
err.textContent = "Login successful!";

setTimeout(() => {
clearForm("login");
}, 1000);
}