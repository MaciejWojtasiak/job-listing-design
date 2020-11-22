(async function getData() {
    const request = await fetch('./data.json');
    const data = await request.json();

    await displayData(data);
})();


function displayData(data) {
    const mainDiv = document.getElementById('mainDiv');

    data.forEach(job => {
        const div = document.createElement('div');
        const description = addDescription(job);
        const requirements = addRequirements(job);
        let content = '';
        div.classList.add('card');
        content += description;
        content += requirements;
        div.innerHTML = content;
        mainDiv.appendChild(div);
    });
}

function addDescription(job) {
    return `
    <div class="logo" id=${job.id}>
        <img src="${job.logo}" alt="">
    </div>
    <div class="info">
        <p class="company">${job.company} <span class="new">NEW!</span> <span class="featured">FEATURED</span></p> 
        <p class="position">${job.position}</p>
        <p class="description">${job.postedAt}<span>&#8226;</span> ${job.contract} <span>&#8226;</span> ${job.location}</p>
        <hr style="margin-top:10px ;"> 
    </div>`
}

function addRequirements(job) {
    const languages = job.languages;
    const tools = job.tools;
    const role = job.role;
    let output = '<div class="requirements">';
    output += `<div class="requirement">${role}</div>`;

    languages.forEach(lang => {
        output += `<div class="requirement">${lang}</div>`;
    });

    tools.forEach(tool => {
        output += `<div class="requirement">${tool}</div>`;
    });

    output += '</div>';

    return output;
}
