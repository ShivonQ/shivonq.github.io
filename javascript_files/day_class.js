/**
 * Created by School on 2/15/2016.
 */
var arraylist_of_month_names = ["Bethal", "Ablamar", "Maros", 'Apnee', 'Duril', 'Lovoth', 'Lamorick', 'Oreth', 'Welcar', 'Svana', 'Ponj', 'Quindahl', 'Rentar'];
var Date_Information = function (date_number, month_name) {
    //this info is given, it's how they know where they belong in the final array of data
    this.date_number = date_number;
    this.month_name = month_name;

    //Moon Phase info, TODO GET THIS WORKING
    //this.moon_phase

    this.high_temprature = 0.00;
    this.low_temprature = 0.00;

    //Precipitation
    this.precipitation = 0.00;
    this.precipitation_duration = 0;
    this.precipitation_type = " None ";
    this.is_a_storm = false;

    //Windspeed and direction
    this.windspeed = 0.00;
    this.wind_direction = "None";

    this.simple_information_to_display = [];
};

Date_Information.prototype.Set_Temp = function (high, low) {
    this.high_temprature = parseFloat(high).toFixed(2);
    this.low_temprature = parseFloat(low).toFixed(2);
};

Date_Information.prototype.Set_Wind = function (speed, direction) {
    this.windspeed = parseFloat(speed).toFixed(2);
    this.wind_direction = direction;
};
Date_Information.prototype.Set_Precipitation = function (amount, type, duration) {
    this.precipitation = parseFloat(amount).toFixed(2);
    this.precipitation_type = type;
    this.precipitation_duration = parseFloat(duration).toFixed(0);
    if (this.precipitation >= 6) {
        this.is_a_storm = true;
    }

};
Date_Information.prototype.Add_Information = function (string_of_input) {
    this.simple_information_to_display.push(string_of_input);
    this.simple_information_to_display.save();
};
//No Precip, No Storm, so not declared

var Ponj1 = new Date_Information(1, "Ponj");
var Ponj2 = new Date_Information(2, "Ponj");
var Ponj3 = new Date_Information(3, "Ponj");
var Ponj4 = new Date_Information(4, "Ponj");
var Ponj5 = new Date_Information(5, "Ponj");
var Ponj6 = new Date_Information(6, "Ponj");
var Ponj7 = new Date_Information(7, "Ponj");
var Ponj8 = new Date_Information(8, "Ponj");
var Ponj9 = new Date_Information(9, "Ponj");
var Ponj10 = new Date_Information(10, "Ponj");
var Ponj11 = new Date_Information(11, "Ponj");
var Ponj12 = new Date_Information(12, "Ponj");
var Ponj13 = new Date_Information(13, "Ponj");
var Ponj14 = new Date_Information(14, "Ponj");
var Ponj15 = new Date_Information(15, "Ponj");
var Ponj16 = new Date_Information(16, "Ponj");
var Ponj17 = new Date_Information(17, "Ponj");
var Ponj18 = new Date_Information(18, "Ponj");
var Ponj19 = new Date_Information(19, "Ponj");
var Ponj20 = new Date_Information(20, "Ponj");
var Ponj21 = new Date_Information(21, "Ponj");
var Ponj22 = new Date_Information(22, "Ponj");
var Ponj23 = new Date_Information(23, "Ponj");
var Ponj24 = new Date_Information(24, "Ponj");
var Ponj25 = new Date_Information(25, "Ponj");
var Ponj26 = new Date_Information(26, "Ponj");
var Ponj27 = new Date_Information(27, "Ponj");
var month_of_ponj = {
    1: Ponj1, 2: Ponj2, 3: Ponj3, 4: Ponj4, 5: Ponj5, 6: Ponj6, 7: Ponj7, 8: Ponj8, 9: Ponj9, 10: Ponj10,
    11: Ponj11, 12: Ponj12, 13: Ponj13, 14: Ponj14, 15: Ponj15, 16: Ponj16, 17: Ponj17, 18: Ponj18, 19: Ponj19,
    20: Ponj20, 21: Ponj21, 22: Ponj22, 23: Ponj23, 24: Ponj24, 25: Ponj25, 26: Ponj26, 27: Ponj27
};

