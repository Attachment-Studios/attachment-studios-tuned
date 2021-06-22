
all_posts = [
    [
        "Any Time - Any Device!!!",
        "Attachment Studios Tuned is available as a web-page, so you can get your feed from anywhere and on any device with internet access!"
    ],
    [
        "Stay Tuned To Attachment Studios!",
        "Attachment Studios has released a platform where you can stay in touch with Attachment Studios and its members. This platform will contain posts about various things like Projects, Videos, News, Sneak Peaks, Previews and much more. So stay tuned with Attachment Studios Tuned!"
    ]
];

function addCard(name, description, section, cardId) {
    new_card_data = `
    <div class="card" id="${cardId}">
        <center>
            <div class="cname">
                <h3 id="cname" onclick="alert('Share Link:\\n${window.location.href + '#' + cardId}');">${name}</h3>
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

