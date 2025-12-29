const baseURL = "http://localhost:8080/api/bookings";

// SAVE
document.getElementById("bookingForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const bookingData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        roomType: document.getElementById("roomType").value,
        checkInDate: document.getElementById("checkInDate").value
    };

    await fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
    });

    loadBookings();   // refresh table
    document.getElementById("bookingForm").reset();
});


// LOAD BOOKINGS
async function loadBookings() {
    const response = await fetch(baseURL);
    const data = await response.json();

    const tbody = document.querySelector("#bookingTable tbody");
    tbody.innerHTML = "";

    data.forEach(b => {
        tbody.innerHTML += `
            <tr>
                <td>${b.id}</td>
                <td>${b.name}</td>
                <td>${b.phone}</td>
                <td>${b.email}</td>
                <td>${b.roomType}</td>
                <td>${b.checkInDate}</td>
                <td>
                    <button onclick="deleteBooking(${b.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// DELETE
async function deleteBooking(id) {
    if (confirm("Delete this booking?")) {
        await fetch(baseURL + "/" + id, {
            method: "DELETE"
        });
        loadBookings();
    }
}

// Load when page opens
loadBookings();

