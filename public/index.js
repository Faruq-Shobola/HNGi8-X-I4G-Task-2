const root = document.querySelector('.content');
const name = 'shobola faruq';
const title = 'front-end developer';

const template = `
<div class="">
<p class="capitalize text-gray-300 text-lg">hi i'm</p>
<h1 class="text-4xl font-medium uppercase font-body text-purple-500">${name}</h1>
<p class="capitalize text-gray-300 text-lg">a ${title}</p>
</div>
<div class="">
<a href="resume/index.html" class="capitalize text-lg text-white py-3 px-7 bg-purple-500 rounded-full font-nunito">view resume</a>
</div>`;

root.innerHTML = template;