Ponj1.high_temprature = 57.5;
Ponj1.low_temprature = 42.4;
Ponj1.windspeed = 4;
Ponj1.wind_direction = "South East";
Ponj1.simple_information_to_display = ["Bazz the Kobold Arrives in Weston with Arayan RoughStepper. Gets room at The Oldest Stone Building."];
//
Ponj2.high_temprature = 50.5;
Ponj2.low_temprature = 38.4;
Ponj2.windspeed = 2;
Ponj2.wind_direction = "South";
Ponj2.simple_information_to_display = ["Bazz gets a temp job in the mine."];

Ponj3.high_temprature = 48.0;
Ponj3.low_temprature = 40.0;
Ponj3.windspeed = 4;
Ponj3.precipitation = 7;
Ponj3.precipitation_type = "Rain";
Ponj3.precipitation_duration = 2;
Ponj3.wind_direction = "South East";
Ponj3.simple_information_to_display = ["Nothing of Note"];

Ponj4.high_temprature = 52;
Ponj4.low_temprature = 43;
Ponj4.windspeed = 1;
Ponj4.wind_direction = "East";
Ponj4.simple_information_to_display = ["Nothing of Note"];

Ponj5.high_temprature = 43.0;
Ponj5.low_temprature = 32.0;
Ponj5.windspeed = 4;
Ponj5.wind_direction = "South East";
Ponj5.simple_information_to_display = ["Nothing of Note"];

Ponj6.high_temprature = 48.0;
Ponj6.low_temprature = 40.0;
Ponj6.windspeed = 4;
Ponj6.precipitation = 7;
Ponj6.precipitation_type = "Rain";
Ponj6.precipitation_duration = 2;
Ponj6.wind_direction = "South East";
Ponj6.simple_information_to_display = ["Nothing of Note"];

Ponj7.high_temprature = 41.0;
Ponj7.low_temprature = 23.0;
Ponj7.windspeed = 3;
Ponj7.precipitation = 7;
Ponj7.precipitation_type = "Freezing Rain";
Ponj7.precipitation_duration = 5;
Ponj7.is_a_storm = true;
Ponj7.wind_direction = "South East";
Ponj7.simple_information_to_display = ["First Sleet Storm of Fall at 7pm.", "Reports of growing numbers of crows in the fields from outlying farmers."];

Ponj8.high_temprature = 53.0;
Ponj8.low_temprature = 38.0;
Ponj8.windspeed = 5;
Ponj8.wind_direction = "South";
Ponj8.simple_information_to_display = ["Nothing of Note"];

Ponj9.high_temprature = 45.0;
Ponj9.low_temprature = 38.0;
Ponj9.windspeed = 0;
Ponj9.simple_information_to_display = ["Guardsman Beece stays late at the tavern, complaining of bad dreams. Offers to draw things for people."];

Ponj10.high_temprature = 44.0;
Ponj10.low_temprature = 37.0;
Ponj10.windspeed = 0;
Ponj10.simple_information_to_display = [
    "Dumavil Cehris Gladdenstone arrives in town from Fallcrest, with Roondar her giant red panda companion.",
    "Cehris, Bazz, Seymour, and Kelvin meet eachother for real.",
    "Sithril Seranth the bard introduces herself.",
    "Guardsman Beece has a fit of some kind when Seymour confronts him about his freaky art, and runs out of the tavern."];

Ponj11.high_temprature = 48.0;
Ponj11.low_temprature = 42.0;
Ponj11.windspeed = 0;
Ponj11.wind_direction = "South East";
Ponj11.simple_information_to_display = ["The party are hired by Mar to clear out her warehouse of rats.",
    "Later the night the party realizes that Beece is missing.",
    "Darinthrall Shann reports alarming amounts of crow activity.",
    "Sherriff Raegalaine gets reports of three separate incidents where people were attacked by crows.",
    "The victims are sent to the Temple of Ehlonna under Halvards care."];

