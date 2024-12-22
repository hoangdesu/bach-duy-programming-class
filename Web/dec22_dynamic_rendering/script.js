const title = document.querySelector('#title');

console.log(title.textContent);

title.textContent = 'Hehe';

const container = document.querySelector('#container');

const newP = document.createElement('p');

newP.textContent = '=))))';

// attach p to container
// container.append(newP);


console.log(champions)

for (const champ of champions) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');

    h2.textContent = champ.name;
    img.src = champ.img;

    a.href = champ.link;
    a.target = '_blank';

    a.append(img, h2);
    div.append(a);

    div.className = 'champ-container';
    container.append(div);
}
