const mysteries = {
    0: { // Sunday
        name: "The Glorious Mysteries",
        list: [
            "The Resurrection of Jesus",
            "The Ascension of Jesus",
            "The Descent of the Holy Spirit",
            "The Assumption of Mary",
            "The Coronation of Mary"
        ]
    },
    1: { // Monday
        name: "The Joyful Mysteries",
        list: [
            "The Annunciation",
            "The Visitation",
            "The Nativity",
            "The Presentation in the Temple",
            "The Finding in the Temple"
        ]
    },
    2: { // Tuesday
        name: "The Sorrowful Mysteries",
        list: [
            "The Agony in the Garden",
            "The Scourging at the Pillar",
            "The Crowning with Thorns",
            "The Carrying of the Cross",
            "The Crucifixion"
        ]
    },
    3: { // Wednesday
        name: "The Glorious Mysteries",
        list: [
            "The Resurrection of Jesus",
            "The Ascension of Jesus",
            "The Descent of the Holy Spirit",
            "The Assumption of Mary",
            "The Coronation of Mary"
        ]
    },
    4: { // Thursday
        name: "The Luminous Mysteries",
        list: [
            "The Baptism of Jesus in the Jordan",
            "The Wedding at Cana",
            "The Proclamation of the Kingdom",
            "The Transfiguration",
            "The Institution of the Eucharist"
        ]
    },
    5: { // Friday
        name: "The Sorrowful Mysteries",
        list: [
            "The Agony in the Garden",
            "The Scourging at the Pillar",
            "The Crowning with Thorns",
            "The Carrying of the Cross",
            "The Crucifixion"
        ]
    },
    6: { // Saturday
        name: "The Joyful Mysteries",
        list: [
            "The Annunciation",
            "The Visitation",
            "The Nativity",
            "The Presentation in the Temple",
            "The Finding in the Temple"
        ]
    }
};

function getLiturgicalSeason() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Simplified liturgical calendar (this is a basic approximation)
    // Advent: 4 Sundays before Christmas
    if ((month === 11 && day >= 27) || (month === 12 && day <= 24)) {
        return { season: 'advent', name: 'Advent' };
    }
    // Christmas: Dec 25 - Baptism of the Lord (approx Jan 13)
    if ((month === 12 && day >= 25) || (month === 1 && day <= 13)) {
        return { season: 'christmas', name: 'Christmas' };
    }
    // Lent: Ash Wednesday to Holy Saturday (approx Feb-Apr)
    if ((month === 2 && day >= 15) || (month === 3) || (month === 4 && day <= 15)) {
        return { season: 'lent', name: 'Lent' };
    }
    // Easter: Easter Sunday to Pentecost (approx 50 days)
    if ((month === 4 && day >= 16) || (month === 5)) {
        return { season: 'easter', name: 'Easter' };
    }
    // Feast days (simplified - major Marian feasts)
    if ((month === 8 && day === 15) || // Assumption
        (month === 12 && day === 8) ||  // Immaculate Conception
        (month === 1 && day === 1)) {   // Mary Mother of God
        return { season: 'feast', name: 'Feast Day' };
    }
    // Default to Ordinary Time
    return { season: 'ordinary', name: 'Ordinary Time' };
}

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

function init() {
    const day = new Date().getDay();
    const mystery = mysteries[day];
    const liturgical = getLiturgicalSeason();
    
    document.body.className = liturgical.season;
    document.getElementById('greeting').textContent = `${getGreeting()}, today we pray:`;
    document.getElementById('mysteryName').textContent = mystery.name;
    document.getElementById('seasonIndicator').textContent = `Liturgical Season: ${liturgical.name}`;
}

function showPrayers() {
    const day = new Date().getDay();
    const mystery = mysteries[day];
    
    document.getElementById('prayerTitle').textContent = mystery.name;
    
    let mysteriesHTML = '<h3>The Five Mysteries:</h3><ol>';
    mystery.list.forEach(m => {
        mysteriesHTML += `<li>${m}</li>`;
    });
    mysteriesHTML += '</ol>';
    document.getElementById('mysteriesList').innerHTML = mysteriesHTML;
    
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('prayerPage').style.display = 'block';
}

function showHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('prayerPage').style.display = 'none';
}

init();