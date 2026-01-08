// Game State Management
const gameState = {
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    completedChallenges: 0,
    achievements: 0,
    unlockedChapters: [1],
    completedChapters: [],
    currentChapter: null,
    currentScene: 0
};

// Story Chapters and Challenges
const chapters = [
    {
        id: 1,
        title: "Chapter 1: The Awakening",
        description: "Learn the basics of SELECT queries",
        scenes: [
            {
                story: "You awaken in a vast library filled with ancient tomes. A mysterious figure approaches you, draped in robes adorned with strange symbols.\n\n\"Welcome, young apprentice,\" the figure says. \"I am Master Postgres, keeper of the Sacred Database. The realm is in chaos - our data has been scattered across countless tables. Only you can restore order.\"\n\nThe master gestures to a glowing table before you. \"First, you must learn to SEE the data. This is the Users table.\"",
                challenge: {
                    type: "sql",
                    description: "The Users table contains information about the citizens of our realm. Your first task is simple: retrieve ALL records from the 'users' table.",
                    hint: "Use SELECT * FROM table_name to retrieve all records.",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 }
                        ]
                    },
                    solution: "SELECT * FROM users",
                    alternatives: ["select * from users", "SELECT * FROM users;"],
                    xpReward: 50
                }
            },
            {
                story: "\"Excellent!\" Master Postgres nods approvingly. \"You have learned to see. But often, we seek only specific knowledge, not everything at once.\"\n\nHe waves his hand, and the glowing table shimmers. \"Now, I need you to find only the NAMES and CLASSES of our warriors. We must know who we can call upon.\"",
                challenge: {
                    type: "sql",
                    description: "Retrieve only the 'name' and 'class' columns from the users table. We don't need all the information, just these two pieces.",
                    hint: "Use SELECT column1, column2 FROM table_name to get specific columns.",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 }
                        ]
                    },
                    solution: "SELECT name, class FROM users",
                    alternatives: ["select name, class from users", "SELECT name,class FROM users;", "SELECT class, name FROM users"],
                    xpReward: 50
                }
            }
        ]
    },
    {
        id: 2,
        title: "Chapter 2: The Filtering",
        description: "Master the WHERE clause",
        scenes: [
            {
                story: "Master Postgres leads you deeper into the library. The air grows thick with magic.\n\n\"The true power,\" he says, \"lies not in seeing everything, but in finding EXACTLY what you need. The WHERE clause is your blade - it cuts through the noise to reveal the truth.\"\n\nA scroll unfurls before you, showing a quest board of available missions.",
                challenge: {
                    type: "sql",
                    description: "We need to find all warriors who are level 12 or higher. They're the only ones ready for the upcoming quest. Filter the users table to show only those with level >= 12.",
                    hint: "Use WHERE to filter: SELECT * FROM table WHERE column >= value",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Grimm", class: "Warrior", level: 8 }
                        ]
                    },
                    solution: "SELECT * FROM users WHERE level >= 12",
                    alternatives: ["select * from users where level >= 12", "SELECT * FROM users WHERE level>=12;"],
                    xpReward: 75
                }
            },
            {
                story: "\"Good! But sometimes we need to be even more specific,\" Master Postgres continues. \"We need to find particular individuals, not just anyone matching criteria.\"\n\nThe scroll glows with urgency. \"An archer named Elara holds a crucial piece of information. Find her record.\"",
                challenge: {
                    type: "sql",
                    description: "Find the specific user named 'Elara'. Use the WHERE clause with text comparison.",
                    hint: "For text comparison, use WHERE column = 'text value' (with quotes around the text)",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 }
                        ]
                    },
                    solution: "SELECT * FROM users WHERE name = 'Elara'",
                    alternatives: ["select * from users where name = 'Elara'", "SELECT * FROM users WHERE name='Elara';"],
                    xpReward: 75
                }
            }
        ]
    },
    {
        id: 3,
        title: "Chapter 3: The Ordering",
        description: "Learn ORDER BY and LIMIT",
        scenes: [
            {
                story: "You've proven yourself capable. Master Postgres leads you to a grand hall where a leaderboard floats in the air, names constantly shifting position.\n\n\"Order brings clarity,\" he says. \"In our world, we often need to see who is strongest, who came first, or who needs help. The ORDER BY clause arranges data by our will.\"",
                challenge: {
                    type: "sql",
                    description: "Show me all users ordered by their level from highest to lowest. The strongest warriors should appear first!",
                    hint: "Use ORDER BY column DESC to sort from highest to lowest. Use ASC for lowest to highest.",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Zara", class: "Rogue", level: 18 }
                        ]
                    },
                    solution: "SELECT * FROM users ORDER BY level DESC",
                    alternatives: ["select * from users order by level desc", "SELECT * FROM users ORDER BY level DESC;"],
                    xpReward: 100
                }
            },
            {
                story: "\"Perfect! But sometimes,\" Master Postgres smiles, \"we only need to see the top few. The LIMIT clause lets us take only what we need.\"\n\nThe leaderboard narrows, focusing on the top positions.",
                challenge: {
                    type: "sql",
                    description: "Show me only the TOP 3 highest level users. Order them by level (highest first) and limit the results to just 3.",
                    hint: "Combine ORDER BY with LIMIT: SELECT * FROM table ORDER BY column DESC LIMIT number",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Zara", class: "Rogue", level: 18 }
                        ]
                    },
                    solution: "SELECT * FROM users ORDER BY level DESC LIMIT 3",
                    alternatives: ["select * from users order by level desc limit 3", "SELECT * FROM users ORDER BY level DESC LIMIT 3;"],
                    xpReward: 100
                }
            }
        ]
    },
    {
        id: 4,
        title: "Chapter 4: The Aggregation",
        description: "Master aggregate functions",
        scenes: [
            {
                story: "Master Postgres leads you to a chamber filled with glowing orbs, each containing swirling numbers.\n\n\"Raw data is powerful, but summarized knowledge is wisdom,\" he intones. \"COUNT tells us how many. SUM tells us the total. AVG reveals the balance. These are the aggregate functions - they transform many into one meaningful answer.\"",
                challenge: {
                    type: "sql",
                    description: "How many users do we have in total? Use the COUNT function to find out.",
                    hint: "Use COUNT(*) to count all rows, or COUNT(column) to count non-null values in a column.",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Zara", class: "Rogue", level: 18 }
                        ]
                    },
                    solution: "SELECT COUNT(*) FROM users",
                    alternatives: ["select count(*) from users", "SELECT COUNT(*) FROM users;", "SELECT count(*) FROM users"],
                    xpReward: 125
                }
            },
            {
                story: "\"Good! Now let's find the average,\" Master Postgres says. \"We need to know the typical strength of our warriors to plan accordingly.\"",
                challenge: {
                    type: "sql",
                    description: "Calculate the average level of all users using the AVG function.",
                    hint: "Use AVG(column_name) to calculate the average value.",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Dwarf", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Zara", class: "Rogue", level: 18 }
                        ]
                    },
                    solution: "SELECT AVG(level) FROM users",
                    alternatives: ["select avg(level) from users", "SELECT AVG(level) FROM users;", "SELECT avg(level) FROM users"],
                    xpReward: 125
                }
            }
        ]
    },
    {
        id: 5,
        title: "Chapter 5: The Grouping",
        description: "Learn GROUP BY",
        scenes: [
            {
                story: "The chamber transforms. Users begin clustering together based on their classes - Warriors with Warriors, Mages with Mages.\n\n\"When we need to understand groups, not individuals, we use GROUP BY,\" Master Postgres explains. \"It allows us to see patterns across categories.\"",
                challenge: {
                    type: "sql",
                    description: "Count how many users we have of each class. Group the users by their class and count each group.",
                    hint: "Use SELECT class, COUNT(*) FROM users GROUP BY class",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Warrior", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Zara", class: "Rogue", level: 18 },
                            { id: 6, name: "Marcus", class: "Warrior", level: 14 }
                        ]
                    },
                    solution: "SELECT class, COUNT(*) FROM users GROUP BY class",
                    alternatives: ["select class, count(*) from users group by class", "SELECT class, COUNT(*) FROM users GROUP BY class;"],
                    xpReward: 150
                }
            },
            {
                story: "\"Excellent! Now let's go deeper,\" Master Postgres says. \"What's the average level within each class? This tells us which groups are strongest.\"",
                challenge: {
                    type: "sql",
                    description: "Find the average level for each class. Group by class and calculate the average level for each group.",
                    hint: "SELECT class, AVG(level) FROM users GROUP BY class",
                    table: {
                        name: "users",
                        data: [
                            { id: 1, name: "Arthur", class: "Warrior", level: 15 },
                            { id: 2, name: "Luna", class: "Mage", level: 12 },
                            { id: 3, name: "Thorin", class: "Warrior", level: 10 },
                            { id: 4, name: "Elara", class: "Archer", level: 13 },
                            { id: 5, name: "Zara", class: "Rogue", level: 18 },
                            { id: 6, name: "Marcus", class: "Warrior", level: 14 }
                        ]
                    },
                    solution: "SELECT class, AVG(level) FROM users GROUP BY class",
                    alternatives: ["select class, avg(level) from users group by class", "SELECT class, AVG(level) FROM users GROUP BY class;"],
                    xpReward: 150
                }
            }
        ]
    },
    {
        id: 6,
        title: "Chapter 6: The Joining",
        description: "Master JOIN operations",
        scenes: [
            {
                story: "Master Postgres takes you to a room with two separate glowing tables.\n\n\"Until now, you've worked with single tables. But true power comes from connecting data across multiple tables. The JOIN is the bridge between separate realms of information.\"\n\nBefore you are two tables: 'users' and 'quests'. Each quest has a user_id showing who accepted it.",
                challenge: {
                    type: "sql",
                    description: "We have users and quests in separate tables. Join them together to see which user is doing which quest. Use INNER JOIN to connect users.id with quests.user_id.",
                    hint: "SELECT * FROM users INNER JOIN quests ON users.id = quests.user_id",
                    table: {
                        name: "users and quests",
                        data: [
                            { user_id: 1, user_name: "Arthur", quest_id: 1, quest_name: "Dragon Slayer", user_class: "Warrior" },
                            { user_id: 2, user_name: "Luna", quest_id: 2, quest_name: "Ancient Tome", user_class: "Mage" },
                            { user_id: 1, user_name: "Arthur", quest_id: 3, quest_name: "Save Village", user_class: "Warrior" }
                        ]
                    },
                    solution: "SELECT * FROM users INNER JOIN quests ON users.id = quests.user_id",
                    alternatives: [
                        "select * from users inner join quests on users.id = quests.user_id",
                        "SELECT * FROM users JOIN quests ON users.id = quests.user_id",
                        "SELECT * FROM users INNER JOIN quests ON users.id=quests.user_id;"
                    ],
                    xpReward: 200
                }
            },
            {
                story: "\"Magnificent! You've connected two worlds,\" Master Postgres beams. \"Now, let's be more selective. Show me only the names and their quest titles.\"",
                challenge: {
                    type: "sql",
                    description: "Join users and quests, but select only the user name and quest name columns. Use table.column notation to be specific.",
                    hint: "SELECT users.name, quests.quest_name FROM users INNER JOIN quests ON users.id = quests.user_id",
                    table: {
                        name: "users and quests",
                        data: [
                            { name: "Arthur", quest_name: "Dragon Slayer" },
                            { name: "Luna", quest_name: "Ancient Tome" },
                            { name: "Arthur", quest_name: "Save Village" }
                        ]
                    },
                    solution: "SELECT users.name, quests.quest_name FROM users INNER JOIN quests ON users.id = quests.user_id",
                    alternatives: [
                        "select users.name, quests.quest_name from users inner join quests on users.id = quests.user_id",
                        "SELECT users.name, quests.quest_name FROM users JOIN quests ON users.id = quests.user_id;",
                        "SELECT users.name,quests.quest_name FROM users INNER JOIN quests ON users.id=quests.user_id"
                    ],
                    xpReward: 200
                }
            }
        ]
    },
    {
        id: 7,
        title: "Chapter 7: The Void",
        description: "Handle NULL values with COALESCE",
        scenes: [
            {
                story: "You enter a chamber shrouded in mist. Parts of the data tables flicker and fade - some information is simply... missing.\n\n\"Ah, the void,\" Master Postgres says solemnly. \"In our realm, not all data is complete. NULL represents the unknown, the absent. But we have tools to handle this emptiness.\"\n\nHe gestures to a table where some warriors have no email addresses listed.",
                challenge: {
                    type: "sql",
                    description: "Some users don't have email addresses (they're NULL). Use COALESCE to replace NULL emails with the text 'No email provided'. Select name and the coalesced email.",
                    hint: "COALESCE returns the first non-NULL value: SELECT name, COALESCE(email, 'No email provided') FROM users",
                    table: {
                        name: "users",
                        data: [
                            { name: "Arthur", email: "arthur@quest.com" },
                            { name: "Luna", email: "No email provided" },
                            { name: "Thorin", email: "thorin@mountain.com" },
                            { name: "Elara", email: "No email provided" }
                        ]
                    },
                    solution: "SELECT name, COALESCE(email, 'No email provided') FROM users",
                    alternatives: [
                        "select name, coalesce(email, 'No email provided') from users",
                        "SELECT name, COALESCE(email,'No email provided') FROM users;",
                        "SELECT name,COALESCE(email, 'No email provided') FROM users"
                    ],
                    xpReward: 175
                }
            },
            {
                story: "\"Good! COALESCE can accept multiple arguments,\" Master Postgres continues. \"It returns the first non-NULL value it encounters.\"\n\nAnother table materializes showing warriors with multiple contact methods - some have a preferred_contact, others only have a backup_contact, and some have neither.",
                challenge: {
                    type: "sql",
                    description: "Users have preferred_contact and backup_contact columns. Use COALESCE with THREE arguments to return: preferred_contact if it exists, otherwise backup_contact, otherwise 'No contact'. Select name and the coalesced contact.",
                    hint: "COALESCE(column1, column2, 'default') checks each in order: SELECT name, COALESCE(preferred_contact, backup_contact, 'No contact') FROM users",
                    table: {
                        name: "users",
                        data: [
                            { name: "Arthur", contact: "arthur@quest.com" },
                            { name: "Luna", contact: "luna_backup@magic.com" },
                            { name: "Thorin", contact: "No contact" },
                            { name: "Elara", contact: "elara@bow.com" }
                        ]
                    },
                    solution: "SELECT name, COALESCE(preferred_contact, backup_contact, 'No contact') FROM users",
                    alternatives: [
                        "select name, coalesce(preferred_contact, backup_contact, 'No contact') from users",
                        "SELECT name, COALESCE(preferred_contact,backup_contact,'No contact') FROM users;",
                        "SELECT name,COALESCE(preferred_contact, backup_contact, 'No contact') FROM users"
                    ],
                    xpReward: 175
                }
            },
            {
                story: "\"You've mastered the art of handling the void,\" Master Postgres says with pride. \"But sometimes, we need to perform calculations even when data is missing.\"\n\nA scoreboard appears showing quest completion bonuses, but some warriors haven't earned their bonus yet.",
                challenge: {
                    type: "sql",
                    description: "Calculate total_score as base_score + bonus. But some bonuses are NULL! Use COALESCE to treat NULL bonuses as 0. Select name and the calculated total_score.",
                    hint: "Use COALESCE to replace NULL with 0 in math: SELECT name, base_score + COALESCE(bonus, 0) AS total_score FROM users",
                    table: {
                        name: "users",
                        data: [
                            { name: "Arthur", total_score: 150 },
                            { name: "Luna", total_score: 100 },
                            { name: "Thorin", total_score: 180 },
                            { name: "Elara", total_score: 120 }
                        ]
                    },
                    solution: "SELECT name, base_score + COALESCE(bonus, 0) AS total_score FROM users",
                    alternatives: [
                        "select name, base_score + coalesce(bonus, 0) as total_score from users",
                        "SELECT name, base_score + COALESCE(bonus,0) AS total_score FROM users;",
                        "SELECT name,base_score+COALESCE(bonus, 0) AS total_score FROM users",
                        "SELECT name, COALESCE(bonus, 0) + base_score AS total_score FROM users"
                    ],
                    xpReward: 175
                }
            }
        ]
    }
];

