const userList = document.getElementById("userList");
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
function displayUsers(users) {
  userList.innerHTML = users
    .map(
      (user) => `
        <div class="user-card">
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <img src="https://via.placeholder.com/100" alt="${user.name}" />
        </div>
    `,
    )
    .join("");
}
fetchUsers();
const imageUpload = document.getElementById("imageUpload");
imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Uploaded Image";
      document.body.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
