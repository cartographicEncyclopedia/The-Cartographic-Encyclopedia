const nationalism = document.querySelector('#nationalismButton');
const clanism = document.querySelector('#clanismButton');
const nation = document.querySelector('#nationButton');
const napoleon = document.querySelector('#napoleonButton');
const unification = document.querySelector('#unificationButton');
const imperialism1 = document.querySelector('#imperialism1Button');
const imperialism2 = document.querySelector('#imperialism2Button');
const nationalBalkans = document.querySelector('#nationalBalkansButton');
const pridefear = document.querySelector('#pridefearButton');

const alliances = document.querySelector('#alliancesButton');
const britishPortuguese = document.querySelector('#britishPortugueseButton');
const britishBelgianFriendship = document.querySelector('#britishBelgianFriendship');
const americanWesternEuropeFriendship = document.querySelector('#americanWesternEuropeFriendship');
const dual = document.querySelector('#dualButton');
const triple = document.querySelector('#tripleButton');
const entente = document.querySelector('#ententeButton');
const balkanLeague = document.querySelector('#balkanLeagueButton');

const powderkeg = document.querySelector('#powderkegButton');
const romanEmpire = document.querySelector('#romeButton');
const slavInvasion = document.querySelector('#slavButton');
const serbianEmpire = document.querySelector('#serbiaButton');
const ottomanEmpire = document.querySelector('#ottomanButton');
const illyria = document.querySelector('#illyriaButton');
const ottomanDecline = document.querySelector('#ottomanDeclineButton');
const balkans = document.querySelector('#balkansButton');
const annexBosnia = document.querySelector('#annexBosniaButton');
//const assassination = document.querySelector('#assassination');

const crossroadsStory = document.querySelector('#crossroadsButton');
const naturalResourcesStory = document.querySelector('#naturalResourcesButton');
const religionStory = document.querySelector('#religionButton');
const mediterraneanStory = document.querySelector('#mediterraneanButton');
const blackSeaStory = document.querySelector('#blackSeaButton');
const mountainsStory = document.querySelector('#mountainsButton');
const riversStory = document.querySelector('#riversButton');

const slavMigrationStory = document.querySelector('#slavMigrationButton');
const bulgarMigrationStory = document.querySelector('#bulgarMigrationButton');
const avarStory = document.querySelector('#avarsButton');
const southSlavStory = document.querySelector('#southSlavMigrationButton')

const romeStory = document.querySelector('#romeStoryButton');
const balkansRomeStory = document.querySelector('#romeBalkansButton');

const theGreatSchismButton = document.querySelector('#theGreatSchismButton');
const easternOrthodoxButton = document.querySelector('#easternOrthodoxButton');
const bulgariaReligionButton = document.querySelector('#bulgariaReligionButton');
const albaniaReligionButton = document.querySelector('#albaniaReligionButton');
const serbiaReligionButton = document.querySelector('#serbiaReligionButton');
const bosnianReligionButton = document.querySelector('#bosnianReligionButton');
const hungarianReligionButton = document.querySelector('#hungarianReligionButton');
const romaniaReligionButton = document.querySelector('#romaniaReligionButton');
const croatSloveneReligionButton = document.querySelector('#croatSloveneReligionButton');
const turksButton = document.querySelector('#turksButton');
const dusanButton = document.querySelector('#dusanButton');

const ottomanStory = document.querySelector('#ottomanMightButton');
const ottomanBalkansStory = document.querySelector('#ottomanBalkansButton');
const austriaStory = document.querySelector('#austriaButton');

const illyriaMovement = document.querySelector('#illyriaMovementButton');
const croatianNationalism = document.querySelector('#croatianNationalismButton');
const sloveneNationalism = document.querySelector('#sloveneNationalismButton');

const freeGreeceStory = document.querySelector('#greeceFreeButton');
const austriaHungary = document.querySelector('#austriaHungaryButton');
const balkansRevolt = document.querySelector('#balkansRevoltButton');
const serbsRevolt = document.querySelector('#serbsRevoltButton');
const russoTurkishWar = document.querySelector('#russoTurkishWarButton');
const sanStefanoButton = document.querySelector('#sanStefanoButton');
const congressOfBerlin = document.querySelector('#congressOfBerlinButton');

const austriaAnnexesBosnia = document.querySelector('#austriaAnnexesBosniaButton');
const balkanWars1 = document.querySelector('#balkanWars1');
const balkanWars2 = document.querySelector('#balkanWars2');

const treatyOfWindsor = document.querySelector('#treatyOfWindsorButton');
const treatyOfLondonButton = document.querySelector('#treatyOfLondonButton');
const USWestEuropeFwendsButton = document.querySelector('#USWestEuropeFwendsButton');
const dualAllianceButton = document.querySelector('#dualAllianceButton');
const tripleAllianceButton = document.querySelector('#tripleAllianceButton');
const francoRussianButton = document.querySelector('#francoRussianButton');
const britishEntenteButton = document.querySelector('#britishEntenteButton');
const balkanLeagueButton = document.querySelector('#balkanLeagueStoryButton');

