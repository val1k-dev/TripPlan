const locationsConfig = {
    "День 1": [
        { name: "1. Триумфальная арка", link: "https://www.google.com/maps/place/Pl.+Charles+de+Gaulle,+Paris,+Франция/@48.8738124,2.2932818,17z/data=!4m6!3m5!1s0x47e66fec746f7c45:0x3847ffb6d0d85ec5!8m2!3d48.8741476!4d2.2945263!16zL20vMGRfZ2c" },
        { name: "2. Елисейские поля", link: "https://www.google.com/maps/place/Av.+des+Champs-Élysées,+75008+Paris,+Франция/@48.8729637,2.2952777,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc4f8007851:0x5aa1a787f38f64f6!8m2!3d48.8729602!4d2.2978526!16zL20vMGpkNGo" },
        { name: "3. Большой дворец", link: "https://www.google.com/maps/place/Большой+дворец/@48.8661126,2.3098795,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd048eedcd1:0x499b45575147a06b!8m2!3d48.8661091!4d2.3124544!16zL20vMDdfa2Zq" },
        { name: "4. Пети пале", link: "https://www.google.com/maps/place/Av.+Winston+Churchill,+75008+Paris,+Франция/@48.8659038,2.3112326,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd037186381:0x276c8edd0bd00c82!8m2!3d48.8659003!4d2.3138075!16s%2Fg%2F121ngm83" },
        { name: "5. Мост Александра III", link: "https://www.google.com/maps/place/Мост+Александра+III/@48.863903,2.3109841,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd057a1f0b9:0xeb0032bf06974d4f!8m2!3d48.8638995!4d2.313559!16zL20vMDhkdjNo" },
        { name: "6. Площадь Конкорда", link: "https://www.google.com/maps/place/6+Bd+Malesherbes,+75008+Paris,+Франция/@48.8710231,2.3205685,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fccb2c515b9:0xa08b917a9ce79ba3!8m2!3d48.8710196!4d2.3231434!16s%2Fg%2F11q2ndg2zx" },
        { name: "7. Церковь Мадлен", link: "https://www.google.com/maps/place/Pl.+de+la+Madeleine,+75008+Paris,+Франция/@48.8699503,2.3223154,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e333de951b1:0xbb1122c9cd246bed!8m2!3d48.8699468!4d2.3248903!16s%2Fg%2F121_jb2m" },
        { name: "8. Опера Гарнье", link: "https://www.google.com/maps/place/Pl.+de+l'Opéra,+Paris,+Франция/@48.870626,2.3295368,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e30dcb60c8d:0xdd43c68cb765f948!8m2!3d48.8706225!4d2.3321117!16s%2Fg%2F11bc5_818g" },
        { name: "9. Галерея Лафайет", link: "https://www.google.com/maps/place/40+Bd+Haussmann,+75009+Paris,+Франция/@48.8736324,2.3294406,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e3703e3bbb7:0x761a43269d50e900!8m2!3d48.8736289!4d2.3320155!16s%2Fg%2F11bw3fszhq" },
        { name: "10. Вандомская площадь", link: "https://www.google.com/maps/place/Pl.+Vendôme,+75001+Paris,+Франция/@48.8674043,2.3269886,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e31ee8c6305:0x6040cc8603a193e7!8m2!3d48.8674008!4d2.3295635!16zL20vMDM2cHdx" },
        { name: "11. Пале Руаяль", link: "https://www.google.com/maps/place/Пале-Руаяль,+75001+Париж,+Франция/@48.8646588,2.3321773,16.75z/data=!4m6!3m5!1s0x47e66e24f70432e9:0x7e04de8a2eda4b55!8m2!3d48.865221!4d2.3353643!16s%2Fg%2F1225qptv" },
        { name: "12. Сад Тюильри", link: "https://www.google.com/maps/place/Сад+Тюильри/@48.8634951,2.3249194,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2c30000001:0xc219db09e1bfefc7!8m2!3d48.8634916!4d2.3274943!16s%2Fm%2F0bx_wd_" },
        { name: "13. Триумфальная арка на площади Каррузель", link: "https://www.google.com/maps/place/Pl.+du+Carrousel,+75001+Paris,+Франция/@48.8618408,2.3319568,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e25fd5a2af5:0x6e7270ea30a087a2!8m2!3d48.8618373!4d2.3345317!16s%2Fm%2F0cnzzq7" },
        { name: "14. Лувр", link: "https://www.google.com/maps/place/Лувр/@48.8606146,2.3350691,17z/data=!3m2!4b1!5s0x47f112d46c2f6eef:0xfb8a933f53aec2c6!4m6!3m5!1s0x47e671d877937b0f:0xb975fcfa192f84d4!8m2!3d48.8606111!4d2.337644!16zL20vMDRnZHI" },
        { name: "15. Сен-Жермен-л'Оксепуа", link: "https://www.google.com/maps/place/2+Pl.+du+Louvre,+75001+Paris,+Франция/@48.8598279,2.3383687,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f2b9979fd25:0xb433db15c8a1597c!8m2!3d48.8598244!4d2.3409436!16s%2Fg%2F11stwv4pxs?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "16. Мост искусств", link: "https://www.google.com/maps/place/Мост+Искусств/@48.8583459,2.3349335,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e271892bc5b:0x4a478d68db24dc95!8m2!3d48.8583424!4d2.3375084!16zL20vMDRrYmR6?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "17. Эйфелева башня", link: "https://www.google.com/maps/place/Эйфелева+башня/@48.8583701,2.2944813,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE" }
    ],
    "Example": [
        { name: "Test", link: "Test" },
    ],
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