const textToTypeElement = document.getElementById('text-to-type');
const userInputElement = document.getElementById('user-input');
const timeElapsedElement = document.getElementById('time-elapsed');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const resetButton = document.getElementById('reset-button');

const practiceModeButton = document.getElementById('practiceMode');
const timedModeButton = document.getElementById('timedMode');
const loadEnglishButton = document.getElementById('loadEnglish');
const loadBanglaButton = document.getElementById('loadBangla');

const langButtons = document.querySelectorAll('.lang-btn');
const modeButtons = document.querySelectorAll('.mode-btn');

let sampleTexts = {
    english: [
        "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.",
        "Practice makes perfect. Keep typing to improve your speed and accuracy. Every keystroke counts.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Believe you can and you're halfway there. The only way to do great work is to love what you do.",
        "The journey of a thousand miles begins with a single step. Embrace challenges as opportunities for growth.",
        "Stay positive, work hard, and make it happen. Your attitude determines your direction.",

    
"ami sourav ami bot",
    
       
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "fish",
  "goat",
  "hat",
  "ice",
  "juice",
  "kite",
  "lion",
  "monkey",
  "nest",
  "orange",
  "pen",
  "queen",
  "rat",
  "sun",
  "tree",
  "umbrella",
  "van",
  "watch",
  "x-ray",
  "yak",
  "zebra",

  "keyboard",
  "computer",
  "program",
  "coding",
  "website",
  "language",
  "javascript",
  "practice",
  "function",
  "variable",
  "document",
  "element",
  "browser",
  "internet",
  "screen",
  "monitor",
  "laptop",
  "database",
  "network",
  "server",

  
 
  "Practice makes a man perfect.",
  "JavaScript is a powerful language for the web.",
  "Typing fast helps improve productivity.",
  "Learning to code is fun and rewarding.",
  "Always write clean and readable code.",
  "Debugging is part of every developer's life.",
  "Web development includes frontend and backend.",









    ],
    bangla: [
        "দ্রুত বাদামী শেয়াল অলস কুকুরকে ডিঙিয়ে গেল। আমার বাক্সে পাঁচটি ডজন মদের জগ প্যাক করুন।",
        "অনুশীলন মানুষকে নিখুঁত করে তোলে। আপনার গতি এবং নির্ভুলতা উন্নত করতে টাইপ করতে থাকুন। প্রতিটি কীস্ট্রোক গণনা করা হয়।",
        "সাফল্য চূড়ান্ত নয়, ব্যর্থতা মারাত্মক নয়: এটি চালিয়ে যাওয়ার সাহস যা গুরুত্বপূর্ণ।",
        "বিশ্বাস করুন আপনি পারবেন এবং আপনি অর্ধেক পথেই আছেন। দুর্দান্ত কাজ করার একমাত্র উপায় হল আপনি যা করেন তা ভালবাসা।",
        "হাজার মাইলের যাত্রা একটি মাত্র পদক্ষেপ দিয়ে শুরু হয়। বৃদ্ধির সুযোগ হিসাবে চ্যালেঞ্জগুলিকে আলিঙ্গন করুন।",
        "ইতিবাচক থাকুন, কঠোর পরিশ্রম করুন এবং এটি ঘটান। আপনার মনোভাব আপনার দিক নির্ধারণ করে।",

       


  "আম",
  "বই",
  "কলম",
  "ঘর",
  "চেয়ার",
  "বাচ্চা",
  "পাখি",
  "ছেলে",
  "মেয়ে",
  "জল",
  "গাছ",
  "ছবি",
  "খেলা",
  "স্কুল",
  "বন্ধু",
  "আলো",
  "ছাতা",
  "নদী",
  "সূর্য",
  "চাঁদ",



  
  "প্রযুক্তি",
  "ইন্টারনেট",
  "প্রোগ্রাম",
  "শিক্ষার্থী",
  "অভিজ্ঞতা",
  "টাইপিং",
  "ভাষা",
  "ডিজাইন",
  "ডেভেলপার",
  "নির্দেশনা",
  "কীবোর্ড",
  "পরীক্ষা",
  "তথ্যপ্রযুক্তি",
  "উন্নয়ন",
  "সফটওয়্যার",
  "নির্মাণ",
  "কোডিং",
  "সিস্টেম",
  "ল্যাপটপ",
  "আমি প্রতিদিন নিয়মিত টাইপিং চর্চা করি।",
  "কম্পিউটার শেখা আমার খুব ভালো লাগে।",
  "ইন্টারনেটের মাধ্যমে আমরা অনেক কিছু শিখতে পারি।",
  "ভালো টাইপিং দক্ষতা চাকরির জন্য গুরুত্বপূর্ণ।",
  "শিক্ষা মানুষের জীবনের আলো।",
  "প্রতিদিন নতুন কিছু শেখা উচিত।",
  "টাইপিং স্পিড বাড়াতে নিয়মিত অনুশীলন প্রয়োজন।",
  "আমি একদিন ভালো প্রোগ্রামার হতে চাই।",







    ]
};