// Initialize game
$(document).ready(function() {
    loadGameState();
    renderChapterSelect();
    setupEventListeners();
    updateStats();
});

// Save and load game state
function saveGameState() {
    localStorage.setItem('postgresQuestState', JSON.stringify(gameState));
}

function loadGameState() {
    const saved = localStorage.getItem('postgresQuestState');
    if (saved) {
        const loaded = JSON.parse(saved);
        Object.assign(gameState, loaded);
    }
}

// Chapter selection
function renderChapterSelect() {
    const container = $('#chapters-container');
    container.empty();
    
    chapters.forEach(chapter => {
        const isUnlocked = gameState.unlockedChapters.includes(chapter.id);
        const isCompleted = gameState.completedChapters.includes(chapter.id);
        
        const btn = $('<div>')
            .addClass('chapter-btn')
            .html(`
                <div style="font-size: 1.5em; margin-bottom: 10px;">
                    ${isCompleted ? '✅' : isUnlocked ? '🔓' : '🔒'}
                </div>
                <div style="font-weight: bold; margin-bottom: 5px;">${chapter.title}</div>
                <div style="font-size: 0.9em; opacity: 0.8;">${chapter.description}</div>
            `);
        
        if (!isUnlocked) {
            btn.addClass('locked');
        } else if (isCompleted) {
            btn.addClass('completed');
        }
        
        if (isUnlocked) {
            btn.on('click', () => startChapter(chapter.id));
        }
        
        container.append(btn);
    });
}

