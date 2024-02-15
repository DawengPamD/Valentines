let heart = document.getElementsByClassName('heart')[0];
let player = document.getElementsByClassName('player')[0];
let card = document.getElementsByClassName('container')[0];
let arrow = document.getElementsByClassName('arrow-icon')[0];


heart.addEventListener('click', () => {
    heart.classList.remove('heart--default');
    heart.classList.add("heart--clicked");


    setTimeout(() => {
        heart.style.display = "none";
        player.classList.remove('hidden');
        arrow.classList.remove('hidden');

    }, 1000);

});


arrow.addEventListener('click', () => {
    player.classList.toggle('hidden');
    card.classList.toggle('hidden');
    arrow.classList.toggle('open')
    arrow.classList.toggle('arrow--pos')


});


// Get the translate button and translation div
const translateButton = document.getElementById('translateButton');
const translationDiv = document.querySelector('.translation');

// Store original and translated text
const originalText = document.querySelector('.items.text').innerHTML;
const translatedText = `
<p>Thousands of birds are in the forest,<br>
But you, my love, are the head,<br>
You fly like birds,<br>
Even the butterfly doesn’t compare your bird, my own.</p>

<p>I was by the beach, when the waves of your love came,<br>
Your love carried me like whirlwind,<br>
You are my choice,<br>
Little of our love story.</p>

<p>I have jumped into the ocean of your love,<br>
I must be filled.</p>

<p>The teeth loves the mouth and called it home,<br>
The hair loves the head and called it home,<br>
My very own morning star,<br>
In this hamlet we call home,<br>
Our love is everlasting.</p>
`;

// Add event listener to the translate button
let isTranslated = false;
translateButton.addEventListener('click', () => {
    // Toggle between original and translated text
    if (isTranslated) {
        // Revert to original text
        document.querySelector('.items.text').innerHTML = originalText;
        isTranslated = false;
    } else {
        // Display translated text
        document.querySelector('.items.text').innerHTML = translatedText;
        isTranslated = true;
    }
    
    // Toggle the 'hidden' class on the translation div
    translationDiv.classList.toggle('hidden');
});