let currentText = "";
let currentLanguage = "english";
let currentMode = "practice"; // "practice" or "timed"
const TIMED_MODE_DURATION = 5 * 60; // 5 minutes in seconds

let startTime;
let intervalId;
let timedModeTimeoutId; // For 5-minute test timeout

// Stats for the current session/test
let sessionTypedChars = 0;
let sessionErrors = 0;
let sessionStartTime;


function getRandomText(language) {
    const texts = sampleTexts[language];
    let newText = texts[Math.floor(Math.random() * texts.length)];
    // Ensure new text is different from current, if possible (for practice mode mainly)
    if (texts.length > 1 && newText === currentText) {
        return getRandomText(language); // Recurse to get a different one
    }
    return newText;
}

function initializeTest() {
    resetCommonState();
    userInputElement.value = "";
    userInputElement.disabled = false;
    
    if (currentMode === "practice") {
        loadNewPracticeText();
    } else if (currentMode === "timed") {
        startTimedMode();
    }
    userInputElement.focus();
}

function loadNewPracticeText() {
    currentText = getRandomText(currentLanguage);
    renderTextToType();
}

function renderTextToType() {
    textToTypeElement.innerHTML = ''; // Clear previous spans
    currentText.split('').forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        if (index === 0 && userInputElement.value.length === 0) {
            charSpan.classList.add('current-char');
        }
        textToTypeElement.appendChild(charSpan);
    });
}


function startTimedMode() {
    sessionTypedChars = 0;
    sessionErrors = 0;
    sessionStartTime = new Date();
    
    timeElapsedElement.innerText = formatTime(TIMED_MODE_DURATION); // Show total time initially
    wpmElement.innerText = "0 WPM";
    accuracyElement.innerText = "0%";

    loadNewPracticeText(); // Load the first text for timed mode

    // Clear any existing timers
    clearInterval(intervalId);
    clearTimeout(timedModeTimeoutId);

    intervalId = setInterval(updateTimedModeStats, 1000);
    timedModeTimeoutId = setTimeout(finishTimedTest, TIMED_MODE_DURATION * 1000);
}

function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


function updateTimedModeStats() {
    if (!sessionStartTime) return;

    const currentTime = new Date();
    const timePassedSeconds = Math.floor((currentTime - sessionStartTime) / 1000);
    const timeLeftSeconds = TIMED_MODE_DURATION - timePassedSeconds;

    if (timeLeftSeconds <= 0) {
        finishTimedTest();
        return;
    }
    timeElapsedElement.innerText = formatTime(timeLeftSeconds);

    // WPM and Accuracy are calculated at the end for timed test
    // Or can be live, but based on sessionTypedChars and sessionErrors
    const wordsTyped = (sessionTypedChars / 5);
    const minutesPassed = timePassedSeconds / 60;
    
    if (minutesPassed > 0) {
        const currentWPM = Math.round(wordsTyped / minutesPassed);
        wpmElement.innerText = currentWPM + " WPM";
    } else {
        wpmElement.innerText = "0 WPM";
    }

    let currentAccuracy = sessionTypedChars > 0 ? Math.round(((sessionTypedChars - sessionErrors) / sessionTypedChars) * 100) : 0;
    accuracyElement.innerText = currentAccuracy + "%";
}


