import NinjaDashImg1 from '../assets/images/DevProjects/Screenshot 2025-09-18 234305.png';
import NinjaDashImg2 from '../assets/images/DevProjects/Screenshot 2025-09-18 234349.png';
import CatCheeseEscapeAIImg1 from '../assets/images/DevProjects/Screenshot 2025-09-19 002121.png';
import CatCheeseEscapeAIImg2 from '../assets/images/DevProjects/Screenshot 2025-09-19 002351.png';
import DragonRageImg1 from '../assets/images/DevProjects/Screenshot 2025-09-19 003124.png';

export interface GameDevGDDContent {
    id: number;
    title: string;
    mainImg: string; // Main image for the project
    innerDescription: string; // Description for the inner section
    GameDevGDDImageCards: string[]; // Array of image URLs for the wireframe cards navigation
    gdFile?: string; // Optional field for a downloadable file URL
    }

export const GameDevGDDData: GameDevGDDContent[] = [
  {
    id: 1,
    title: "Ninja Run Unity 3D Game",
    mainImg: NinjaDashImg1,
    innerDescription: `Game Overview:
Shadow Dash Ninja is a fast-paced 3D side-scrolling infinite runner.\n
Players control a ninja character using keyboard and touch gesture inputs, dashing through procedurally generated track segments while dodging traps, \n 
jumping over hazards, collecting coins, and using power-ups.
Gameplay progressively increases in difficulty, and players are rewarded for distance, score, and items collected. The game supports level transitions, lives, a restart-able game loop, and UI feedback for scoring.
GAME CONCEPTS:
Player Control:
• Auto-run forward
• Swipe left/right or arrow keys to change lanes
• Swipe up or spacebar to jump
• Swipe down or S key to slide
Track Generation:
• Segmented track with dynamic spawning (Track Manager)
• Obstacles and collectibles randomly placed per segment
Collectibles and Power-ups:
• Coins increase score
• Future: shields, magnets, energy boosts
UI:
• Live score display
• Coin count
• Remaining lives/health
PHYSICS CONCEPTS:
1. Kinematics and Rigid body
• While player uses Character Controller (not Rigid body), we simulate grounded movement, jumping, and directional motion using velocity-based control.
2. Collision Triggers
• Collectibles and obstacles use colliders (trigger or physical) to detect interactions
• Player loses health when hitting an obstacle
• Collectibles trigger coin collection via OnTriggerEnter
Player Goals & Conditions:
 Objective: Reach the point total needed to complete the level and move onto the next level.
 Win Condition: Player accumulates point score total 30000.
 Lose Condition: Player starts with (3) hearts &losses a heart per damage taken from level obstacles and level boundaries which damage the player and loose 1 heart per a hit/ damage taken.
Project Setup/ Folder Structure:
Assets – Containing project structure folders:
Scripts – Containing game logic / Mechanics
Prefabs – Any game objects turned into prefabs
Materials – Colors/ Textures used for game elements
Scenes – Level Scenes
UI – Elements of the UI
NavMesh – Level design
Task Breakdown & Time Estimates:
Tasks #:
Task Descriptions:
Estimated Time:
1
Setup Unity Project Initial & Folders Structure, along with GitHub repo.
15 Mins
2
Create player with movement and swipe/touch support
1 Hour
3
Design and script dynamic track spawning (TrackManager)
2 Hours
4
Create obstacle prefabs and placement logic
1.5 Hours
5
Implement coin collection, score UI, and coin prefabs
1 Hour
6
Add UI for score, lives, and game-over screen
1.5 Hours
7
Add power-up placeholder (shield, magnet, etc.)
1 Hour
8
Implement game over / win conditions and restart loop
1 Hour
9
Playtesting & bug fixing
1.5 Hour – 4 Hours estimates depending on the debugging process.
10
Polish environment visuals, materials, and lighting
1 Hour – 2 Hours
11
Final build & submission
30 Mins
Total estimated time of development: [17 Hours]
Prototyping Features / Level Progression & Power-ups: Track Segmentation and Random Spawning:
• Track Manager instantiates segments at runtime
• Each Track Segment prefab includes:
o Obstacles -> With 5 spawn points for random obstacle prefabs
o Collectibles -> With 3 spawn points for coins
o Trees -> Randomly toggled for background variation
o Endpoint -> Used to place the next track segment
Score, Coins, and Level Flow
• Player collects coins, increasing score
• Upon reaching 30,000 points, victory condition is displayed
• Player loses health from trap collisions
• Upon 0 lives, Game Manager triggers loss screen and reset button
Next Iteration Steps:
• Add swipe gesture controls via mobile input
• Implement object pooling for better mobile performance
• Add sound effects and background music
• Power-up system for magnet, invincibility, or slow time
• UI upgrades: pause menu, distance tracker, animated heart/lives
                     `,
    GameDevGDDImageCards: [
      NinjaDashImg2,
    ],
    gdFile: 'Shadow Dash Ninja GDD.pdf',
  },
  {
    id: 2,
    title: "Cat Escape AI Unity Game",
    mainImg: CatCheeseEscapeAIImg1,
    innerDescription: `
Game Overview:  
Cheese Escape A top-down stealth and puzzle-based game where the player controls a mouse trying to retrieve cheese at the far end of a map while avoiding detection and capture by patrolling AI-controlled cats. 
The player navigates around obstacles, uses physics-based traps (like bounce pads and force fields), and outsmarts AI enemies with there clever AI behavior to complete each level. 
This project is designed to demonstrate both AI and physics-based gameplay elements in a beginner-friendly scope with a win/loss outcome.

CONCEPTS USED FROM CLASS: 
AI Concepts:
      1. Finite State Machine (FSM):
              Each enemy cat uses an FSM to switch between Patrolling, Chasing, and 
              returning to Patrol states depending on player visibility and distance.
      2. A Pathfinding (Unity NavMesh):
             Cats use the built-in Unity NavMeshAgent to dynamically navigate around 
             obstacles and pursue the player using A* pathfinding-like behavior.

PHYSICS CONCEPTS: 
1)	Kinematics: 
  The player's movement is handled using Rigidbody-based velocity to   
  simulate acceleration and direction changes.

2)	Collision/ Gravity Traps:
 The game includes bounce pads and force zones that push or pull the player or enemies when they interact with the trigger volumes, showcasing practical use of force vectors and gravity.

Player Goals & Conditions: 

	Objective: Reach the cheese located at the far end of the level.

	Win Condition: Player touches the cheese object without being caught.

	Lose Condition: Player is caught by any cat (enemy collision with player).

Project Setup/ Folder Structure:
Assets – Containing project structure folders: 
Scripts – Containing game logic / Mechanics
Prefabs – Any game objects turned into prefabs
Materials – Colors/ Textures used for game elements
Scenes – Level Scenes
UI – Elements of the UI
NavMesh – Level design 

Task Breakdown & Time Estimates: 
Tasks #:	Task Descriptions:	Estimated Time:
1	Setup Unity Project Initial & Folders Structure, along with GitHub repo.	15 Mins
2	Create a player object with Rigidbody movement	45 Mins
3	Design enemies’ prefab with FSM & NavMesh	2 Hours
4	Create patrol points & detection logic (RayCasting)	1.5 Hours
5	Create cheese goal object & win condition logic.	30 Mins
6	Add gravity-based traps (bounce pads, push/pull zones)	1.5 Hours
7	Design level layout with walls, paths, obstacles.	1 Hour
8	Build basic UI for win/lose affects.	1 Hour
9	Play Testing & debugging / code refactoring.	1.5 Hour – 4 Hours estimates depending on the debugging process.
10	Polishing the game & preparing for submission.	1 Hour – 2 Hours
11	Final Checks & playable copy along with build copy.	30 Mins

Total estimated time of development: [15 Hours]

Proto-Typing Feature: Enemy FSM + Pathfinding
For the first prototype, I implemented a basic enemy AI FSM system combined with Unity’s NavMesh pathfinding.
 	Cats patrol using an array of waypoints.
 	If the player enters their sight range and is visible via raycast, the enemy switches to Chase state and updates destination via NavMeshAgent.
 	If the player escapes their range, the cat returns to patrolling.
 	This demonstrates both FSM logic and Unity's implementation of AI style navigation.
 	1 Player Capsule.
 	1 Cheese goal object.
 	1 Enemy cube patrolling 3 waypoints.
 	NavMesh backed on a floor plane.
Next Iteration Steps: 
     Multiple enemy variations with different detection and speeds
     Bounce pads and force zones with rigidbody-based propulsion 
     Maybe design more levels with increases difficulty.
     Polish up more the material assets.  
    `,
    GameDevGDDImageCards: [
      CatCheeseEscapeAIImg2,
    ],
    gdFile: 'CatEscapeGDD.pdf',
  },
  {
    id: 3,
    title: "Dragon Rage Unity 3D Game",
    mainImg: DragonRageImg1,
    innerDescription: `
Game Overview
Dragon Rage is a 3D survival game where players must endure waves of enemies while tactically using attacks, environment, and random drops to survive. Levels feature different terrains, enemy types (dragons, ogres, high ogres, elemental dragons, monster beasts), and timers. Players can either:
• Survive until the timer ends
• Or defeat all enemies in the level
Randomized item drops grant temporary boosts like Health, Stamina, Block Shield (grace period), or an “Annihilation” power-up that clears the current wave. Enemies respawn after a set interval, keeping pressure high.
The gameplay loop emphasizes strategy + tactical combat rather than pure button-mashing.
Game Concepts
Player Control:
• WASD / left stick for movement
• Left click / RT for primary attack
• Right click / LT for block / shield
• “E” / Y to use special power-ups
• Sprint and dodge (shift / B button)
Combat & Enemies:
• Enemy waves spawn dynamically per level
• Enemy AI uses a finite state machine (Idle, Chase, Attack, Cooldown, Death)
• Difficulty ramps up each wave; stronger variants like high ogre or elemental dragon appear later
Collectibles / Power-ups:
• Health potion — restore HP
• Stamina potion — restore stamina for attacks/dodges
• Block Shield — brief invulnerability
• “Board Clear” Orb — destroys all current enemies; next wave resumes after respawn delay
UI:
• Health / Stamina bars
• Timer for level survival
• Wave count indicator
• Inventory of collected power-ups
• Mini-map / enemy markers
Physics Concepts
1. Kinematics & Rigidbody
o Player uses a Character Controller with velocity-based movement
o Enemies use Rigidbody NavMeshAgents for pathfinding
2. Collision & Triggers
o Power-ups use trigger colliders (OnTriggerEnter)
o Enemy attacks and player hitboxes use colliders to apply damage
o Shield states toggle collider layers to grant invulnerability
3. NavMesh Pathfinding
o Enemies navigate terrain using baked NavMesh and dynamic obstacles
Player Goals & Conditions
Objectives:
• Survive until timer reaches zero OR defeat all enemies in the level
Win Conditions:
• Timer expires while player still alive
• OR all enemies defeated before timer ends
Lose Conditions:
• Player HP reaches zero
• Optional: running out of lives or retries
Scoring (Optional):
• Bonus points for enemies defeated
• Extra points for time remaining
Tasks Breakdown & Time Estimates
Task #
Description
Est. Time
1
Setup Unity Project, folder structure, Git repo
30 min
Task #
Description
Est. Time
2
Create player prefab with movement, attack, dodge
2 hrs
3
Implement Player UI (HP, Stamina, Timer, Power-ups)
1.5 hrs
4
Create base enemy prefab + FSM (Idle, Chase, Attack, Death)
3 hrs
5
Implement NavMesh pathfinding for enemies
2 hrs
6
Create power-up prefabs (health, stamina, shield, board clear) with pickup logic
2 hrs
7
Wave / Level Manager for spawning enemies & timing
2 hrs
8
Add win/lose conditions, restart loop
1.5 hrs
9
Design Level 1 layout and enemy placements
2 hrs
10
Playtesting & bug fixing
3-5 hrs
11
Visual polish (lighting, VFX for power-ups, sounds)
2 hrs
12
Final build and submission
30 min
Total Estimated Time: ~22–24 Hours
Prototyping Features / Enemy FSM & Pathfinding
Enemy FSM States:
• Idle/Patrol: Waiting for player or roaming
• Chase: Move toward player (NavMesh)
• Attack: Melee or ranged based on enemy type
• Cooldown: Brief pause before next action
• Death: Play animation, disable AI, trigger respawn
Wave Manager:
• Controls spawn points and wave timers
• Randomly chooses enemy types per wave
• After “Board Clear” power-up used, all enemies destroyed and respawn timer starts
Level Progression:
• Each level introduces new terrain hazards and stronger enemies
• Timer or enemy count defines the win condition per level
• Boss fights at key milestones
Next Iterations:
• Implement multiplayer / co-op mode
• Add skill tree or ability upgrades between levels
• Add environmental traps (lava, collapsing bridges)
• Add save/load system
    `,
    GameDevGDDImageCards: [
      DragonRageImg1,
    ],
    gdFile: 'Dragon Rage GDD.pdf',
  },
];