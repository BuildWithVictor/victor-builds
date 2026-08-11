/* Add the Google Analytics Measurement ID after creating the property.
   Example: const GA_MEASUREMENT_ID = "G-ABC1234567"; */
const GA_MEASUREMENT_ID = "";

if (GA_MEASUREMENT_ID.startsWith("G-")) {
  const analyticsScript = document.createElement("script");
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(analyticsScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
}
