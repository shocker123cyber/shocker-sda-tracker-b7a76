document.addEventListener("DOMContentLoaded", function () {
  const trackingStatus = document.querySelector("#tracking-status");
  const currentLocation = document.querySelector("#current-location");

  // Simulate dynamic tracking info update
  const trackingInfo = {
    status: "📦 In Transit",
    location: "Jacksonville, Florida → Dayton, Ohio"
  };

  if (trackingStatus) trackingStatus.textContent = trackingInfo.status;
  if (currentLocation) currentLocation.textContent = trackingInfo.location;
});