// Start a chapter
function startChapter(chapterId) {
    gameState.currentChapter = chapterId;
    gameState.currentScene = 0;
    
    $('#chapter-select').addClass('hidden');
    $('#game-area').removeClass('hidden');
    
    loadScene();
}

// Load current scene
function loadScene() {
    const chapter = chapters.find(c => c.id === gameState.currentChapter);
    const scene = chapter.scenes[gameState.currentScene];
    
    // Display story
    $('#story-content').html(scene.story.replace(/\n/g, '<br><br>'));
    
    // Clear previous challenge
    $('#challenge-content').empty();
    $('#sql-input').addClass('hidden').val('');
    $('#submit-btn').addClass('hidden');
    $('#hint-btn').addClass('hidden');
    $('#result-box').hide();
    $('#hint-box').hide();
    $('#table-display').empty();
    $('#choices-container').empty(); // Clear choices first
    
    // Setup challenge
    if (scene.challenge) {
        const challenge = scene.challenge;
        
        $('#challenge-content').html(`
            <p style="margin-bottom: 15px;"><strong>Challenge:</strong> ${challenge.description}</p>
            ${challenge.table ? '<p style="margin-bottom: 10px;"><strong>Table Preview:</strong></p>' : ''}
        `);
        
        // Show table if exists
        if (challenge.table) {
            displayTable(challenge.table);
        }
        
        $('#sql-input').removeClass('hidden');
        $('#submit-btn').removeClass('hidden').off('click').on('click', () => checkSolution(challenge));
        $('#hint-btn').removeClass('hidden').off('click').on('click', () => showHint(challenge.hint));
    }
    
    // Setup choices if this is the last scene
    if (gameState.currentScene === chapter.scenes.length - 1) {
        setupEndOfChapterChoices();
    } else {
        setupNextSceneChoice();
    }
}