Ponj12.high_temprature = 41.0;
Ponj12.low_temprature = 32.0;
Ponj12.windspeed = 0;
Ponj12.simple_information_to_display = ["Party asks around after Beece, check with his family.  " +
"They say he used to be a painter before the Elsir War, and when they saved up enough money he had bought a studio to work from. " +
"They also say that for the last two weeks he has not been himself, barely sleeping, and complaining of nightmares.",
    "A swarm of dessicated crows attack the party.",
    "The party hears that a swarm of crows killed some people yesterday.",
    "The party finds Guardsman Beece in his art studio, in front of a large painting.  " +
    "He is a zombie and his heart has been removed. " +
    "His armor is not harmed in any way by this removal, but it is clear he was wearing it when it happened.",
    "Beece nearly kills Bazz.",
    "Afterwards the party follow Beeces tracks and blood spatters throughout the town.  " +
    "They lead into the woods on the South-West edge of the town, into the West Wood.",
    "They examine the painting he was standing in front of.",
    "THIS IS WHERE AN IMAGE OF THE PAINTING OF THE SCARY TREE WITH CROWS FOR LEAVES WOULD BE IF THIS WAS A DATABASE",
    "The party brings Beeces body to the Temple of Ehlonna and learn that the vicims of the crow attacks have become gravely ill.",
    "Their skin has become covered in tiny black feathers and small scaly patches of skin, suppurating fluid.", "They recommend isolating the sick people, and request that Halvard cast 'Speak With Dead' on Beece tomorrow."];


Ponj13.high_temprature = 43.0;
Ponj13.low_temprature = 32.0;
Ponj13.windspeed = 0;
Ponj13.wind_direction = "None";
Ponj13.simple_information_to_display = ["Seymour, Kelvin, and Bazz have contracted the disease.",
    "The party sets off into the woods, following Beece's Trail from the previous day.",
    "They find a mysterious unnatural fog enshrouded area of the forest, all the trees in and near it appear to be dead and partially rotted..",
    "While moving towards it they are ambushed by cultists in spooky robes and crow masks.",
    "When slain the cultist bodies erupt in a swarm of dessicated sickly crows.",
    "They decide not to go further into the fog bank until they can rest from the battle.",
    "They head back into town to the temple of Ehlonna to 'speak' with Beece.",
    "Once there they learn that there have been an alarming number of attacks on people by swarms of crows since yesterday.",
    "They speak with Beece and learn a few bits of information. " +
    "Notably: Some tree he calls the 'Weeping Tree' is what he found in the woods and the 'wood woman' who lives in it took his heart. Literally.",
    "They conclude that the tree he spoke of must be beyond that unnatural fog bank."
];

Ponj14.high_temprature = 41.5;
Ponj14.low_temprature = 23.0;
Ponj14.windspeed = 17;
Ponj14.precipitation = 8;
Ponj14.precipitation_type = "Freezing Rain";
Ponj14.precipitation_duration = 8;
Ponj14.is_a_storm = true;
Ponj14.wind_direction = "South";
Ponj14.simple_information_to_display = ["The party gets ready for their journey into the fog.",
    "They visit Lady Amelia NeMoren in NeMoren Manor and question her about the original curse on the town.",
    "Lizettes two brothers kidnapped her (Lady NeMoren) and brought her to the Icecaves on the road west of here where Lizette imprisoned her in ice.",
    "They head into the woods after this and return to the strange fog.",
    "They see that the fog and the dying trees have both advanced about a quarter mile.",
    "They are attacked again by cultist and kill them after some hard work.",
    "They keep moving deeper into the foggy, dead forest and come to a clearing.",
    "The Weeping Tree is in the center of a 120 diameter clearing of felled trees, rotten stumps, and bodies in various stages of decay.",

    "The Weeping Tree itself is festooned with shriveled black hearts of various animals and humanoids.",
    "The surface of the tree oozes black ichor from a wound in the trunk made by a gnarled vicious looking Longsword with a strange Sigil engraved on its blackened surface.",
    "The clearing is covered in a grey black slime mold emanating from the black ichor oozing from the tree in the center.",
    "The 'wood woman' Beece's corpse spoke of turns out to be a corrupted Dryad which is very tough to kill.",
    "When they are within 30 feet of the Weeping Tree it tries to impale their hearts on itself with magic.",
    "Its vile magic luckily fails to tear the hearts from any of them.",
    "They defeat the Corrupted Dryad after a long and very tough fight in which Kelvin becomes charmed by her.",
    "Kelvin pulls the longsword from the Weeping Tree, and the ooze stops flowing, the fog begins to clear and a shudder passes through the tree.",
    "All of the hearts on the tree fall off in a shriveled fleshy rain.",
    "They search the clearing finding two armored bodies amongst the other corpses.",
    "They are wearing engraved armor, with a squid sigil on the breastplate.  Their packs are stuffed with half rotted camping gear. Each of them has dogtags with some sort of serial code on them.",
    "There is also the armored body of a human child nearby. In similarly sigiled armor with some really useful equipment the party takes.",
    "'Who would put children into armor and send them into the woods!?' asked Cehris.",
    "They notice that a storm appears to be building and that the day is quite overcast.",
    "Roondar hears something and becomes a scared animal.",
    "It is an enourmous swarm of killer crows.",
    "The exhausted party runs back to town all through the night to return to town.",
    "The swarm is corraled by a huge crow shooting enourmous 80 foot arcs of lightning from its beak into the swarms.",
    "It then flies off with the enourmous swarm of crows chaing it.",
    "The sigil on the evil sword was the house Sigil of the Beln family, Lizettes famliy..."];