function finishTimedTest() {
    clearInterval(intervalId);
    clearTimeout(timedModeTimeoutId);
    userInputElement.disabled = true;

    const timePassedSeconds = TIMED_MODE_DURATION; // Test ran for full duration
    const minutesPassed = timePassedSeconds / 60;
    const wordsTyped = (sessionTypedChars / 5);
    
    const finalWPM = Math.round(wordsTyped / minutesPassed);
    const finalAccuracy = sessionTypedChars > 0 ? Math.round(((sessionTypedChars - sessionErrors) / sessionTypedChars) * 100) : 0;

    wpmElement.innerText = finalWPM + " WPM";
    accuracyElement.innerText = finalAccuracy + "%";
    timeElapsedElement.innerText = "Finished!";
    
    // Highlight the text-to-type area to indicate completion
    textToTypeElement.innerHTML = `<p style="color: var(--secondary-color); font-weight: bold;">Test Completed! Final Score: ${finalWPM} WPM, ${finalAccuracy}% Accuracy.</p>`;
}


function checkInput() {
    const typedText = userInputElement.value;
    const currentInputLength = typedText.length;

    if (currentInputLength === 0 && !startTime && currentMode === "practice") {
        resetCommonState(); // Reset stats if input is cleared before starting practice
        renderTextToType(); // Re-render with first char highlighted
        return;
    }

    if (currentMode === "practice" && !startTime && currentInputLength > 0) {
        startTime = new Date(); // Start timer for practice mode on first input
        intervalId = setInterval(updatePracticeModeStats, 1000);
    }
    
    // Common logic for both modes regarding character highlighting and error counting
    let currentTextChars = currentText.split('');
    let currentErrorsThisSegment = 0; // Errors for the current text segment only

    const textCharsSpans = textToTypeElement.querySelectorAll('span');
    textCharsSpans.forEach((charSpan, index) => {
        charSpan.classList.remove('current-char');
        const characterInText = charSpan.innerText; // Original text character
        const typedCharacter = typedText[index];

        if (typedCharacter == null) {
            charSpan.classList.remove('correct', 'incorrect');
            if (index === currentInputLength) {
                charSpan.classList.add('current-char');
            }
        } else if (typedCharacter === characterInText) {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect');
        } else {
            charSpan.classList.add('incorrect');
            charSpan.classList.remove('correct');
            currentErrorsThisSegment++;
        }
    });
    
    // Update session stats (for timed mode primarily, but can be used for practice too)
    // This simple update assumes each character typed is new. More complex logic needed if backspace changes things.
    sessionTypedChars = typedText.length; // In timed mode, this accumulates across texts
    // sessionErrors needs more careful handling if we sum errors across texts in timed mode
    // For simplicity now, let's assume accuracy is per-segment for practice, and overall for timed.
    
    if (currentMode === "practice") {
        // For practice mode, WPM and Accuracy are for the current text segment
        const timeDiffSeconds = startTime ? Math.floor((new Date() - startTime) / 1000) : 0;
        const wordsInSegment = (typedText.length / 5);
        const minutesPassed = timeDiffSeconds / 60;
        if (minutesPassed > 0) {
            wpmElement.innerText = Math.round(wordsInSegment / minutesPassed) + " WPM";
        }
        accuracyElement.innerText = typedText.length > 0 ? Math.round(((typedText.length - currentErrorsThisSegment) / typedText.length) * 100) + "%" : "0%";
    }


    // Highlight next character
    if (currentInputLength < currentText.length) {
        if(textCharsSpans[currentInputLength]) textCharsSpans[currentInputLength].classList.add('current-char');
    }


    // If current text segment is completed
    if (typedText.length === currentText.length) {
        if (currentMode === "practice") {
            // Practice Mode: Load next text
            clearInterval(intervalId); // Stop timer for this segment
            startTime = null; // Reset start time for next segment
            // Update cumulative stats for practice (optional, not fully implemented here)
            
            setTimeout(() => { // Small delay before loading next text
                userInputElement.value = ""; // Clear input for next text
                loadNewPracticeText(); // Load new text
                userInputElement.focus();
                 // Re-render to highlight first char of new text
                const firstCharSpan = textToTypeElement.querySelector('span');
                if(firstCharSpan) firstCharSpan.classList.add('current-char');

            }, 500); // 0.5 second delay
        } else if (currentMode === "timed") {
            // Timed Mode: accumulate typed chars and errors, then load next text
            // Note: `sessionTypedChars` should accumulate chars correctly *typed so far in the test*
            // `sessionErrors` should accumulate errors *so far in the test*
            // The current `currentErrorsThisSegment` is for the current text only.
            // A more robust way to handle sessionErrors:
            // When a segment ends, compare typedText with currentText char by char.
            // This part needs refinement for accurate global error count in timed mode.
            // For now, the live `updateTimedModeStats` uses `typedText.length` which resets per segment. This is a simplification.
            // A better way for timed mode:
            // `sessionTypedChars += typedText.length;`
            // `sessionErrors += currentErrorsThisSegment;` (or a full re-check)
            
            userInputElement.value = ""; // Clear input for next text
            loadNewPracticeText(); // Load new text, timer continues
            userInputElement.focus();
        }
    }
}

