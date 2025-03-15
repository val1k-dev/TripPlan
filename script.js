const locationsConfig = {
    "День 1": [
        { name: "Эйфелева башня", link: "https://www.google.com/maps/place/Matinkyl%C3%A4n+J%C3%A4%C3%A4halli/@60.1605755,24.7602729,14z/data=!4m6!3m5!1s0x468df51ba393a64d:0x7b06550b1502fcb6!8m2!3d60.1591182!4d24.7513874!16s%2Fg%2F1tdjpt3v?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Лувр", link: "https://goo.gl/maps/EXAMPLE2" }
    ],
    "День 2": [
        { name: "Нотр-Дам", link: "https://goo.gl/maps/EXAMPLE3" },
        { name: "Монмартр", link: "https://goo.gl/maps/EXAMPLE4" }
    ]
};

function renderTripPlan() {
    const container = document.getElementById("trip-plan");
    for (const [day, locations] of Object.entries(locationsConfig)) {
        const dayElement = document.createElement("h2");
        dayElement.textContent = day;
        container.appendChild(dayElement);

        locations.forEach(location => {
            const div = document.createElement("div");
            div.className = "location";
            div.innerHTML = `
                ${location.name} 
                <button onclick="window.open('${location.link}', '_blank')">Нажать</button>
            `;
            container.appendChild(div);
        });
    }
}

renderTripPlan();