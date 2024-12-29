const title = document.querySelector('#title');

console.log(title.textContent);

// title.textContent = 'Hehe';

const container = document.querySelector('#container');

const newP = document.createElement('p');

newP.textContent = '=))))';

// attach p to container
// container.append(newP);


console.log(champions)



// filteredChampions.splice(0, 5);
// console.log(filteredChampions);


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

const search = document.querySelector('#search');

const onSearchHandler = (evt) => {
    // console.log('up');
    console.log(evt.target);
    
    const query = evt.target.value;
    console.log('query:', query);
    

    // const filteredChampions = [...champions]; // cloned

    const filteredChampions = champions.filter(champ => champ.name.toLowerCase().includes(query));

    // clear the current container
    // container.innerHTML = '';

    console.log(filteredChampions);

    if (filteredChampions.length === 0) {
        container.append('not found');

        return;
    }

    for (const champ of filteredChampions) {
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
}
 
const spinner = document.querySelector('#spinner');
search.addEventListener('input', (evt) => {

    // UI feedback
    container.innerHTML = '';
    spinner.style.display = 'block';

    // button debouncing
    setTimeout(() => {
        onSearchHandler(evt);
        spinner.style.display = 'none';
    }, 1000);
});
