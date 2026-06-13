const express = require("express");
const app = express();

const spacefacts = [
    {fact: "Neutron stars are so dense that a teaspoon of their material would weigh billions of tons.", source: "NASA"},
    { fact: "A day on Venus is longer than a year on Venus.", source: "NASA" },
    { fact: "Jupiter has at least 95 confirmed moons.", source: "NASA" },
    { fact: "Neutron stars can spin up to 700 times per second.", source: "NASA" },
    { fact: "The Sun contains 99.8% of all mass in the solar system.", source: "NASA" },
    { fact: "Mars has the largest volcano in the solar system, Olympus Mons.", source: "NASA" },
    { fact: "Saturn’s rings are made mostly of ice chunks.", source: "NASA" },
    { fact: "A teaspoon of neutron star material would weigh billions of tons.", source: "NASA" },
    { fact: "Light from the Sun takes about 8 minutes to reach Earth.", source: "NASA" },
    { fact: "Mercury has almost no atmosphere, causing extreme temperature swings.", source: "NASA" },
    { fact: "The Milky Way will collide with the Andromeda Galaxy in about 4.5 billion years.", source: "NASA" },
    { fact: "Pluto has mountains made of solid water ice.", source: "NASA" },
    { fact: "Jupiter’s Great Red Spot is a storm larger than Earth.", source: "NASA" },
    { fact: "Uranus rotates on its side, likely due to a massive ancient collision.", source: "NASA" },
    { fact: "The Moon drifts away from Earth by 3.8 cm each year.", source: "NASA" },
    { fact: "A year on Mercury lasts only 88 Earth days.", source: "NASA" },
    { fact: "Venus is the hottest planet in the solar system.", source: "NASA" },
    { fact: "Black holes warp space and time around them.", source: "NASA" },
    { fact: "The International Space Station travels at 17,500 mph.", source: "NASA" },
    { fact: "There are more stars in the universe than grains of sand on Earth.", source: "ESA" },
    { fact: "Space is silent because sound cannot travel in a vacuum.", source: "NASA" },
    { fact: "The Sun will eventually expand into a red giant.", source: "NASA" },
    { fact: "A day on Jupiter lasts only 10 hours.", source: "NASA" },
    { fact: "Saturn is the least dense planet and could float in water.", source: "NASA" },
    { fact: "Mars has seasons because its axis is tilted like Earth's.", source: "NASA" },
    { fact: "The Kuiper Belt contains icy bodies beyond Neptune.", source: "NASA" },
    { fact: "Comets are made of ice, dust, and rock.", source: "NASA" },
    { fact: "The Milky Way is about 100,000 light-years across.", source: "NASA" },
    { fact: "A light-year is about 5.88 trillion miles.", source: "NASA" },
    { fact: "The Sun is a medium-sized yellow dwarf star.", source: "NASA" },
    { fact: "Some stars are so large they could engulf Earth's orbit.", source: "NASA" },
    { fact: "The Boomerang Nebula is the coldest known place in the universe.", source: "NASA" },
    { fact: "The Moon has no atmosphere, so its sky is always black.", source: "NASA" },
    { fact: "Mars has the largest canyon in the solar system, Valles Marineris.", source: "NASA" },
    { fact: "Earth is the only planet known to support life.", source: "NASA" },
    { fact: "The Sun is about 4.6 billion years old.", source: "NASA" },
    { fact: "A solar eclipse happens when the Moon blocks the Sun.", source: "NASA" },
    { fact: "A lunar eclipse happens when Earth blocks sunlight from the Moon.", source: "NASA" },
    { fact: "Stars twinkle because of turbulence in Earth's atmosphere.", source: "NASA" },
    { fact: "The Milky Way has a supermassive black hole at its center.", source: "NASA" },
    { fact: "Earth’s atmosphere burns up most meteoroids before they hit the ground.", source: "NASA" },
    { fact: "The Sun’s core reaches 27 million degrees Fahrenheit.", source: "NASA" },
    { fact: "Jupiter’s magnetic field is 20,000 times stronger than Earth’s.", source: "NASA" },
    { fact: "Saturn’s moon Titan has lakes of liquid methane.", source: "NASA" },
    { fact: "Europa, a moon of Jupiter, may have a subsurface ocean.", source: "NASA" },
    { fact: "The universe is about 13.8 billion years old.", source: "NASA" },
    { fact: "Galaxies can contain hundreds of billions of stars.", source: "NASA" },
    { fact: "The Sun fuses 600 million tons of hydrogen every second.", source: "NASA" },
    { fact: "Neptune has the fastest winds in the solar system.", source: "NASA" },
    { fact: "The observable universe is 93 billion light-years across.", source: "NASA" },
    { fact: "Black holes can evaporate over time through Hawking radiation.", source: "NASA" }
    
]

app.get("/space_facts", (req, res) => {
    const fact = spacefacts[Math.floor(Math.random() * spacefacts.length)];
    res.json(fact);
});

app.listen(3000, () => console.log("API running on port 3000"));