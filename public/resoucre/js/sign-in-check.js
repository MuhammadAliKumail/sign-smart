// Check if UID is not in session
if (
  !sessionStorage.getItem("uid") &&
  !sessionStorage.getItem("email") &&
  !sessionStorage.getItem("firstName") &&
  !sessionStorage.getItem("lastName")
) {
  // Redirect to homepage
  window.location.href = "/unauthorized";
}
