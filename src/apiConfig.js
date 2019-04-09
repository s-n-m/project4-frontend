let apiUrl;
const apiUrls = {
  production: "https://floating-headland-53232.herokuapp.com/",
  development: "http://localhost:3001"
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

// apiUrl = apiUrls.production;

export default apiUrl;