const closeButton = document.querySelector('#closeButton');
const closeLeftButton = document.querySelector('#closeLeftButton');
const closeLeftButtonAlliance = document.querySelector('#closeLeftButtonAlliance');
const closeRightButtonAlliance = document.querySelector('#closeRightButtonAlliance');

var r = document.querySelector(':root');

if(treatyOfWindsor){
    treatyOfWindsor.onclick = tellTreatyOfWindsor;
}

if(treatyOfLondonButton){
    treatyOfLondonButton.onclick = tellTreatyOfLondon;
}

if(USWestEuropeFwendsButton){
    USWestEuropeFwendsButton.onclick = tellUSWestEuropeFwends;
}

if(dualAllianceButton){
    dualAllianceButton.onclick = tellDualAlliance;
}

if(tripleAllianceButton){
    tripleAllianceButton.onclick = tellTripleAlliance;
}

if (francoRussianButton){
    francoRussianButton.onclick = tellFrancoRussianAlliance;
    britishEntenteButton.onclick = tellBritishEntente;
}

if (balkanLeagueButton){
    balkanLeagueButton.onclick = tellBalkanLeague;
}

if (crossroadsStory){
    crossroadsStory.onclick = tellCrossroadsStory;
    naturalResourcesStory.onclick = tellNaturalResourcesStory;
    religionStory.onclick = tellReligionStory;
    mediterraneanStory.onclick = tellMediterraneanStory;
    blackSeaStory.onclick = tellBlackSeaStory;
    mountainsStory.onclick = tellMountainsStory;
    riversStory.onclick = tellRiversStory;
}

if (romeStory){
    romeStory.onclick = tellRomeStory;
}
if (balkansRomeStory){
    balkansRomeStory.onclick = tellBalkansRomeStory;
}

if (slavMigrationStory){
    slavMigrationStory.onclick = tellSlavMigrationStory;
}
if (bulgarMigrationStory){
    bulgarMigrationStory.onclick = tellBulgarMigrationStory;
}
if (avarStory){
    avarStory.onclick = tellAvarStory;
}
if(southSlavStory){
    southSlavStory.onclick =tellSouthSlavStory;
}

if(closeLeftButton){
    closeLeftButton.onclick = closeDescription;
}



if(closeLeftButtonAlliance){
    closeLeftButtonAlliance.onclick = closeAllianceDescription;
}

if(closeRightButtonAlliance){
    closeRightButtonAlliance.onclick = closeAllianceDescription;
}

if(theGreatSchismButton){
    theGreatSchismButton.onclick = tellTheGreatSchism;
    easternOrthodoxButton.onclick = tellEasternEmpireReligion;
    bulgariaReligionButton.onclick = tellBulgariaReligion;
    albaniaReligionButton.onclick = tellAlbanianReligion;
    serbiaReligionButton.onclick = tellSerbiaReligion;
    bosnianReligionButton.onclick = tellBosnianReligion;
    hungarianReligionButton.onclick = tellHungarianReligion;
    romaniaReligionButton.onclick = tellRomanianReligion;
    croatSloveneReligionButton.onclick = tellCroatSloveneReligion;
    turksButton.onclick = tellTurks;
    dusanButton.onclick = tellDusan;
}

if (ottomanStory){
    ottomanStory.onclick = tellOttomanStory;
    ottomanBalkansStory.onclick = tellOttomanBalkansStory;
    austriaStory.onclick = tellAustriaStory;
}

if (illyriaMovement){
    illyriaMovement.onclick = tellIllyriaMovementStory;
    croatianNationalism.onclick = tellCroatianNationalismStory;
    sloveneNationalism.onclick = tellSloveneNationalismStory;
}

if (freeGreeceStory){
    freeGreeceStory.onclick = tellFreeGreeceStory;
    austriaHungary.onclick = tellAustriaHungary;
    balkansRevolt.onclick = tellBalkansRevolt;
    serbsRevolt.onclick = tellSerbsRevolt;
    russoTurkishWar.onclick = tellRussoTurkishWar;
    sanStefanoButton.onclick = tellSanStefano;
    congressOfBerlin.onclick = tellCongressOfBerlin;
}

if (austriaAnnexesBosnia){
    austriaAnnexesBosnia.onclick = tellAustriaAnnexesBosnia;
    balkanWars1.onclick = tellBalkanWars1;
    balkanWars2.onclick = tellBalkanWars2;
}

if(closeButton){
    closeButton.onclick = closeDescription;
}

nationalism.onclick = patriots;
clanism.onclick = medieval;
nation.onclick = enlighten;
napoleon.onclick = thereIsNothingWeCanDo;
unification.onclick = bismarckXcavor;
imperialism1.onclick = africa;
imperialism2.onclick = asia;
nationalBalkans.onclick = independence;
pridefear.onclick = proudAndFearful;

alliances.onclick = theWeb;
britishPortuguese.onclick = allyAngloPortguese;
britishBelgianFriendship.onclick = friendBritainBelgium;
americanWesternEuropeFriendship.onclick = friendAmericaEurope;
dual.onclick = allyGermanyAustria;
triple.onclick = allyDualItaly;
entente.onclick = allyEntente;
balkanLeague.onclick = allyBalkans;

