/**
 * Created by School on 2/22/2016.
 */
var list_of_settlement_types={1:"Thorp",2:"Hamlet",3:"Village",4:"Small Town",5:"Large Town",6:"Small City",7:"Large City",8:"Metropolis"}
//since at the moment this class CANNOT take information since my whole world is already hardcoded I will just be doing the selection of capital cities and towns
var Settlement_Data=function(){
    this.name="";
    this.country_or_area="";

    this.population=0;
    this.money_limit=0;

    this.power_center_in_community="";
    this.power_center_alignement="";
    this.authority_figures={"Governmental":[],"Guard Captain":[],"Notable Spellcasters":[]};

    this.city_guards=(this.population*0.01).toFixed(0);
    this.city_militia=(this.population*0.05).toFixed(0);
    this.major_exports=[];
    this.major_imports=[];
    this.local_stores={"General Stores":[],"Weapons & Armor":[],"Magic Items":[],"Other Vendors":[]};
    this.knowledge_local_information={10:"",15:"",20:"",25:"","30":""};
    this.general_description_of_settlement="";

    this.city_map=null;
    this.local_map=null;
    //TODO once the map is working properly find the coordinates for the towns.
    this.latitude=0;
    this.longitude=0;
};

//HERE COMES SOME CITIES!!!!!!!
var Weston=new Settlement_Data();
Weston.name="Weston";
Weston.country_or_area="The Wilds";
Weston.population=348;
//todo add population breakdown by race when you hover over the pop #
Weston.money_limit=1600;
Weston.power_center_in_community="Elected Council";
Weston.power_center_alignement="Chaotic Good";

Weston.authority_figures={"Governmental":["Mar the Hobgoblin","Amelia Nemoren","Nurse Practitioner Lorga","Aniel","Onemrious Olurba","Ketham Waterwalker","Socratea daughter of Kopak"],
    "Guard Captain":["Sheriff Renault Raegelaeine"],"Notable Spellcasters":["Ka-ah Bentini","Halvard Tillert","Nurse Practitioner Lorga","Darinthrall Shann","Ichraeme The Stout"]};
Weston.city_guards=((Weston.population*0.01)+10).toFixed(0);
Weston.city_militia=((Weston.population*0.05+20)).toFixed(0);
Weston.major_exports=["Cider","Beer","Jewelry","Magic Items"];
Weston.major_imports=["Precious Metals","Gems","Iron","Copper","Farming Implements","Exotic Animals"];

Weston.local_stores={
    "General Stores":["Mar's General & Tannery"],
    "Weapons & Armor":["Serrok's Smithy","Sangar's Bows and Spears"],
    "Magic Items":["The Vault","Weston Community Health Center","Terrelton's Reprieve"],
    "Other Vendors":["The West Inn (Tavern)","The Oldest Stone Building (Tavern)","War Hounds Fighting School","Farlo Shann's Woodland Wares","Scrolls and Legal Documents","The Nice Stables"]
};

Weston.knowledge_local_information={
    10:"The town of Weston used to be cursed, then the Blue Feet of Weston broke the curse.",
    15:"Weston is ruled by a city council instead of a Baron.",
    20:"Lady Amelia Nemoren is the wife of the long dead Baron Nemoren.",
    25:"Amelia was frozen in time by Lizette the Barons Lover",
    30:"Lizette is the one that cursed the town when she found out Lady NeMoren was pregnant and the Baron was going to leave Lizette for her."};
Weston.general_description_of_settlement="Weston is a small town of nearly four hundred souls.  " +
    "The town is at the intersection of two major roads, the Gold and the Crimson.  " +
    "It was first established long before the roads were there, in the first age of the world.  " +
    "During the Hobgoblin wars throughout the Westwood Kragor NeMoren single handedly slew an entire battalion allowing the Raegalaeine elves, and the Shanns to annihilate the larger force." +
    "It has old stone fortifications that had fallen into disrepair when the town was cursed." +
    "\nThe Blue Feet of Weston invested a large quantity of money intot he town to bring these fortifications back from their terrible state." +
    "Nemoren Manor sits atop a small hill near the center of town." +
    "The River Jayce also runs through town, which in turn powers the mills along it." +
    "The town still has some dilapidated structures, but many of them have either been torn down by the renovators or repaired back into working condition.";
Weston.city_map="City Maps/Weston.bmp";
Weston.local_map="City Maps/Weston_and_Environs.png";

Weston.latitude=39.16414;
Weston.longitude=126.56250;

var The_Nine_Shards=new Settlement_Data();
The_Nine_Shards.name="The Nine Shards";
The_Nine_Shards.country_or_area="The Keep of The Wind";
The_Nine_Shards.population=548;
The_Nine_Shards.money_limit=60000;
The_Nine_Shards.power_center_in_community="Magocracy";
The_Nine_Shards.power_center_alignement="Lawful Nuetral";
The_Nine_Shards.authority_figures={"Governmental":[],"Guard Captain":[],"Notable Spellcasters":[]};
The_Nine_Shards.city_guards=(The_Nine_Shards.population*0.01).toFixed(0);
The_Nine_Shards.city_militia=(The_Nine_Shards.population*0.05).toFixed(0);
The_Nine_Shards.major_exports=[];
The_Nine_Shards.major_imports=[];
The_Nine_Shards.general_description_of_settlement="";
The_Nine_Shards.knowledge_local_information={
    10:"",
    15:"",
    20:"",
    25:"",
    30:""};
The_Nine_Shards.city_map="";
The_Nine_Shards.local_map="";
The_Nine_Shards.latitude=-72.34246;
The_Nine_Shards.longitude=19.42383;

