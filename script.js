
const arts = [
    { name: "Sea", format: "JPG", location: "Karachi" },
    { name: "Good place", format: "PNG", location: "Lahore" },
    { name: "Sky", format: "GIFS", location: "Islamabad"},
 
];

function filterarts() {
    const name = document.getElementById("name").value.toLowerCase();
    const format = document.getElementById("format").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();

    const filteredJobs = arts.filter(art => {
        return (
            (art.title.toLowerCase().includes(name) || name === '') &&
            (art.format.toLowerCase().includes(format) || format === '') &&
            (art.location.toLowerCase().includes(location) || location === '')
        );
    });

    displayarts(filteredarts);
}

function displayarts(arts) {
    const jobListingsBody = document.getElementById("artListingsBody");
    jobListingsBody.innerHTML = "";

    if (arts.length === 0) {
        artListingsBody.innerHTML = "<tr><td colspan='4'>No job listings found.</td></tr>";
        return;
    }

    arts.forEach(art => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${art.name}</td>
            <td>${art.format}</td>
            <td>${art.location}</td>
        `;
        artListingsBody.appendChild(row);
    });
}

function clearFilters() {
    document.getElementById("name").value = '';
    document.getElementById("format").value = '';
    document.getElementById("location").value = '';
    displayarts(arts);
}
displayarts(arts);