powderkeg.onclick = lightFuse;
romanEmpire.onclick = dominantRomans;
slavInvasion.onclick = immigrateSlavs;
serbianEmpire.onclick = riseOfSerbia;
ottomanEmpire.onclick = riseOfOttomans;
illyria.onclick = riseOfIllyrial;
ottomanDecline.onclick = declineOfOttomans;
balkans.onclick = balkanWars;
annexBosnia.onclick = annexationOfBosnia;
//assassination.onclick = assassinationOfFranzFerdinand;


function patriots(){
    r.style.setProperty('--clanismButtonVisibility', 'initial');
    r.style.setProperty('--nationButtonVisibility', 'none');
    r.style.setProperty('--napoleonButtonVisibility', 'none');
    r.style.setProperty('--unificationButtonVisibility', 'none');
    r.style.setProperty('--imperialism1ButtonVisibility', 'none');
    r.style.setProperty('--imperialism2ButtonVisibility', 'none');
    r.style.setProperty('--nationalBalkansButtonVisibility', 'none');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function medieval(){
    r.style.setProperty('--nationButtonVisibility', 'initial');
    r.style.setProperty('--napoleonButtonVisibility', 'none');
    r.style.setProperty('--unificationButtonVisibility', 'none');
    r.style.setProperty('--imperialism1ButtonVisibility', 'none');
    r.style.setProperty('--imperialism2ButtonVisibility', 'none');
    r.style.setProperty('--nationalBalkansButtonVisibility', 'none');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function enlighten(){
    r.style.setProperty('--napoleonButtonVisibility', 'initial');
    r.style.setProperty('--unificationButtonVisibility', 'none');
    r.style.setProperty('--imperialism1ButtonVisibility', 'none');
    r.style.setProperty('--imperialism2ButtonVisibility', 'none');
    r.style.setProperty('--nationalBalkansButtonVisibility', 'none');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function thereIsNothingWeCanDo(){
    r.style.setProperty('--unificationButtonVisibility', 'initial');
    r.style.setProperty('--imperialism1ButtonVisibility', 'none');
    r.style.setProperty('--imperialism2ButtonVisibility', 'none');
    r.style.setProperty('--nationalBalkansButtonVisibility', 'none');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function bismarckXcavor(){
    r.style.setProperty('--imperialism1ButtonVisibility', 'initial');
    r.style.setProperty('--imperialism2ButtonVisibility', 'none');
    r.style.setProperty('--nationalBalkansButtonVisibility', 'none');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function africa(){
    r.style.setProperty('--imperialism2ButtonVisibility', 'initial');
    r.style.setProperty('--nationalBalkansButtonVisibility', 'none');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function asia(){
    r.style.setProperty('--nationalBalkansButtonVisibility', 'initial');
    r.style.setProperty('--pridefearButtonVisibility', 'none');

    
}

function independence(){
    r.style.setProperty('--pridefearButtonVisibility', 'initial');

   
}

function proudAndFearful(){

    
}

function theWeb(){
    r.style.setProperty('--britishPortugueseButtonVisibility', 'initial');
    r.style.setProperty('--britishBelgianFriendshipVisibility', 'none');
    r.style.setProperty('--americanWesternEuropeFriendshipVisibility', 'none');
    r.style.setProperty('--dualButtonVisibility', 'none');
    r.style.setProperty('--tripleButtonVisibility', 'none');
    r.style.setProperty('--ententeButtonVisibility', 'none');
    r.style.setProperty('--balkanLeagueButtonVisibility', 'none');

    r.style.setProperty('--allianceIntroDisplay', 'initial');
    r.style.setProperty('--angloPortugueseAllianceDisplay', 'none');
    r.style.setProperty('--treatyOfLondonDisplay', 'none');
    r.style.setProperty('--USWestEuropeFwendsDisplay', 'none');
    r.style.setProperty('--dualAllianceDisplay', 'none');
    r.style.setProperty('--tripleAllianceDisplay', 'none');
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'none');

    
}

function allyAngloPortguese(){
    r.style.setProperty('--britishBelgianFriendshipVisibility', 'initial');
    r.style.setProperty('--americanWesternEuropeFriendshipVisibility', 'none');
    r.style.setProperty('--dualButtonVisibility', 'none');
    r.style.setProperty('--tripleButtonVisibility', 'none');
    r.style.setProperty('--ententeButtonVisibility', 'none');
    r.style.setProperty('--balkanLeagueButtonVisibility', 'none');

    r.style.setProperty('--allianceIntroDisplay', 'none');
    r.style.setProperty('--angloPortugueseAllianceDisplay', 'initial');
    r.style.setProperty('--treatyOfLondonDisplay', 'none');
    r.style.setProperty('--USWestEuropeFwendsDisplay', 'none');
    r.style.setProperty('--dualAllianceDisplay', 'none');
    r.style.setProperty('--tripleAllianceDisplay', 'none');
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'none');

    closeAllianceDescription();
}

function friendBritainBelgium(){
    r.style.setProperty('--americanWesternEuropeFriendshipVisibility', 'initial');
    r.style.setProperty('--dualButtonVisibility', 'none');
    r.style.setProperty('--tripleButtonVisibility', 'none');
    r.style.setProperty('--ententeButtonVisibility', 'none');
    r.style.setProperty('--balkanLeagueButtonVisibility', 'none');

    r.style.setProperty('--angloPortugueseAllianceDisplay', 'none');
    r.style.setProperty('--treatyOfLondonDisplay', 'initial');
    r.style.setProperty('--USWestEuropeFwendsDisplay', 'none');
    r.style.setProperty('--dualAllianceDisplay', 'none');
    r.style.setProperty('--tripleAllianceDisplay', 'none');
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'none');
    
    closeAllianceDescription();
}

function friendAmericaEurope(){
    r.style.setProperty('--dualButtonVisibility', 'initial');
    r.style.setProperty('--tripleButtonVisibility', 'none');
    r.style.setProperty('--ententeButtonVisibility', 'none');
    r.style.setProperty('--balkanLeagueButtonVisibility', 'none');
    
    r.style.setProperty('--treatyOfLondonDisplay', 'none');
    r.style.setProperty('--USWestEuropeFwendsDisplay', 'initial');
    r.style.setProperty('--dualAllianceDisplay', 'none');
    r.style.setProperty('--tripleAllianceDisplay', 'none');
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'none');

    closeAllianceDescription();
}

function allyGermanyAustria(){
    r.style.setProperty('--tripleButtonVisibility', 'initial');
    r.style.setProperty('--ententeButtonVisibility', 'none');
    r.style.setProperty('--balkanLeagueButtonVisibility', 'none');

    r.style.setProperty('--USWestEuropeFwendsDisplay', 'none');
    r.style.setProperty('--dualAllianceDisplay', 'initial');
    r.style.setProperty('--tripleAllianceDisplay', 'none');
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'none');

    closeAllianceDescription();
}

function allyDualItaly(){
    r.style.setProperty('--ententeButtonVisibility', 'initial');
    r.style.setProperty('--balkanLeagueButtonVisibility', 'none');

    r.style.setProperty('--dualAllianceDisplay', 'none');
    r.style.setProperty('--tripleAllianceDisplay', 'initial');
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'none');

    closeAllianceDescription();
}