function updatePracticeModeStats() { // For practice mode's per-segment timer
    if (!startTime) return;
    const currentTime = new Date();
    const timeDiffSeconds = Math.floor((currentTime - startTime) / 1000);
    timeElapsedElement.innerText = timeDiffSeconds + "s";
    // WPM and Accuracy are updated in checkInput for practice mode
}


function resetCommonState() {
    clearInterval(intervalId);
    clearTimeout(timedModeTimeoutId);
    startTime = null;
    sessionStartTime = null;
    sessionTypedChars = 0;
    sessionErrors = 0;

    textToTypeElement.innerHTML = 'Text to practice will appear here...'; // Default message
    
    timeElapsedElement.innerText = (currentMode === "timed") ? formatTime(TIMED_MODE_DURATION) : "0s";
    wpmElement.innerText = "0 WPM";
    accuracyElement.innerText = "0%";

    userInputElement.querySelectorAll('span').forEach(span => {
        span.classList.remove('correct', 'incorrect', 'current-char');
    });
}

function switchMode(newMode) {
    currentMode = newMode;
    modeButtons.forEach(btn => btn.classList.remove('active'));
    if (newMode === 'practice') {
        practiceModeButton.classList.add('active');
        timeElapsedElement.previousElementSibling.innerText = "Time:"; // Label for practice
    } else {
        timedModeButton.classList.add('active');
        timeElapsedElement.previousElementSibling.innerText = "Time Left:"; // Label for timed
    }
    initializeTest();
}

function switchLanguage(newLanguage) {
    currentLanguage = newLanguage;
    langButtons.forEach(btn => btn.classList.remove('active'));
    if (newLanguage === 'english') {
        loadEnglishButton.classList.add('active');
    } else {
        loadBanglaButton.classList.add('active');
    }
    initializeTest(); // Reload text in the new language
}

// Event Listeners
practiceModeButton.addEventListener('click', () => switchMode('practice'));
timedModeButton.addEventListener('click', () => switchMode('timed'));
loadEnglishButton.addEventListener('click', () => switchLanguage('english'));
loadBanglaButton.addEventListener('click', () => switchLanguage('bangla'));

userInputElement.addEventListener('input', checkInput);
resetButton.addEventListener('click', initializeTest); // Reset re-initializes current mode & lang

// Initial load
switchMode('practice'); // Start in practice mode by default
// switchLanguage will be called by switchMode via initializeTest