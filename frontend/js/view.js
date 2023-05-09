const _handleCertificate = (id) => {
    // get certificates from ajax endpoint
  
    var domain = window.location.hostname;
  
    $.ajax({
      url:
        `${
          domain.includes("localhost")
            ? "http://localhost:3000"
            : "https://api.semencescertifiees.elch.cc"
        }/certificate/view/` + id,
      type: "GET",
      xhrFields: {
        withCredentials: true,
      },
      success: function (certificate, textStatus, xhr) {
        if (xhr.status === 200) {
          document.getElementById("ict4d-publicid").innerHTML =
            certificate.view_id;
          document.getElementById("ict4d-species").innerHTML =
            certificate.species;
          document.getElementById("ict4d-campaign").innerHTML =
            certificate.campaign;
          document.getElementById("ict4d-germination").innerHTML =
            certificate.germination;
          document.getElementById("ict4d-variety").innerHTML =
            certificate.variety;
          document.getElementById("ict4d-batch").innerHTML = certificate.batch;
          document.getElementById("ict4d-purity").innerHTML = certificate.purity;
        } else {
          alert("Login failed");
          window.location.href = "";
        }
      },
      error: function (xhr, textStatus, errorThrown) {
        alert("Login failed");
        window.location.href = "";
      },
    });
  };
  
  const _setup = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
  
      _handleCertificate(id);
  };
  
  _setup();
  