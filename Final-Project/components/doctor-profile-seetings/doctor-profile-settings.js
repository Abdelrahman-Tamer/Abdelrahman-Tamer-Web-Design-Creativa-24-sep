var profileForm = document.getElementById("profileForm");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var displayName = document.getElementById("displayName");
var designation = document.getElementById("designation");
var phoneNumbers = document.getElementById("phoneNumbers");
var emailAddress = document.getElementById("emailAddress");
var knownLanguages = document.getElementById("knownLanguages");
var membershipsContainer = document.getElementById("membershipsContainer");
var addMembershipBtn = document.getElementById("addMembershipBtn");
var membershipIndex = 0;

// Regex patterns
var patterns = {
  firstName: /^[a-zA-Z\u0600-\u06FF\s]{3,50}$/,
  lastName: /^[a-zA-Z\u0600-\u06FF\s]{3,50}$/,
  displayName: /^[a-zA-Z0-9\u0600-\u06FF\s._-]{3,50}$/,
  designation: /^[a-zA-Z\u0600-\u06FF\s]{3,100}$/,
  phoneNumbers: /^01[0-2,5][0-9]{8}$/,
  emailAddress: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  membershipTitle: /^[a-zA-Z0-9\u0600-\u06FF\s._-]{3,100}$/,
};

// Messages
var messages = {
  firstName: "First name must be at least 3 characters (letters only)",
  lastName: "Last name must be at least 3 characters (letters only)",
  displayName:
    "Display name must be at least 3 characters (letters and numbers)",
  designation: "Designation must be at least 3 characters (letters only)",
  phoneNumbers: "Phone number must be exactly 11 digits (e.g., 01012345678)",
  emailAddress: "Please enter a valid email address (e.g., name@example.com)",
  membershipTitle: "Title must be at least 3 characters",
};

function validate(input, pattern, message) {
  var value = input.value.trim();
  var isValid = value && pattern.test(value);
  input.classList.toggle("is-invalid", !isValid);
  input.classList.toggle("is-valid", isValid);
  var feedback = input.nextElementSibling;
  if (feedback && feedback.classList.contains("invalid-feedback")) {
    feedback.textContent = isValid ? "" : message;
  }
  return isValid;
}

[
  firstName,
  lastName,
  displayName,
  designation,
  phoneNumbers,
  emailAddress,
].forEach(function (input) {
  input.addEventListener("input", function () {
    validate(this, patterns[this.id], messages[this.id]);
    console.log(this.value);
  });
});

// Validate known languages
if (knownLanguages) {
  knownLanguages.addEventListener("input", function () {
    var value = this.value.trim();
    var isValid = !!value;
    this.classList.toggle("is-invalid", !isValid);
    var container = this.closest(".tagsinput");
    if (container) container.classList.toggle("border-danger", !isValid);
  });
}

// Add new membership row
addMembershipBtn.addEventListener("click", function (e) {
  e.preventDefault();
  membershipIndex++;
  var newRow = `
    <div class="membership-item mb-3 p-lg-4 border border-1 rounded-4" data-membership-index="${membershipIndex}">
      <div class="row g-3 align-items-end">
        <div class="col-md-5">
          <label class="form-label small">Title <span class="text-danger">*</span></label>
          <input type="text" name="membershipTitle[]" class="form-control membership-title" placeholder="Add Title" />
        </div>
        <div class="col-md-6">
          <label class="form-label small">About Membership</label>
          <input type="text" name="membershipAbout[]" class="form-control membership-about" />
        </div>
        <div class="col-md-1 text-end">
          <button type="button" class="btn btn-link text-danger p-0 text-decoration-none small delete-membership" onclick="deleteMembershipRow(this)">
            Delete
          </button>
        </div>
      </div>
    </div>
  `;
  membershipsContainer.insertAdjacentHTML("beforeend", newRow);
});

// Delete membership row
window.deleteMembershipRow = function (button) {
  var membershipItem = button.closest(".membership-item");
  if (membershipItem) {
    membershipItem.remove();
  }
};

// Form submit
profileForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var isValid = true;
  [
    firstName,
    lastName,
    displayName,
    designation,
    phoneNumbers,
    emailAddress,
  ].forEach(function (input) {
    if (!validate(input, patterns[input.id], messages[input.id]))
      isValid = false;
  });
  if (knownLanguages && !knownLanguages.value.trim()) {
    knownLanguages.classList.add("is-invalid");
    isValid = false;
  }
  if (isValid) {
    var profileData = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      displayName: displayName.value.trim(),
      designation: designation.value.trim(),
      phoneNumbers: phoneNumbers.value.trim(),
      emailAddress: emailAddress.value.trim(),
      knownLanguages: knownLanguages ? knownLanguages.value.trim() : "",
    };
    console.log("Form submitted!", profileData);
    alert("Form submitted successfully!");
  }
});

// Image Upload
var profileImageInput = document.getElementById("profileImageInput");
var uploadNewLink = document.getElementById("uploadNewLink");
var removeImageLink = document.getElementById("removeImageLink");
var previewImage = document.getElementById("previewImage");
var placeholderIcon = document.getElementById("placeholderIcon");
var profileImagePreview = document.getElementById("profileImagePreview");

uploadNewLink?.addEventListener("click", e => {
  e.preventDefault();
  profileImageInput?.click();
});

profileImageInput?.addEventListener("change", e => {
  var file = e.target.files[0];
  var reader = new FileReader();
  if (!file) return;
  reader.onload = ev => {
    previewImage.src = ev.target.result;
    previewImage.style.display = "block";
    placeholderIcon.style.display = "none";
  };
  reader.readAsDataURL(file);
});

removeImageLink?.addEventListener("click", e => {
  e.preventDefault();
  profileImageInput.value = "";
  previewImage.src = "";
  previewImage.style.display = "none";
  placeholderIcon.style.display = "block";
});