function allyEntente(){
    r.style.setProperty('--balkanLeagueButtonVisibility', 'initial');

    r.style.setProperty('--tripleAllianceDisplay', 'none');
    r.style.setProperty('--tripleEntenteDisplay', 'initial');
    r.style.setProperty('--balkanLeagueDisplay', 'none');

    closeAllianceDescription();
}

function allyBalkans(){
    r.style.setProperty('--tripleEntenteDisplay', 'none');
    r.style.setProperty('--balkanLeagueDisplay', 'initial');

    closeAllianceDescription();
}

function lightFuse(){
    r.style.setProperty('--romeButtonVisibility', 'initial');
    r.style.setProperty('--slavButtonVisibility', 'none');
    r.style.setProperty('--serbiaButtonVisibility', 'none');
    r.style.setProperty('--ottomanButtonVisibility', 'none');
    r.style.setProperty('--ottomanFallButtonVisibility', 'none');
    r.style.setProperty('--balkansButtonVisibility', 'none');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');
    r.style.setProperty('--illyriaButtonVisibility', 'none');

    r.style.setProperty('--theBalkansDisplay', 'initial');
    r.style.setProperty('--theRomanEmpireDisplay', 'none');
    r.style.setProperty('--theSlavInvasionsDisplay', 'none');
    r.style.setProperty('--riseSerbiaDisplay', 'none');
    r.style.setProperty('--riseOttomansDisplay', 'none');
    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');
    r.style.setProperty('--illyriaDisplay', 'none');

    r.style.setProperty('--iconButtonBalkansDisplay', 'initial')
    r.style.setProperty('--iconButtonSlavsDisplay', 'none');
    r.style.setProperty('--iconRomeBalkansDisplay', 'none');
    r.style.setProperty('--iconMedievalBalkansDisplay', 'none');
    r.style.setProperty('--iconIllyriaDisplay', 'none');

    closeDescription();
}

function dominantRomans(){
    r.style.setProperty('--theBalkansDisplay', 'none');
    r.style.setProperty('--slavButtonVisibility', 'initial');
    r.style.setProperty('--serbiaButtonVisibility', 'none');
    r.style.setProperty('--ottomanButtonVisibility', 'none');
    r.style.setProperty('--ottomanFallButtonVisibility', 'none');
    r.style.setProperty('--balkansButtonVisibility', 'none');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');
    r.style.setProperty('--illyriaButtonVisibility', 'none');

    r.style.setProperty('--theRomanEmpireDisplay', 'initial');
    r.style.setProperty('--theSlavInvasionsDisplay', 'none');
    r.style.setProperty('--riseSerbiaDisplay', 'none');
    r.style.setProperty('--riseOttomansDisplay', 'none');
    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');
    r.style.setProperty('--illyriaDisplay', 'none');

    r.style.setProperty('--iconButtonBalkansDisplay', 'none');
    r.style.setProperty('--iconButtonSlavsDisplay', 'none');
    r.style.setProperty('--iconRomeBalkansDisplay', 'initial');
    r.style.setProperty('--iconMedievalBalkansDisplay', 'none');
    r.style.setProperty('--iconOttomanBalkansDisplay', 'none');
    r.style.setProperty('--iconIllyriaDisplay', 'none');

    closeDescription();
}

