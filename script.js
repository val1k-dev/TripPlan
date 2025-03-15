const locationsConfig = {
    "День 1": [
        { name: "1. Триумфальная арка", link: "https://www.google.com/maps/place/Pl.+Charles+de+Gaulle,+Paris,+Франция/@48.8738124,2.2932818,17z/data=!4m6!3m5!1s0x47e66fec746f7c45:0x3847ffb6d0d85ec5!8m2!3d48.8741476!4d2.2945263!16zL20vMGRfZ2c" },
        { name: "2. Елисейские поля", link: "https://www.google.com/maps/place/Av.+des+Champs-Élysées,+75008+Paris,+Франция/@48.8729637,2.2952777,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc4f8007851:0x5aa1a787f38f64f6!8m2!3d48.8729602!4d2.2978526!16zL20vMGpkNGo" },
        { name: "3. Большой дворец", link: "https://www.google.com/maps/place/Большой+дворец/@48.8661126,2.3098795,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd048eedcd1:0x499b45575147a06b!8m2!3d48.8661091!4d2.3124544!16zL20vMDdfa2Zq" },
        { name: "4. Мост Александра III", link: "https://www.google.com/maps/place/Мост+Александра+III/@48.863903,2.3109841,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd057a1f0b9:0xeb0032bf06974d4f!8m2!3d48.8638995!4d2.313559!16zL20vMDhkdjNo" },
        { name: "5. Пети пале", link: "https://www.google.com/maps/place/Av.+Winston+Churchill,+75008+Paris,+Франция/@48.8659038,2.3112326,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd037186381:0x276c8edd0bd00c82!8m2!3d48.8659003!4d2.3138075!16s%2Fg%2F121ngm83" },
        { name: "6. Сады Елисейских полей", link: "https://www.google.com/maps/place/%D0%A1%D0%B0%D0%B4%D1%8B+%D0%95%D0%BB%D0%B8%D1%81%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D1%85+%D0%BF%D0%BE%D0%BB%D0%B5%D0%B9/@48.867251,2.3153648,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fce31926ad7:0xdfe4a149bf9bdb82!8m2!3d48.8672475!4d2.3179397!16s%2Fg%2F122cntg4?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "7. Площадь Согласия", link: "https://www.google.com/maps/place/Place+de+la+Concorde,+75008+Paris,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8654794,2.3198374,18z/data=!3m1!4b1!4m6!3m5!1s0x47e66fd2c072e437:0x9a78e29218ee0ce8!8m2!3d48.8656331!4d2.3212357!16s%2Fg%2F11bw3fh_n1?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "8. Сад Тюильри", link: "https://www.google.com/maps/place/Сад+Тюильри/@48.8634951,2.3249194,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2c30000001:0xc219db09e1bfefc7!8m2!3d48.8634916!4d2.3274943!16s%2Fm%2F0bx_wd_" },
        { name: "9. Мост Леопольда Седара Сенгора", link: "https://www.google.com/maps/place/%D0%9C%D0%BE%D1%81%D1%82+%D0%9B%D0%B5%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D0%B4%D0%B0+%D0%A1%D0%B5%D0%B4%D0%B0%D1%80%D0%B0+%D0%A1%D0%B5%D0%BD%D0%B3%D0%BE%D1%80%D0%B0/@48.8619897,2.3229176,17.05z/data=!4m6!3m5!1s0x47e66e2c85d256e1:0xbc6271b9f4971bb4!8m2!3d48.8618935!4d2.324697!16s%2Fm%2F03mb50b?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "10. Триумфальная арка на площади Каррузель", link: "https://www.google.com/maps/place/Pl.+du+Carrousel,+75001+Paris,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8618408,2.3319568,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e25fd5a2af5:0x6e7270ea30a087a2!8m2!3d48.8618373!4d2.3345317!16s%2Fm%2F0cnzzq7?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "11. Лувр", link: "https://www.google.com/maps/place/%D0%9B%D1%83%D0%B2%D1%80/@48.8606146,2.3350691,17z/data=!3m2!4b1!5s0x47f112d46c2f6eef:0xfb8a933f53aec2c6!4m6!3m5!1s0x47e671d877937b0f:0xb975fcfa192f84d4!8m2!3d48.8606111!4d2.337644!16zL20vMDRnZHI?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "12. Мост искусств", link: "https://www.google.com/maps/place/%D0%9C%D0%BE%D1%81%D1%82+%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2/@48.8583459,2.3349335,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e271892bc5b:0x4a478d68db24dc95!8m2!3d48.8583424!4d2.3375084!16zL20vMDRrYmR6?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "13. Сен-Жермен-л'Оксепуа", link: "https://www.google.com/maps/place/2+Pl.+du+Louvre,+75001+Paris,+Франция/@48.8598279,2.3383687,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f2b9979fd25:0xb433db15c8a1597c!8m2!3d48.8598244!4d2.3409436!16s%2Fg%2F11stwv4pxs?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "14. Пале Руаяль", link: "https://www.google.com/maps/place/Пале-Руаяль,+75001+Париж,+Франция/@48.8646588,2.3321773,16.75z/data=!4m6!3m5!1s0x47e66e24f70432e9:0x7e04de8a2eda4b55!8m2!3d48.865221!4d2.3353643!16s%2Fg%2F1225qptv" },
        { name: "15. Вандомская площадь", link: "https://www.google.com/maps/place/Pl.+Vendôme,+75001+Paris,+Франция/@48.8674043,2.3269886,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e31ee8c6305:0x6040cc8603a193e7!8m2!3d48.8674008!4d2.3295635!16zL20vMDM2cHdx" },
        { name: "16. Церковь Мадлен", link: "https://www.google.com/maps/place/Pl.+de+la+Madeleine,+75008+Paris,+Франция/@48.8699503,2.3223154,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e333de951b1:0xbb1122c9cd246bed!8m2!3d48.8699468!4d2.3248903!16s%2Fg%2F121_jb2m" },
        { name: "17. Опера Гарнье", link: "https://www.google.com/maps/place/Опера+Гарнье/@48.8705814,2.3320332,17.75z/data=!4m6!3m5!1s0x47e66e30d4668339:0xa9abf21c286d0767!8m2!3d48.8719697!4d2.3316014!16zL20vMGhyNnc?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "18. Галерея Лафайет", link: "https://www.google.com/maps/place/40+Bd+Haussmann,+75009+Paris,+Франция/@48.8736324,2.3294406,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e3703e3bbb7:0x761a43269d50e900!8m2!3d48.8736289!4d2.3320155!16s%2Fg%2F11bw3fszhq" },
        { name: "19. Эйфелева башня", link: "https://www.google.com/maps/place/Эйфелева+башня/@48.8583701,2.2944813,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE" }
    ],
    "День 2": [
        { name: "1. Площадь Трокадеро", link: "https://www.google.com/maps/place/Pl.+du+Trocad%C3%A9ro+et+du+11+Novembre,+Paris,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8603721,2.2956044,15.46z/data=!4m6!3m5!1s0x47e66ffb666721a5:0x8dbf34b77b272395!8m2!3d48.8626979!4d2.2875026!16s%2Fm%2F0w4q_r1?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "2. Мост Бир-Акейм", link: "https://www.google.com/maps/place/Pont+de+Bir-Hakeim,+Paris,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8588323,2.2946922,15.46z/data=!4m6!3m5!1s0x47e67002ce35f08b:0x89254392ed9a629e!8m2!3d48.8555812!4d2.287589!16s%2Fg%2F1tf86d6l?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "3. Эйфелева Башня", link: "https://www.google.com/maps/place/%D0%AD%D0%B9%D1%84%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0+%D0%B1%D0%B0%D1%88%D0%BD%D1%8F/@48.8588323,2.2946922,15.46z/data=!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "4. Марсово поле", link: "https://www.google.com/maps/place/%D0%9C%D0%B0%D1%80%D1%81%D0%BE%D0%B2%D0%BE+%D0%BF%D0%BE%D0%BB%D0%B5/@48.8588323,2.2946922,15.46z/data=!4m6!3m5!1s0x47e670209c1c4807:0x9702c4c43d00821e!8m2!3d48.8558047!4d2.2983766!16zL20vMDFmM2Rk?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "5. Статуя свободы", link: "https://www.google.com/maps/place/%D0%A1%D1%82%D0%B0%D1%82%D1%83%D1%8F+%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B+%D0%B2+%D0%9F%D0%B0%D1%80%D0%B8%D0%B6%D0%B5/@48.8573527,2.292943,15.46z/data=!4m6!3m5!1s0x47e6700655f59a43:0x196a515d7ff0d96b!8m2!3d48.8500168!4d2.2796956!16s%2Fg%2F125n0yycl?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "6. Ле-Бурже", link: "https://www.google.com/maps/place/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9+%D0%B0%D0%B2%D0%B8%D0%B0%D1%86%D0%B8%D0%B8+%D0%B8+%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%B8%D0%BA%D0%B8/@48.9505861,2.4417001,14.58z/data=!3m1!5s0x47e66b6baad9e22b:0x50e83141dbbf73a4!4m6!3m5!1s0x478b082ab1d8decb:0x2de483e2dcd4c0b8!8m2!3d48.9476982!4d2.4356111!16zL20vMDdtXzgy?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "7. Версаль", link: "https://www.google.com/maps/place/78000+%D0%92%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8697062,2.131796,10.79z/data=!4m6!3m5!1s0x47e67db475f420bd:0x869e00ad0d844aba!8m2!3d48.8022585!4d2.1297422!16zL20vMDgwZzM?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "8. Мулен Руж", link: "https://www.google.com/maps/place/%D0%9C%D1%83%D0%BB%D0%B5%D0%BD+%D0%A0%D1%83%D0%B6/@48.8828228,2.3276716,15.75z/data=!3m1!5s0x47e66e4eff4a3311:0x290e821789a4719e!4m6!3m5!1s0x47e66e4eff6f0c89:0xf44e90af87482111!8m2!3d48.8841232!4d2.3322519!16zL20vMGJ4Y2g?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "9. Стена любви", link: "https://www.google.com/maps/place/%D0%A1%D1%82%D0%B5%D0%BD%D0%B0+%D0%BB%D1%8E%D0%B1%D0%B2%D0%B8/@48.8828228,2.3277992,15.75z/data=!4m6!3m5!1s0x47e66e44e2a227af:0x641930356f5c6782!8m2!3d48.8848037!4d2.338578!16s%2Fm%2F012dsb4l?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "10. Площадь Луиз Мишель", link: "https://www.google.com/maps/place/%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C+%D0%9B%D1%83%D0%B8%D0%B7+%D0%9C%D0%B8%D1%88%D0%B5%D0%BB%D1%8C/@48.8828228,2.3277992,15.75z/data=!4m6!3m5!1s0x47e66e43217a1e1b:0x32dfc9177bdf6e57!8m2!3d48.8850123!4d2.3433924!16s%2Fg%2F122x83qj?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "11. Сакре Кёр", link: "https://www.google.com/maps/place/%D0%91%D0%B0%D0%B7%D0%B8%D0%BB%D0%B8%D0%BA%D0%B0+%D0%A1%D0%B0%D0%BA%D1%80%D0%B5-%D0%9A%D1%91%D1%80/@48.8828228,2.3277992,15.75z/data=!3m1!5s0x47e66e5ccbbf7941:0xe822cfb990602edb!4m6!3m5!1s0x47e66e4334868de3:0xcfc3870abe2b8519!8m2!3d48.8867046!4d2.3431043!16s%2Fg%2F1tdm30l7?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
        { name: "12. Площадь Трокадеро", link: "https://www.google.com/maps/place/Pl.+du+Trocad%C3%A9ro+et+du+11+Novembre,+Paris,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8603721,2.2956044,15.46z/data=!4m6!3m5!1s0x47e66ffb666721a5:0x8dbf34b77b272395!8m2!3d48.8626979!4d2.2875026!16s%2Fm%2F0w4q_r1?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" },
    ],
    "Example": [
        { name: "Testt", link: "Test" },
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
                <button onclick="window.open('${location.link}', '_blank')">Открыть ссылку</button>
            `;
            container.appendChild(div);
        });
    }
}

renderTripPlan();