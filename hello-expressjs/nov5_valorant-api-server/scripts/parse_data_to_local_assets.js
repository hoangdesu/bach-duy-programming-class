const fs = require('fs');
const path = require('path');

const agentsFilePath = path.join(__dirname, '..', 'data', 'agents', 'en-US.json');

const content = fs.readFileSync(agentsFilePath);

const agents = JSON.parse(content);

const gekko = agents[1];

// console.log(gekko);

async function fetchImage(imageUrl, filename) {
    const res = await fetch(imageUrl); // => []

    const arrayBuffer = await res.arrayBuffer();
    console.log(arrayBuffer);

    const imageBuffer = Buffer.from(arrayBuffer);

    const outputPath = path.join(__dirname, 'test-images');

    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });   
    }
    
    fs.writeFileSync(path.join(outputPath, filename), imageBuffer);
   
}


// fetchImage(gekko.fullPortraitV2);

// for (const entry of Object.entries(gekko)) {
//     console.log(entry);   
// }

// for (const key in gekko) {
//     const val = gekko[key];
//     console.log('>> ', 'typeof val =', typeof val, 'key =', key, val);

//     if (typeof val === 'object') {
//         for (const key2 in val) {
//             console.log('>>> key2 =', key2);
//         }
//     } 
// }

// const clonedGekko = {...gekko};
// const clonedGekko = structuredClone(gekko)


for (const key in gekko) {
    const val = gekko[key];

    if (typeof val === 'string' && val.startsWith('https://')) {
        const parts = val.split('/');
        const filename = parts[parts.length - 1];
        fetchImage(val, filename);
    }
}