function immigrateSlavs(){
    r.style.setProperty('--serbiaButtonVisibility', 'initial');
    r.style.setProperty('--ottomanButtonVisibility', 'none');
    r.style.setProperty('--ottomanFallButtonVisibility', 'none');
    r.style.setProperty('--balkansButtonVisibility', 'none');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');
    r.style.setProperty('--illyriaButtonVisibility', 'none');
    
    r.style.setProperty('--theRomanEmpireDisplay', 'none');
    r.style.setProperty('--theSlavInvasionsDisplay', 'initial');
    r.style.setProperty('--riseSerbiaDisplay', 'none');
    r.style.setProperty('--riseOttomansDisplay', 'none');
    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');
    r.style.setProperty('--illyriaDisplay', 'none');

    r.style.setProperty('--iconButtonSlavsDisplay', 'initial');
    r.style.setProperty('--iconRomeBalkansDisplay', 'none');
    r.style.setProperty('--iconMedievalBalkansDisplay', 'none');
    r.style.setProperty('--iconOttomanBalkansDisplay', 'none');
    r.style.setProperty('--iconIllyriaDisplay', 'none');

    closeDescription();
}

function riseOfSerbia(){;
    r.style.setProperty('--ottomanButtonVisibility', 'initial');
    r.style.setProperty('--ottomanFallButtonVisibility', 'none');
    r.style.setProperty('--balkansButtonVisibility', 'none');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');
    
    r.style.setProperty('--theSlavInvasionsDisplay', 'none');
    r.style.setProperty('--riseSerbiaDisplay', 'initial');
    r.style.setProperty('--riseOttomansDisplay', 'none');
    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');
    r.style.setProperty('--illyriaDisplay', 'none');

    r.style.setProperty('--iconButtonSlavsDisplay', 'none');
    r.style.setProperty('--iconMedievalBalkansDisplay', 'inital');

    r.style.setProperty('--descriptionsDisplay', 'initial');
    r.style.setProperty('--slavMigrationStoryDisplay', 'initial');
    r.style.setProperty('--iconOttomanBalkansDisplay', 'none');
    r.style.setProperty('--iconIllyriaDisplay', 'none');

    closeDescription();
}

function riseOfOttomans(){
    r.style.setProperty('--illyriaButtonVisibility', 'initial');
    r.style.setProperty('--ottomanFallButtonVisibility', 'none');
    r.style.setProperty('--balkansButtonVisibility', 'none');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');
    
    r.style.setProperty('--riseSerbiaDisplay', 'none');
    r.style.setProperty('--riseOttomansDisplay', 'initial');
    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');
    r.style.setProperty('--illyriaDisplay', 'none');

    r.style.setProperty('--iconMedievalBalkansDisplay', 'none');
    r.style.setProperty('--iconOttomanBalkansDisplay', 'initial');
    r.style.setProperty('--iconIllyriaDisplay', 'none');

    closeDescription();
}

function riseOfIllyrial(){
    r.style.setProperty('--ottomanFallButtonVisibility', 'initial');
    r.style.setProperty('--balkansButtonVisibility', 'none');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');

    r.style.setProperty('--riseOttomansDisplay', 'none');
    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--illyriaDisplay', 'initial');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');

    r.style.setProperty('--iconIllyriaDisplay', 'initial');
    r.style.setProperty('--iconOttomanBalkansDisplay', 'none');

    closeDescription();
}

function declineOfOttomans(){
    r.style.setProperty('--balkansButtonVisibility', 'initial');
    r.style.setProperty('--annexBosniaButtonVisibility', 'none');
    r.style.setProperty('--assassinationButtonVisibility', 'none');
    
    r.style.setProperty('--riseOttomansDisplay', 'none');
    r.style.setProperty('--declineOttomansDisplay', 'initial');
    r.style.setProperty('--illyriaDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'none');

    r.style.setProperty('--iconIllyriaDisplay', 'none');

    closeDescription();
}

function balkanWars(){
    r.style.setProperty('--annexBosniaButtonVisibility', 'initial');
    r.style.setProperty('--assassinationButtonVisibility', 'none');

    r.style.setProperty('--declineOttomansDisplay', 'none');
    r.style.setProperty('--balkanWarsDisplay', 'initial');
    r.style.setProperty('--annexBosniaDisplay', 'none');

    closeDescription();
}

function annexationOfBosnia(){
    //r.style.setProperty('--assassinationButtonVisibility', 'initial');
    
    r.style.setProperty('--balkanWarsDisplay', 'none');
    r.style.setProperty('--annexBosniaDisplay', 'initial');

    closeDescription();
}

/*function assassinationOfFranzFerdinand(){  

    closeDescription();
}*/

function tellCrossroadsStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--crossroadsStoryDisplay', 'initial');
    r.style.setProperty('--mediterraneanStoryDisplay', 'none');
    r.style.setProperty('--mountainsStoryDisplay', 'none');
}

function tellNaturalResourcesStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--naturalResourcesStoryDisplay', 'initial');
    r.style.setProperty('--religionStoryDisplay', 'none');
}

function tellReligionStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--naturalResourcesStoryDisplay', 'none');
    r.style.setProperty('--religionStoryDisplay', 'initial');
}

function tellMediterraneanStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--mediterraneanStoryDisplay', 'initial');
    r.style.setProperty('--crossroadsStoryDisplay', 'none');
    r.style.setProperty('--mountainsStoryDisplay', 'none');
}

function tellBlackSeaStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--naturalResourcesStoryDisplay', 'none');
    r.style.setProperty('--religionStoryDisplay', 'none');
    r.style.setProperty('--blackSeaStoryDisplay', 'initial');
    r.style.setProperty('--riversStoryDisplay', 'none');
}

function tellMountainsStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--mediterraneanStoryDisplay', 'none');
    r.style.setProperty('--crossroadsStoryDisplay', 'none');
    r.style.setProperty('--mountainsStoryDisplay', 'initial');

}

function tellRiversStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--naturalResourcesStoryDisplay', 'none');
    r.style.setProperty('--religionStoryDisplay', 'none');
    r.style.setProperty('--blackSeaStoryDisplay', 'none');
    r.style.setProperty('--riversStoryDisplay', 'initial');
}

function tellRomeStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--romeStoryDisplay', 'initial');
}

function tellBalkansRomeStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--balkansRomeStoryDisplay', 'initial');
}

function tellSlavMigrationStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--slavMigrationStoryDisplay', 'initial');
    r.style.setProperty('--bulgarMigrationStoryDisplay', 'none');
}

function tellBulgarMigrationStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--bulgarMigrationStoryDisplay', 'initial');
    r.style.setProperty('--slavMigrationStoryDisplay', 'none');
}

function tellAvarStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--avarStoryDisplay', 'initial');
    r.style.setProperty('--southSlavStoryDisplay', 'none');
}

function tellSouthSlavStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--avarStoryDisplay', 'none');
    r.style.setProperty('--southSlavStoryDisplay', 'initial');
}

function tellTheGreatSchism() {
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--theGreatSchismStoryDisplay', 'initial');
    r.style.setProperty('--easternEmpireReligionDisplay', 'none');
    r.style.setProperty('--bulgariaReligionDisplay', 'none');
    r.style.setProperty('--vlachsReligionDisplay', 'none');
    r.style.setProperty('--turksReligionDisplay', 'none');
}

function tellEasternEmpireReligion() {
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--theGreatSchismStoryDisplay', 'none');
    r.style.setProperty('--easternEmpireReligionDisplay', 'initial');
    r.style.setProperty('--bulgariaReligionDisplay', 'none');
    r.style.setProperty('--vlachsReligionDisplay', 'none');
    r.style.setProperty('--turksReligionDisplay', 'none');
}

function tellBulgariaReligion() {
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--theGreatSchismStoryDisplay', 'none');
    r.style.setProperty('--easternEmpireReligionDisplay', 'none');
    r.style.setProperty('--bulgariaReligionDisplay', 'initial');
    r.style.setProperty('--vlachsReligionDisplay', 'none');
    r.style.setProperty('--turksReligionDisplay', 'none');
}

function tellAlbanianReligion() {
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--albaniaReligionDisplay', 'initial');
    r.style.setProperty('--serbiaReligionDisplay', 'none');
    r.style.setProperty('--bosnianReligionDisplay', 'none');
    r.style.setProperty('--hungarianReligionDisplay', 'none');
    r.style.setProperty('--croatSloveneReligionDisplay', 'none');
    r.style.setProperty('--dusanStoryDisplay', 'none');
}

function tellSerbiaReligion() {
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--albaniaReligionDisplay', 'none');
    r.style.setProperty('--serbiaReligionDisplay', 'initial');
    r.style.setProperty('--bosnianReligionDisplay', 'none');
    r.style.setProperty('--hungarianReligionDisplay', 'none');
    r.style.setProperty('--croatSloveneReligionDisplay', 'none');
    r.style.setProperty('--dusanStoryDisplay', 'none');
}

function tellBosnianReligion() {
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--albaniaReligionDisplay', 'none');
    r.style.setProperty('--serbiaReligionDisplay', 'none');
    r.style.setProperty('--bosnianReligionDisplay', 'initial');
    r.style.setProperty('--hungarianReligionDisplay', 'none');
    r.style.setProperty('--croatSloveneReligionDisplay', 'none');
    r.style.setProperty('--dusanStoryDisplay', 'none');
}

function tellHungarianReligion() {
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--albaniaReligionDisplay', 'none');
    r.style.setProperty('--serbiaReligionDisplay', 'none');
    r.style.setProperty('--bosnianReligionDisplay', 'none');
    r.style.setProperty('--hungarianReligionDisplay', 'initial');
    r.style.setProperty('--croatSloveneReligionDisplay', 'none');
    r.style.setProperty('--dusanStoryDisplay', 'none');
}

function tellRomanianReligion() {
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--theGreatSchismStoryDisplay', 'none');
    r.style.setProperty('--easternEmpireReligionDisplay', 'none');
    r.style.setProperty('--bulgariaReligionDisplay', 'none');
    r.style.setProperty('--vlachsReligionDisplay', 'initial');
    r.style.setProperty('--turksReligionDisplay', 'none');
}