// Display table data
function displayTable(table) {
    if (!table.data || table.data.length === 0) return;
    
    const columns = Object.keys(table.data[0]);
    
    let html = '<table><thead><tr>';
    columns.forEach(col => {
        html += `<th>${col}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    table.data.forEach(row => {
        html += '<tr>';
        columns.forEach(col => {
            html += `<td>${row[col]}</td>`;
        });
        html += '</tr>';
    });
    html += '</tbody></table>';
    
    $('#challenge-content').append(html);
}

// Check SQL solution
function checkSolution(challenge) {
    const userInput = $('#sql-input').val().trim().toLowerCase().replace(/;$/, '');
    const solution = challenge.solution.toLowerCase().replace(/;$/, '');
    
    let isCorrect = userInput === solution;
    
    // Check alternatives
    if (!isCorrect && challenge.alternatives) {
        isCorrect = challenge.alternatives.some(alt => 
            userInput === alt.toLowerCase().replace(/;$/, '')
        );
    }
    
    const resultBox = $('#result-box');
    resultBox.show();
    
    if (isCorrect) {
        resultBox.removeClass('error').addClass('success');
        resultBox.html(`
            <div style="color: #2ecc71; font-weight: bold; margin-bottom: 10px;">✓ Correct!</div>
            <div>Your SQL mastery grows stronger! +${challenge.xpReward} XP</div>
        `);
        
        // Display result table
        if (challenge.table) {
            $('#table-display').html('<p style="margin-top: 15px; color: #4ecdc4;"><strong>Query Result:</strong></p>');
            displayTable(challenge.table);
        }
        
        // Award XP
        addXP(challenge.xpReward);
        gameState.completedChallenges++;
        updateStats();
        saveGameState();
        
        // Enable next scene button
        $('#choices-container').find('.choice-btn').attr('data-completed', 'true');
        
    } else {
        resultBox.removeClass('success').addClass('error');
        resultBox.html(`
            <div style="color: #e74c3c; font-weight: bold; margin-bottom: 10px;">✗ Not quite right</div>
            <div>Review the challenge and try again. You can use the hint if you're stuck!</div>
        `);
    }
}

// Show hint
function showHint(hint) {
    const hintBox = $('#hint-box');
    hintBox.html(`<div class="hint-title">💡 Hint:</div><div>${hint}</div>`);
    hintBox.show();
}

// Setup next scene choice
function setupNextSceneChoice() {
    const choiceBtn = $('<button>')
        .addClass('choice-btn')
        .attr('data-completed', 'false')
        .text('Continue to the next challenge');
    
    $('#choices-container').empty().append(choiceBtn);
    
    choiceBtn.on('click', function() {
        if ($(this).attr('data-completed') === 'true') {
            gameState.currentScene++;
            loadScene();
        } else {
            showWarningMessage('⚠️ You must complete the current challenge first!');
        }
    });
}

// Setup end of chapter choices
function setupEndOfChapterChoices() {
    const choiceBtn = $('<button>')
        .addClass('choice-btn')
        .attr('data-completed', 'false')
        .text('Complete this chapter');
    
    $('#choices-container').empty().append(choiceBtn);
    
    choiceBtn.on('click', function() {
        if ($(this).attr('data-completed') === 'true') {
            completeChapter();
        } else {
            showWarningMessage('⚠️ You must complete the current challenge first!');
        }
    });
}

// Show warning message
function showWarningMessage(message) {
    const resultBox = $('#result-box');
    resultBox.removeClass('success').addClass('error');
    resultBox.html(`
        <div style="color: #ffc107; font-weight: bold; margin-bottom: 10px;">${message}</div>
        <div>Complete the SQL challenge above to proceed.</div>
    `);
    resultBox.show();
    
    // Scroll to result box
    resultBox[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Complete chapter
function completeChapter() {
    const chapterId = gameState.currentChapter;
    
    if (!gameState.completedChapters.includes(chapterId)) {
        gameState.completedChapters.push(chapterId);
        
        // Unlock next chapter
        const nextChapterId = chapterId + 1;
        if (nextChapterId <= chapters.length && !gameState.unlockedChapters.includes(nextChapterId)) {
            gameState.unlockedChapters.push(nextChapterId);
            showAchievement('New Chapter Unlocked!', `You've unlocked ${chapters[nextChapterId - 1].title}`);
        }
        
        showAchievement('Chapter Complete!', `You've mastered ${chapters[chapterId - 1].title}!`);
        addXP(200);
    }
    
    saveGameState();
    updateStats();
    
    // Return to chapter select
    $('#game-area').addClass('hidden');
    $('#chapter-select').removeClass('hidden');
    renderChapterSelect();
}