Ponj15.high_temprature = 53.0;
Ponj15.low_temprature = 38.0;
Ponj15.windspeed = 17;
Ponj15.precipitation = 7;
Ponj15.wind_direction = "South West";
Ponj15.simple_information_to_display = ["More to come", "Tor Oakheart and Amaria Goodman join the party.", "Kelvin goes on a mission with Aniel."];

Ponj16.high_temprature = 40.0;
Ponj16.low_temprature = 24.0;
Ponj16.windspeed = 5;
Ponj16.wind_direction = "South West";
Ponj16.simple_information_to_display = ["More to come"];

Ponj17.high_temprature = 50.0;
Ponj17.low_temprature = 36.0;
Ponj17.windspeed = 9;
Ponj17.wind_direction = "West";
Ponj17.simple_information_to_display = ["The team prepares for the battle tomorrow."];

Ponj18.high_temprature = 45.0;
Ponj18.low_temprature = 30.0;
Ponj18.windspeed = 15;
Ponj18.precipitation = 3;
Ponj18.precipitation_type = "Snow";
Ponj18.precipitation_duration = 6;
Ponj18.wind_direction = "North West";
Ponj18.simple_information_to_display = [
    "The North Gates Sabotage",
    "The Battle for Weston.",
    "The Snow Begins to Fall",
    "Lizette is Slain",
    "Sithril's Betrayal",
    "The Flight From Weston"];

Ponj19.high_temprature = 33.0;
Ponj19.low_temprature = 22.0;
Ponj19.windspeed = 4;
Ponj19.wind_direction = "East";
Ponj19.simple_information_to_display = ["More to come"];

Ponj20.high_temprature = 41.0;
Ponj20.low_temprature = 23.0;
Ponj20.windspeed = 11;
Ponj20.precipitation = 2;
Ponj20.precipitation_type = "Light Snow";
Ponj20.precipitation_duration = 8;
Ponj20.wind_direction = "East";
Ponj20.simple_information_to_display = ["Kelvin leading the surviving guard encounters the train of captured civilians coming from the caves they were sent to.",
    "He meets up with Sarte the Soletaken who takes them and the group of kids and young adults to the old Shann Encampment.",
    "He moves north to Cedric of The Grove and the rest of his team.",
];

Ponj21.high_temprature = 33.0;
Ponj21.low_temprature = 22.0;
Ponj21.windspeed = 3;
Ponj21.wind_direction = "East";
Ponj21.simple_information_to_display = ["The Warm Mesa and Cedric.", "The Party heads for the Centaurs."];

Ponj22.high_temprature = 33.0;
Ponj22.low_temprature = 26.0;
Ponj22.windspeed = 20;
Ponj22.wind_direction = "South East";
Ponj22.simple_information_to_display = ["More to come"];

Ponj23.high_temprature = 31.0;
Ponj23.low_temprature = 28.0;
Ponj23.windspeed = 5;
Ponj23.wind_direction = "South East";
Ponj23.simple_information_to_display = ["More to come"];

Ponj24.high_temprature = 28.0;
Ponj24.low_temprature = 15.0;
Ponj24.windspeed = 3;
Ponj24.wind_direction = "East";
Ponj24.simple_information_to_display = ["More to come"];

Ponj25.high_temprature = 24.0;
Ponj25.low_temprature = 14.0;
Ponj25.windspeed = 3;
Ponj25.wind_direction = "North East";
Ponj25.simple_information_to_display = ["More to come"];

Ponj26.high_temprature = 22.0;
Ponj26.low_temprature = (2.0 - 4.0);
Ponj26.windspeed = 3;
Ponj26.wind_direction = "North East";
Ponj26.simple_information_to_display = ["More to come"];

Ponj27.high_temprature = 10.0;
Ponj27.low_temprature = (0.0 - 8.0);
Ponj27.windspeed = 3;
Ponj27.wind_direction = "East";
Ponj27.simple_information_to_display = ["More to come"];


