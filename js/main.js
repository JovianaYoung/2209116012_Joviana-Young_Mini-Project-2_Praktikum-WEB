const form = document.getElementById("contact-form");

// FUNCTION
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validasi bidang formulir
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert("All fields must be filled out!");
        return; // Menghentikan pengiriman formulir jika ada bidang yang kosong
    }

    // OBJECT
    // Persiapkan data untuk dikirim
    const formData = {
        Name: name,
        Email: email,
        Message: message,
        access_key: "e2e8a0ff-2ac5-4944-ba36-925b6260d741" // Kunci akses Web3Forms
    };

    // Kirim data menggunakan fetch API
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Cetak respons dari API (termasuk pesan sukses atau pesan kesalahan jika ada)
        if (data.success) { //PERULANGAN IF - ELSE
            // Reset formulir jika pengiriman berhasil
            form.reset();
            alert("Form submitted successfully!");
        } else {
            alert("There was an error submitting the form. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form. Please try again later.");
    });
});


// Ini Perulangan dan Array pada certificate
let certificates = [
  {
    title: "Sertifikat Award Of Final Exam Completion Database Programming with SQL",
    date: "01 Desember 2023",
    image: "images/s1.png",
  },
  {
    title: "Sertifikat Award Of Final Exam Completion Database Design",
    date: "01 Desember 2023",
    image: "images/s2.png",
  },
  {
    title: "Sertifikat Sebagai Peserta Webinar bertema Dicoding (Dicoding Developer Coaching #87:DevOps)",
    date: "05 Mei 2023",
    image: "images/s3.png",
  },
  {
    title: "Sertifikat Sebagai Peserta Seminar Teknologi (The Role Of data science In Achieving Sustainable Development Goals)",
    date: "16 November 2022",
    image: "images/s4.png",
  },
  {
    title: "Sertifikat Has Completed in Introduction to Data Science with R",
    date: "20 Oktober 2022",
    image: "images/s5.png",
  },
  {
    title: "Sertifikat Sebagai Peserta Webinar Kominfo bertema Transformasi Digital dalam Mempersiapkan Smart Digital Campus",
    date: "21 Agustus 2023",
    image: "images/s6.png",
  },
];

let certificateContainer = document.getElementById("certificate-container");

certificates.forEach((certificate) => {
  let certificateCard = document.createElement("div");
  certificateCard.classList.add("col");

  let cardContent = `
    <div class="card custom-card">
      <img src="${certificate.image}" class="card-img-top" alt="Certificate Image">
      <div class="card-body">
        <h5 class="card-title">${certificate.title}</h5>
        <p class="card-text">Tanggal Berlangsung: ${certificate.date}</p>
      </div>
    </div>
  `;

  certificateCard.innerHTML = cardContent;
  certificateContainer.appendChild(certificateCard);
});
