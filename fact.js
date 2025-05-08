        // Array of 100 science facts
        const scienceFacts = [
            "The human brain contains approximately 100 billion neurons.",
            "The speed of light is 299,792,458 meters per second.",
            "Water is the only substance that exists naturally in all three physical states: solid, liquid, and gas.",
            "A single teaspoon of honey is the lifetime work of 12 bees.",
            "Earth's atmosphere is composed of 78% nitrogen, 21% oxygen, and 1% other gases.",
            "The largest volcano in the solar system is Olympus Mons on Mars.",
            "Bananas are radioactive due to their high potassium content.",
            "Sharks have been around for over 400 million years, predating dinosaurs.",
            "Lightning strikes Earth about 100 times per second.",
            "Octopuses have three hearts, two pump blood to the gills, and one pumps it to the rest of the body.",
            "Sound travels faster in water than in air.",
            "A day on Venus is longer than a year on Venus.",
            "The Earth's core is as hot as the surface of the sun, approximately 5,500 degrees Celsius.",
            "The Great Barrier Reef is the largest living structure on Earth.",
            "A group of flamingos is called a 'flamboyance.'",
            "Some metals, like sodium and potassium, are so reactive that they can explode when exposed to water.",
            "Whales are mammals, and they must come to the surface to breathe air.",
            "A year on Mercury lasts only 88 Earth days.",
            "There are more stars in the universe than grains of sand on Earth.",
            "The Eiffel Tower can grow up to 6 inches in summer due to thermal expansion.",
            "Jellyfish are 95% water and don't have brains, hearts, or bones.",
            "Black holes are regions of space where the gravitational pull is so strong that nothing, not even light, can escape.",
            "One teaspoon of a neutron star would weigh about 6 billion tons.",
            "The Amazon rainforest produces 20% of the world's oxygen.",
            "The universe is approximately 13.8 billion years old.",
            "It takes 8 minutes and 20 seconds for light from the Sun to reach Earth.",
            "At over 2,000 kilometers long, the Great Barrier Reef is the largest coral reef system in the world.",
            "The Milky Way galaxy is on a collision course with the Andromeda galaxy, but they won't collide for another 4 billion years.",
            "Penguins can jump up to 6 feet out of the water.",
            "DNA molecules in the human body, when uncoiled, can stretch from Earth to the Sun and back over 600 times.",
            "The average human body contains about 37.2 trillion cells.",
            "A day on Jupiter is only about 10 hours long, despite its massive size.",
            "The deepest part of the ocean is the Mariana Trench, which is over 36,000 feet deep.",
            "Butterflies taste with their feet.",
            "Antarctica is the driest, coldest, and windiest continent on Earth.",
            "Saturn's rings are made up of ice, dust, and rock particles.",
            "If you could travel at the speed of light, it would take over 4 years to reach the closest star, Proxima Centauri.",
            "The average person sheds about 600,000 particles of skin every hour.",
            "Humans and giraffes have the same number of neck vertebrae—seven.",
            "A day on Pluto lasts 153 hours.",
            "Venus is the hottest planet in our solar system, with surface temperatures exceeding 460 degrees Celsius.",
            "The Earth's magnetic field protects us from harmful solar radiation.",
            "The moon is drifting away from Earth at a rate of about 3.8 centimeters per year.",
            "The average human body contains enough carbon to fill 9,000 pencils.",
            "Tardigrades, also known as water bears, can survive in extreme conditions, including the vacuum of space.",
            "The Pacific Ocean is the largest ocean on Earth, covering more than 63 million square miles.",
            "Light takes approximately 1.3 seconds to travel from the moon to Earth.",
            "Elephants are the only animals that can't jump.",
            "Mars has the largest dust storms in the solar system, lasting for months and covering the entire planet.",
            "Polar bears have black skin under their white fur.",
            "The Sahara Desert is expanding at a rate of about half a mile per year.",
            "The Earth's atmosphere extends up to 10,000 kilometers into space.",
            "Diamonds can form in subduction zones, where tectonic plates collide and create extreme pressure.",
            "The blue whale is the largest animal to have ever lived, weighing as much as 200 tons.",
            "Some species of jellyfish are biologically immortal.",
            "Humans share about 60% of their DNA with bananas.",
            "There are more trees on Earth than stars in the Milky Way galaxy.",
            "The hottest temperature ever recorded on Earth was 56.7°C (134°F) in Furnace Creek Ranch, California.",
            "The human nose can detect over 1 trillion different scents.",
            "Astronauts in space grow about 2 inches taller due to the lack of gravity compressing their spine.",
            "A single strand of human DNA is about 2 meters long when fully extended."
        ];

        // Function to fetch a random science fact from the array
        function fetchRandomFact() {
            const randomIndex = Math.floor(Math.random() * scienceFacts.length);
            const randomFact = scienceFacts[randomIndex];
            displayFact(randomFact);
        }

        // Function to display the fact and add animation
        function displayFact(fact) {
            const factElement = document.getElementById('science-fact');
            factElement.textContent = fact;
            animateFactBox();
        }

        // Add animation effect when new fact appears
        function animateFactBox() {
            const factBox = document.querySelector('.fact-box');
            factBox.style.backgroundColor = '#bbdefb'; // Temporary color change
            setTimeout(() => {
                factBox.style.backgroundColor = '#e3f2fd'; // Revert to original color
            }, 300);
        }

        // Event listener for the button
        document.getElementById('generate-btn').addEventListener('click', fetchRandomFact);