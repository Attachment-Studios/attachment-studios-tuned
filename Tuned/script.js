
all_posts = [
    [
        "Lights Will Fade Out Soon, But That's How Entertainment Will Fade In.",
        "Attachment Studios is presenting you 'Fading Lights', a game. This game is created by Attachment Aditya. It should released by 25 June or 26 June. This project was made within 2 Days. This game includes shaders and will be available for Android and Windows device. This game will be available at Attachment Store, Itch.io And GitHub. It will be free.",
        "25 June 2021",
        "Attachment Aditya"
    ],
    [
        "Now Available For Windows",
        "AS Tuned is now availble as a desktop app. Although it needs internet access but it is really a good improvement.",
        "24 June 2021",
        "Attachment Aditya"
    ],
    [
        "Any Time - Any Device!!!",
        "Attachment Studios Tuned is available as a web-page, so you can get your feed from anywhere and on any device with internet access!",
        "23 June 2021",
        "Attachment Aditya"
    ],
    [
        "Stay Tuned To Attachment Studios!",
        "Attachment Studios has released a platform where you can stay in touch with Attachment Studios and its members. This platform will contain posts about various things like Projects, Videos, News, Sneak Peaks, Previews and much more. So stay tuned with Attachment Studios Tuned!",
        "23 June 2021",
        "Attachment Aditya"
    ]
];

function addCard(name, description, section, cardId) {
    new_card_data = `
    <div class="card" id="${cardId}">
        <center>
            <div class="cname">
                <h3 id="cname" onclick="prompt('Share Link:', '${window.location.href + '#' + cardId}');">${name}</h3>
            </div>
            <hr style="border: 8px solid var(--c2); width: 95%;">
            <div class="cdesc">
                <p id="cdesc">
                    ${description}
                </p>
            </div>
        </center>
    </div>
    `;

    document.getElementById(section).innerHTML = document.getElementById(section).innerHTML + new_card_data;
}

for (post of all_posts) {
    addCard(post[0], post[1], "all", all_posts.indexOf(post))
}

