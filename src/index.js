import './intro.js';
import './timeline.js';
import './dialogue.js';

/*
  Provide Objects to the timeline component. This could be done in html, but is much simpler in JavaScript.
*/
const timeline = document.querySelector('ww-timeline');

timeline.start = new Date(1914, 6, 28);
timeline.end = new Date(1918, 10, 11);
timeline.items = [
  {
    title: 'Canada\'s Entry',
    date: new Date(1914, 6, 28),
    image: './img/war.jpg',
    body: 'At the time, Canada’s foreign affairs was handled by the british government, and so when the UK went to war, so did the rest of the British Empire, including Canada. At first, WW1 united Anglophone and Francophone Canadians, but that changed with conscription in 1917. Anglophone Canadians were generally on board with the idea, and supported fighting for the crown, but Francophones were not so happy about it. By the time conscription actually started in 1918, though, the war was almost over and only a very small number of conscripts ever made it to France. The lasting impact of conscription, however, was another divide between Anglophone and Francophone Canadians, and a feeling of betrayal in Francophone Canadians.'
  },
  {
    title: 'The Second Battle of Ypres',
    date: new Date(1915, 3, 22),
    image: './img/ypres.jpg',
    body: 'On 22 April, two Canadian brigades were in the front lines, with a third in reserve. At 5 p.m., the Germans released gas against the French 45th Division to the Canadians’ left. An enormous green-yellow gas cloud, several kilometres long, drifted towards the French lines. When it rolled over their positions, French troops suffering from their eyes and throats burning from the chlorine. Most of the gas missed the Canadians, but the French retreat had exposed the Canadian’s left flank, and potentially threatened the Allied position. General Alderson’s units shifted positions to cover the gap, but the German gas attack had torn a huge hole, several kilometres wide, in the Allied line. From 22 April to 25 April, the Canadians fought to defend this exposed position. Outnumbered, outgunned, and outflanked, on the 24th they faced a second, this time direct, chlorine gas attack. The Canadians counterattacked to stall the German advance, and then slowly gave ground, buying precious time for British troops to be rushed forward.'
  },
  {
    title: 'Battle of Festubert',
    date: new Date(1915, 4, 15),
    image: './img/festubert.jpg'
  },
  {
    title: 'Battle St. Eloi Craters',
    date: new Date(1916, 2, 27),
    image: './img/eloi.jpg',
    body_image: './img/eloi2.jpg',
    body: 'The battle of St. Eloi Craters was fought from March 27th to April 16th in 1916. The battle involved the Canadian Second Division, and was the first battle many young Canadian soldiers fought. The purpose of the battle was for the British and Canadians to take back Belgian land, and weaken German defences. At the time of the battle, mine warfare was crucial for victories. British forces had planted many bombs in trenches and tunnels in the fields near the Belgian town of St. Eloi. These bombs created “craters”, which were used to gain land and advance towards the enemy. Later, the “craters” became filled with water and made seeking cover in their shelter extremely difficult. On April 4th, 1916, the Canadians relieved the exhausted British soldiers  from their positions and joined the battle. The Canadians found that there was a shortage of supplies, such as helmets, defense positions and machine guns. They were also unclear about their roles and the enemy’s position. On April 6th the Germans lead a large attack on the main road, and were able to recapture all the ground they had lost in the battle. The Canadians continued to fight but were unable to make progress in regaining land. The Germans attacked Canadians with tear gas, machine guns and rifles. The battle of St. Eloi was extremely dangerous, as communication was limited and heavy rainfall made fighting much more difficult. The battle ended on April 16th 1916 with 1370 Canadian casualties, and the Germans having control over the battlefield. '
  },
  {
    title: 'Battle Mount Sorrel',
    date: new Date(1916, 5, 2),
    image: './img/sorrel.jpg',
    body: 'The battle of Mount Sorrel went from June second to the thirteenth in 1916 and cost over 8000 casualties. The Canadian Corps held the southern part of the Ypres Salient in the summer of 1916. The Germans wanted to secure the last remaining highgrounds still in British hands and sought to divert allied resources from the large offensive that was being prepared in  the Somme region. The morning of June 2nd hundreds were killed when the Germans bombarded the third Canadian division including the division’s commander. Canadian positions were captured by German infantry on Mount Sorrel and two surrounding hills. On June 3rd Canadians failed a counterattack. Three days later the Germans blew up four mines under Canadian positions, capturing the village of Hooge. Sir Julian Byng, a Candian Corps commander, recaptured a large amount of stolen land with heavy artillery bombardment. Careful planning and concentrated artillery bombardment worked over the Germans entrenched defense. After losing the first two phases of the battle, the Canadians achieved final victory.'
  },
  {
    title: 'The Battle of the Somme',
    date: new Date(1916, 10, 18),
    image: './img/somme.jpg',
    body: 'The Somme was one of the war’s longest attritional campaigns, and remains a source of great historical controversy. Critics suggest that ineffective British commanders ordered their soldiers forward in costly and relentless attacks, giving them neither proper weapons nor effective tactics to break through the enemy trenches. Other historians suggest barely anything else could have been done at this stage in the war to achieve victory, and that the attrition of German troops along the Somme eased enough pressure from the French at Verdun to ensure the Allied front did not collapse in 1916. French demands for help forced the British to attack before they were ready. Without enough heavy artillery or shells to suppress enemy fire, the British suffered many casualties.'
  },
  {
    title: 'Vimy Ridge',
    date: new Date(1917, 3, 9),
    image: './img/vimy.jpg',
    body: 'The Battle of Vimy Ridge took place in the Nord-Pas-de-Calais region of France. Four Canadian divisions assaulted the ridge in the early morning of April 9th 1917 which was the first time all four divisions attacked together. Over 15000 Canadian infantry overran the Germans along the front. 3598 Canadians were killed and another 7000 were injured during the attack. Engineers dug tunnels from the rear to the front of the ridge to bring men forward safely for the attack. The infantry was able to keep moving forward under heavy fire and even when officers died due to the bravery of the men and a well strategized plan. The infantry was given specialist roles like machine gunners, rifle men and grenade throwers which helped provide a strong battlefront. The battle lasted three days, many lives were lost, but Canada came out victorious. The capture of Vimy was a great achievement, Canada also fought as a united front for the first time which was a huge step forward. '
  },
  {
    title: 'Battle of Hill 70',
    date: new Date(1917, 7, 15),
    image: './img/hill70.jpg',
    body_image: './img/map.jpg',
    body: 'The Battle of Hill 70 took place from August 15th to the 25th in 1917 near the city of Lens. The battle was an attack on the German-controlled town of Lens by the Britsh and Canadians. The goal of the attack was to eliminate the German stronghold in Lens and to weaken their overall defences. The battle was started when Douglas Haig (a senior Britsh officer), ordered Arthur Currie (young commander of the Canadian Corps) to launch an assault on Lens in France. Currie felt that directly attacking the city would cause many casualties, as the German defences on the  city were quite strong. Currie decided to capture the high ground north of the city as a way to orchestrate surprise attacks and set up Candian defences near the city. On August 21 and 23 the Canadians began to move towards the city, and the Germans launched 21 counter attacks to take back the hill. The battle that took place was brutal, as poison gas was used against the Canadians. 9,200 Canadians were lost in battle, and 25,000 German soldiers were killed. The Canadians did not completely achieve their goal of depleting German power in Lens, but the battle was a crucial point for the Canadian military. The hill the Candians claimed was later named Hill 70, because it rose 70 meters above sea level.'
  },
  {
    title: 'Battle of Passchendaele',
    date: new Date(1917, 10, 10),
    image: './img/passchendaele.jpeg',
    body: 'The Battle of Passchendaele was fought during the First World War from July 31 to November 10  1917. The battle took place on the Ypres salient located on the western front of Belgium. German and Allied armies had been deadlocked at Ypres for three years. On July 31, the British began a new offensive, attempting to break through German lines by capturing a ridge near the ruined village of Passchendaele. After British, Australian and New Zealand troops launched failed assaults, the Canadian Corps which consisted of roughly 100,000 members  joined the battle on October 26. On November 6 the Canadians successfully captured the ridge, despite heavy rain and shelling that turned the battlefield into a quagmire. Nearly 16,000 Canadians were killed or wounded during the confrontation. The Battle of Passchendaele did nothing to help the Allied effort and became a symbol of the senseless slaughter of the First World War.'
  },
  {
    title: 'Defense of the German Offensives',
    date: new Date(1918, 2, 21),
    image: './img/spring.jpg',
    body: 'On 21 March 1918, the German offensive began. Lead by specially trained german ‘storm troopers’, they used heavy gas and artillery to penetrate the allied lines. The attack devastated two British armies and thousands of stunned Allied troops. The attack later hit Belgian, British, French, and American forces at strategic points from the English Channel to the Marne River, east of Paris. The Canadians were not directly affected, but many divisions of troops were pulled away temporarily to plug holes in the Allied line. The 2nd Division fought with British units for several months. The Canadian Motor Machine Gun Brigade, commanded by Brigadier-General Raymond Brutinel, fought along the British front offering important fire support from its armoured cars. The Canadian Cavalry Brigade also fought to slow the German advance. In one fierce action, Lieutenant Gordon Flowerdew was awarded the Victoria Cross. The German offensives of 1918 failed to defeat the Allied armies in the West. Germany’s own loss of 800,000 killed, or wounded from March to July exhausted its manpower reserves. It caused suffering casualties to its elite ‘storm troopers’ and assault divisions. The Canadian Corps escaped from the Germans’ offensive, but Sir Douglas Haig would lead a strategic counterattack. This offensive, launched in August against German forces badly weakened by the spring fighting, would be called the Hundred Days campaign.'
  },
  {
    title: 'More Independent Canada',
    date: new Date(1918, 10, 11),
    image: './img/victory.jpg',
    body: 'Post-World War 1, Canada felt a great sense of pride for all that it did during the war, especially during Vimy Ridge, but also deep sorrow for the people who were lost. This confidence, combined with the sorrow, and a new prime minister, William Lyon Mackenzie King, caused Canada to do something unprecedented: Say no to Britain. Before and during WW1, Canada would always do exactly as told by the British Government, but starting with the Chanak Affair in 1922, Canada refused to enter battle with the British Government. Prime Minister King insisted it should be up to the Canadian Parliament, not the British Parliament, when Canada enters battle. The Canadian Parliament agreed. From then on, including World War 2, Canada has had the ability to decide for itself when to enter battle. Without Canada’s newfound confidence and sorrow from their contributions in WW1, this important independence may not have happened for a while longer.'
  }
];
/*

*/