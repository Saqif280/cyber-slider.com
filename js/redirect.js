
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) return "Windows Phone";
  if (/android/i.test(userAgent)) return "Android";
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
  return "unknown";
}

if(getMobileOperatingSystem()=="Android") {
  window.location = 'https://play.google.com/store/apps/details?id=com.saqif.cyberSlider';
} else if (getMobileOperatingSystem()=="iOS") {
  // window.location = '';
}