// XP and leveling
function addXP(amount) {
    gameState.xp += amount;
    
    while (gameState.xp >= gameState.xpToNextLevel) {
        gameState.xp -= gameState.xpToNextLevel;
        gameState.level++;
        gameState.xpToNextLevel = Math.floor(gameState.xpToNextLevel * 1.5);
        showAchievement('Level Up!', `You've reached level ${gameState.level}!`);
    }
    
    updateStats();
}

// Update stats display
function updateStats() {
    $('#level').text(gameState.level);
    $('#xp').text(`${gameState.xp} / ${gameState.xpToNextLevel}`);
    $('#challenges').text(gameState.completedChallenges);
    $('#achievements').text(gameState.achievements);
    
    const xpPercent = (gameState.xp / gameState.xpToNextLevel) * 100;
    $('#xp-bar').css('width', xpPercent + '%');
}

// Show achievement popup
function showAchievement(title, text) {
    gameState.achievements++;
    
    $('#achievement-title').text(title);
    $('#achievement-text').text(text);
    $('#achievement-popup').addClass('show');
    
    setTimeout(() => {
        $('#achievement-popup').removeClass('show');
    }, 4000);
}

// Event listeners
function setupEventListeners() {
    $('#back-btn').on('click', function() {
        $('#game-area').addClass('hidden');
        $('#chapter-select').removeClass('hidden');
        renderChapterSelect();
    });
}