function tellCroatSloveneReligion() {
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--albaniaReligionDisplay', 'none');
    r.style.setProperty('--serbiaReligionDisplay', 'none');
    r.style.setProperty('--bosnianReligionDisplay', 'none');
    r.style.setProperty('--hungarianReligionDisplay', 'none');
    r.style.setProperty('--croatSloveneReligionDisplay', 'initial');
    r.style.setProperty('--dusanStoryDisplay', 'none');
}

function tellTurks() {
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--theGreatSchismStoryDisplay', 'none');
    r.style.setProperty('--easternEmpireReligionDisplay', 'none');
    r.style.setProperty('--bulgariaReligionDisplay', 'none');
    r.style.setProperty('--vlachsReligionDisplay', 'none');
    r.style.setProperty('--turksReligionDisplay', 'initial');
}

function tellDusan() {
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--albaniaReligionDisplay', 'none');
    r.style.setProperty('--serbiaReligionDisplay', 'none');
    r.style.setProperty('--bosnianReligionDisplay', 'none');
    r.style.setProperty('--hungarianReligionDisplay', 'none');
    r.style.setProperty('--croatSloveneReligionDisplay', 'none');
    r.style.setProperty('--dusanStoryDisplay', 'initial');
}

function tellOttomanStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--ottomanEmpireStoryDisplay', 'initial');
    r.style.setProperty('--balkansUnderOttomansStoryDisplay', 'none');
}

function tellOttomanBalkansStory(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--balkansUnderOttomansStoryDisplay', 'initial');
    r.style.setProperty('--ottomanEmpireStoryDisplay', 'none');
}

function tellAustriaStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--austriaStoryDisplay', 'initial');
}

function tellIllyriaMovementStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--illyriaAndPanSlavismStoryDisplay', 'initial');
    r.style.setProperty('--croatianNationalismStoryDisplay', 'none');
    r.style.setProperty('--sloveneNationalismStoryDisplay', 'none');
}

function tellCroatianNationalismStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--illyriaAndPanSlavismStoryDisplay', 'none');
    r.style.setProperty('--croatianNationalismStoryDisplay', 'initial');
    r.style.setProperty('--sloveneNationalismStoryDisplay', 'none');
}

function tellSloveneNationalismStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--illyriaAndPanSlavismStoryDisplay', 'none');
    r.style.setProperty('--croatianNationalismStoryDisplay', 'none');
    r.style.setProperty('--sloveneNationalismStoryDisplay', 'initial');
}

function tellFreeGreeceStory(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--freeGreeceStoryDisplay', 'initial');
    r.style.setProperty('--austriaHungaryStoryDisplay', 'none');
    r.style.setProperty('--serbsRevoltStoryDisplay', 'none');
    r.style.setProperty('--congressOfBerlinStoryDisplay', 'none');
}

function tellAustriaHungary(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--freeGreeceStoryDisplay', 'none');
    r.style.setProperty('--austriaHungaryStoryDisplay', 'initial');
    r.style.setProperty('--serbsRevoltStoryDisplay', 'none');
    r.style.setProperty('--congressOfBerlinStoryDisplay', 'none');
}

function tellBalkansRevolt(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--balkansRevoltStoryDisplay', 'initial');
    r.style.setProperty('--russoTurkishWarStoryDisplay', 'none');
    r.style.setProperty('--sanStefanoStoryDisplay', 'none');
}

function tellSerbsRevolt(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--freeGreeceStoryDisplay', 'none');
    r.style.setProperty('--austriaHungaryStoryDisplay', 'none');
    r.style.setProperty('--serbsRevoltStoryDisplay', 'initial');
    r.style.setProperty('--congressOfBerlinStoryDisplay', 'none');
}

function tellRussoTurkishWar(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--balkansRevoltStoryDisplay', 'none');
    r.style.setProperty('--russoTurkishWarStoryDisplay', 'initial');
    r.style.setProperty('--sanStefanoStoryDisplay', 'none');
}

function tellSanStefano(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--balkansRevoltStoryDisplay', 'none');
    r.style.setProperty('--russoTurkishWarStoryDisplay', 'none');
    r.style.setProperty('--sanStefanoStoryDisplay', 'initial');
}

function tellCongressOfBerlin(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--freeGreeceStoryDisplay', 'none');
    r.style.setProperty('--austriaHungaryStoryDisplay', 'none');
    r.style.setProperty('--serbsRevoltStoryDisplay', 'none');
    r.style.setProperty('--congressOfBerlinStoryDisplay', 'initial');
}

function tellAustriaAnnexesBosnia(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--austriaAnnexesBosniaStoryDisplay', 'initial');
    r.style.setProperty('--balkanWars1StoryDisplay', 'none');
}

function tellBalkanWars1(){
    r.style.setProperty('--descriptionsLeftDisplay', 'initial');
    r.style.setProperty('--austriaAnnexesBosniaStoryDisplay', 'none');
    r.style.setProperty('--balkanWars1StoryDisplay', 'initial');
}

function tellBalkanWars2(){
    r.style.setProperty('--descriptionsRightDisplay', 'initial');
    r.style.setProperty('--balkanWars2StoryDisplay', 'initial');
}

