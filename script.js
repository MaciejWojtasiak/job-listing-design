(async function getData() {
    const request = await fetch('./data.json');
    const data = await request.json();

    await displayData(data);
})();


function displayData(data) {
    const mainDiv = document.getElementById('mainDiv');
    mainDiv.innerHTML = data.map(item => {
        const { company, contract, id, languages, location, logo, position, postedAt, role, tools } = item;
        return `<div class="card" id="${id}">
        <div class="info">
         <div class="logo">
        <img src="${logo}" alt="">
     </div>
     <div class="text">
         <p class="company">${company} <span class="new">NEW!</span> <span class="featured">FEATURED</span></p> 
         <p class="position">${position}</p>
         <p class="description">${postedAt}<span>&#8226;</span> ${contract} <span>&#8226;</span> ${location}</p>
         <hr style="margin-top:10px ;"> 
     </div>
     </div>
     <div class="requirements">
        <div class="requirement">${role}</div>
        ${languages.map((lang) => {
            return `<div class="requirement">${lang}</div>`;
        }).join('')}  
        ${tools.map((tool) => {
            return `<div class="requirement">${tool}</div>`;
        }).join('')}
     </div>          
     </div>`;
    }).join('')
};
