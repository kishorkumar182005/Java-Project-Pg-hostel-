const baseURL = "http://localhost:8080/pg";

// POST data
document.getElementById("pgForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        roomNo: document.getElementById("room").value
    };

    await fetch(baseURL + "/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    });

    loadData();
});

// LOAD data into table
async function loadData() {
    const res = await fetch(baseURL + "/all");
    const data = await res.json();

    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    data.forEach(row => {
        tableBody.innerHTML += `
            <tr>
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.phone}</td>
                <td>${row.roomNo}</td>
            </tr>
        `;
    });
}

loadData();