var Shardtown=new Settlement_Data();
Shardtown.name="Shardtown";
Shardtown.country_or_area="The Keep of The Wind";
Shardtown.population=26894;
Shardtown.money_limit=100000;
Shardtown.power_center_in_community="Elected Council, Subordinate to the 9";
Shardtown.power_center_alignement=" Lawful Nuetral";
Shardtown.authority_figures={"Governmental":[],"Guard Captain":[],"Notable Spellcasters":[]};
Shardtown.city_guards=(Shardtown.population*0.01).toFixed(0);
Shardtown.city_militia=(Shardtown.population*0.05).toFixed(0);
Shardtown.major_exports=[];
Shardtown.major_imports=[];
Shardtown.general_description_of_settlement="";
Shardtown.knowledge_local_information={
    10:"",
    15:"",
    20:"",
    25:"",
    30:""};
Shardtown.city_map="";
Shardtown.local_map="";
Shardtown.latitude=-72.34246;
Shardtown.longitude=19.42383;

var Golauk=new Settlement_Data();
Golauk.name="Golauk";
Golauk.country_or_area="The Golauchi Alliance";
Golauk.population=6857;
Golauk.money_limit=15000;
Golauk.power_center_in_community="Elected Council";
Golauk.power_center_alignement=" Neutral Good";
Golauk.authority_figures={"Governmental":[],"Guard Captain":[],"Notable Spellcasters":[]};
Golauk.city_guards=(Golauk.population*0.01).toFixed(0);
Golauk.city_militia=(Golauk.population*0.05).toFixed(0);
Golauk.major_exports=[];
Golauk.major_imports=[];
Golauk.general_description_of_settlement="";
Golauk.knowledge_local_information={
    10:"",
    15:"",
    20:"",
    25:"",
    30:""};
Golauk.city_map="";
Golauk.local_map="";
Golauk.latitude=16.63619;
Golauk.longitude=-49.74609;

var Chibblah=new Settlement_Data();
Chibblah.name="Chibblah";
Chibblah.country_or_area="The Golauchi Alliance";
Chibblah.population=5478;
Chibblah.money_limit=15000;
Chibblah.power_center_in_community="Elected Council";
Chibblah.power_center_alignement=" Neutral Good";
Chibblah.authority_figures={"Governmental":[],"Guard Captain":[],"Notable Spellcasters":[]};
Chibblah.city_guards=(Chibblah.population*0.01).toFixed(0);
Chibblah.city_militia=(Chibblah.population*0.05).toFixed(0);
Chibblah.major_exports=[];
Chibblah.major_imports=[];
Chibblah.general_description_of_settlement="";
Chibblah.knowledge_local_information={
    10:"",
    15:"",
    20:"",
    25:"",
    30:""};
Chibblah.city_map="";
Chibblah.local_map="";
Chibblah.latitude=-62.10388;
Chibblah.longitude=-16.87500;

var Tyrellia=new Settlement_Data();
Tyrellia.name="Tyrellia";
Tyrellia.country_or_area="The Golauchi Alliance";
Tyrellia.population=5478;
Tyrellia.money_limit=15000;
Tyrellia.power_center_in_community="Meritocracy";
Tyrellia.power_center_alignement=" Chaotic Good";
Tyrellia.authority_figures={"Governmental":[],"Guard Captain":[],"Notable Spellcasters":[]};
Tyrellia.city_guards=(Tyrellia.population*0.01).toFixed(0);
Tyrellia.city_militia=(Tyrellia.population*0.05).toFixed(0);
Tyrellia.major_exports=[];
Tyrellia.major_imports=[];
Tyrellia.general_description_of_settlement="";
Tyrellia.knowledge_local_information={
    10:"",
    15:"",
    20:"",
    25:"",
    30:""};
Tyrellia.city_map="";
Tyrellia.local_map="";
Tyrellia.latitude=-31.05293;
Tyrellia.longitude=-39.28711;


var Kopak=new Settlement_Data();
Kopak.name="Kopak";
Kopak.country_or_area="The Wilds";
Kopak.population=3960;
Kopak.money_limit=3000;
Kopak.power_center_in_community="Theocracy";
Kopak.power_center_alignement=" Chaotic Good";
Kopak.authority_figures={"Governmental":["Illia Villanova", "Maester Ericrell Seymour", "Arindrell Bellathorne", "Kertonbael Silverwind" ],
    "Guard Captain":["Billard Farsentol"],"Notable Spellcasters":["Illia Villanova", "Maester Ericrell Seymour", "Arindrell Bellathorne"]};
Kopak.city_guards=(Kopak.population*0.01).toFixed(0);
Kopak.city_militia=(Kopak.population*0.05).toFixed(0);
Kopak.major_exports=["Religion","Living Wood Furniture & Goods","Leafblade Guisarmes"];
Kopak.major_imports=["Books","Stories","Iron"];
Kopak.general_description_of_settlement="";
Kopak.knowledge_local_information={
    10:"A city built in the trees.",
    15:"At the center of the city is the Anchor Tree, a strange species with rainbow colored trunks.",
    20:"The School educates young clerics, druids, and rangers then sends them into the world to return with knowledge, stories and experiences",
    25:"The Great Library is in the boughs of the tree, and has been there since year 80 of the Third Age.",
    30:"The School was built by the survivors of the forest after the Elemental Storm of 2568, the Second Age.",
    35:"High Priestess Illia Villanova was an old woman when the Storm happened over 1200 years ago."
};

Kopak.city_map="";
Kopak.local_map="";
Kopak.latitude=5.79090;
Kopak.longitude=158.20313;


var all_settlements={"Weston":Weston,"The Nine Shards":The_Nine_Shards,"Shardtown":Shardtown,"Golauk":Golauk,"Chibblah":Chibblah,"Kopak":Kopak,"Tyrellia":Tyrellia};
