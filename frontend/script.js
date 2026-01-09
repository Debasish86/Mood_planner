// Get elements
const moodCards = document.querySelectorAll(".mood-card");
const taskList = document.getElementById("taskList");
const quoteText = document.getElementById("quoteText");
const historyTable = document.getElementById("historyTable");

// Mood based data (temporary – later from DB)
const moodData = {
    Happy: {
        tasks: [
            "Go for a walk",
            "Call a friend",
            "Work on a hobby",
            "Smile and enjoy the day"
        ],
        quote: "Happiness is a direction, not a place."
    },
    Stressed: {
        tasks: [
            "Take deep breaths",
            "Write down worries",
            "Take a short break",
            "Listen to calming music"
        ],
        quote: "You don’t have to control your thoughts, just stop letting them control you."
    },
    Energetic: {
        tasks: [
            "Finish important tasks",
            "Exercise or stretch",
            "Learn something new",
            "Plan tomorrow"
        ],
        quote: "Energy and persistence conquer all things."
    },
    Lazy: {
        tasks: [
            "Do one small task",
            "Clean your desk",
            "Drink water",
            "Rest without guilt"
        ],
        quote: "Rest is productive too."
    }
};

// Event listener for mood cards
moodCards.forEach(card => {
    card.addEventListener("click", () => {
        const selectedMood = card.getAttribute("data-mood");

        showTasks(selectedMood);
        showQuote(selectedMood);
        saveMoodHistory(selectedMood);
    });
});

// Show tasks
function showTasks(mood) {
    taskList.innerHTML = "";

    moodData[mood].tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

// Show quote
function showQuote(mood) {
    quoteText.textContent = `"${moodData[mood].quote}"`;
}

// Save mood history (frontend demo)
function saveMoodHistory(mood) {
    const date = new Date().toLocaleDateString();

    const row = document.createElement("tr");

    const dateCell = document.createElement("td");
    dateCell.textContent = date;

    const moodCell = document.createElement("td");
    moodCell.textContent = mood;

    row.appendChild(dateCell);
    row.appendChild(moodCell);

    historyTable.appendChild(row);
}