function closeDescription(){
    r.style.setProperty('--descriptionsRightDisplay', 'none');
    r.style.setProperty('--descriptionsLeftDisplay', 'none');

    r.style.setProperty('--crossroadsStoryDisplay', 'none');
    r.style.setProperty('--crossroadsStoryDisplay', 'none');
    r.style.setProperty('--mountainsStoryDisplay', 'none');
    r.style.setProperty('--naturalResourcesStoryDisplay', 'none');
    r.style.setProperty('--religionStoryDisplay', 'none');
    r.style.setProperty('--blackSeaStoryDisplay', 'none');
    r.style.setProperty('--riversStoryDisplay', 'none');

    r.style.setProperty('--slavMigrationStoryDisplay', 'none');
    r.style.setProperty('--bulgarMigrationStoryDisplay', 'none');
    r.style.setProperty('--avarStoryDisplay', 'none');
    r.style.setProperty('--southSlavStoryDisplay', 'none');

    r.style.setProperty('--romeStoryDisplay', 'none');
    r.style.setProperty('--balkansRomeStoryDisplay', 'none');

    r.style.setProperty('--theGreatSchismStoryDisplay', 'none');
    r.style.setProperty('--easternEmpireReligionDisplay', 'none');
    r.style.setProperty('--bulgariaReligionDisplay', 'none');
    r.style.setProperty('--turksReligionDisplay', 'none');
    r.style.setProperty('--vlachsReligionDisplay', 'none');
    r.style.setProperty('--albaniaReligionDisplay', 'none');
    r.style.setProperty('--serbiaReligionDisplay', 'none');
    r.style.setProperty('--bosnianReligionDisplay', 'none');
    r.style.setProperty('--hungarianReligionDisplay', 'none');
    r.style.setProperty('--croatSloveneReligionDisplay', 'none');
    r.style.setProperty('--dusanStoryDisplay', 'none');

    r.style.setProperty('--ottomanEmpireStoryDisplay', 'none');
    r.style.setProperty('--balkansUnderOttomansStoryDisplay', 'none');
    r.style.setProperty('--austriaStoryDisplay', 'none');

    r.style.setProperty('--illyriaAndPanSlavismStoryDisplay', 'none');
    r.style.setProperty('--croatianNationalismStoryDisplay', 'none');
    r.style.setProperty('--sloveneNationalismStoryDisplay', 'none');

    r.style.setProperty('--freeGreeceStoryDisplay', 'none');
    r.style.setProperty('--austriaHungaryStoryDisplay', 'none');
    r.style.setProperty('--serbsRevoltStoryDisplay', 'none');
    r.style.setProperty('--congressOfBerlinStoryDisplay', 'none');
    r.style.setProperty('--balkansRevoltStoryDisplay', 'none');
    r.style.setProperty('--russoTurkishWarStoryDisplay', 'none');
    r.style.setProperty('--sanStefanoStoryDisplay', 'none');

    r.style.setProperty('--austriaAnnexesBosniaStoryDisplay', 'none');
    r.style.setProperty('--balkanWars1StoryDisplay', 'none');
    r.style.setProperty('--balkanWars2StoryDisplay', 'none');
}

function tellTreatyOfWindsor(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'initial');
    r.style.setProperty('--angloPortugueseAllianceStoryDisplay', 'initial');
    console.log("Buttonclicked");
}

function tellTreatyOfLondon(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'initial');
    r.style.setProperty('--treatyOfLondonStoryDisplay', 'initial');
}

function tellUSWestEuropeFwends(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'initial');
    r.style.setProperty('--americaTiesStoryDisplay', 'initial');
}

function tellDualAlliance(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'initial');
    r.style.setProperty('--dualAllianceStoryDisplay', 'initial');
}

function tellTripleAlliance(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'initial');
    r.style.setProperty('--tripleAllianceStoryDisplay', 'initial');
    console.log("TripleAllies");
}

function tellFrancoRussianAlliance(){
    r.style.setProperty('--descriptionsAlliancesLeftDisplay', 'initial');
    r.style.setProperty('--francoRussianAllianceStoryDisplay', 'initial');
}

function tellBritishEntente(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'initial');
    r.style.setProperty('--tripleEntenteStoryDisplay', 'initial');
}

function tellBalkanLeague(){
    r.style.setProperty('--descriptionsAlliancesLeftDisplay', 'initial');
    r.style.setProperty('--balkanLeagueStoryDisplay', 'initial');
}

function closeAllianceDescription(){
    r.style.setProperty('--descriptionsAlliancesRightDisplay', 'none');
    r.style.setProperty('--descriptionsAlliancesLeftDisplay', 'none');

    r.style.setProperty('--angloPortugueseAllianceStoryDisplay', 'none');
    r.style.setProperty('--treatyOfLondonStoryDipslay', 'none');
    r.style.setProperty('--americaTiesStoryDisplay', 'none');
    r.style.setProperty('--dualAllianceStoryDisplay', 'none');
    r.style.setProperty('--tripleAllianceStoryDisplay', 'none');
    r.style.setProperty('--francoRussianAllianceStoryDisplay', 'none');
    r.style.setProperty('--tripleEntenteStoryDisplay', 'none');
    r.style.setProperty('--balkanLeagueStoryDisplay', 'none');
}
