// data.js
const teams = [
    { value: "ATL", name: "Atlanta Hawks" },
    { value: "BOS", name: "Boston Celtics" },
    { value: "BKN", name: "Brooklyn Nets" },
    { value: "CHA", name: "Charlotte Hornets" },
    { value: "CHI", name: "Chicago Bulls" },
    { value: "CLE", name: "Cleveland Cavaliers" },
    { value: "DAL", name: "Dallas Mavericks" },
    { value: "DEN", name: "Denver Nuggets" },
    { value: "DET", name: "Detroit Pistons" },
    { value: "GSW", name: "Golden State Warriors" },
    { value: "HOU", name: "Houston Rockets" },
    { value: "IND", name: "Indiana Pacers" },
    { value: "LAC", name: "LA Clippers" },
    { value: "LAL", name: "Los Angeles Lakers" },
    { value: "MEM", name: "Memphis Grizzlies" },
    { value: "MIA", name: "Miami Heat" },
    { value: "MIL", name: "Milwaukee Bucks" },
    { value: "MIN", name: "Minnesota Timberwolves" },
    { value: "NOP", name: "New Orleans Pelicans" },
    { value: "NYK", name: "New York Knicks" },
    { value: "OKC", name: "Oklahoma City Thunder" },
    { value: "ORL", name: "Orlando Magic" },
    { value: "PHI", name: "Philadelphia 76ers" },
    { value: "PHX", name: "Phoenix Suns" },
    { value: "POR", name: "Portland Trail Blazers" },
    { value: "SAC", name: "Sacramento Kings" },
    { value: "SAS", name: "San Antonio Spurs" },
    { value: "TOR", name: "Toronto Raptors" },
    { value: "UTA", name: "Utah Jazz" },
    { value: "WAS", name: "Washington Wizards" }
];

const seasons = [
    { value: "2023", name: "2023-2024" },
    { value: "2022", name: "2022-2023" },
    { value: "2021", name: "2021-2022" },
    { value: "2020", name: "2020-2021" },
    // Add other seasons as needed
];

function populateDropdown(selectId, items) {
    const select = document.getElementById(selectId);
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item.value;
        option.textContent = item.name;
        select.appendChild(option);
    });
}

export { teams, seasons, populateDropdown };

