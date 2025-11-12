const axios = require('axios');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const catchAsync = require(ROOT_DIR + '/utils/catchAsync');

const langOptions = 'ar-AE / de-DE / en-US / es-ES / es-MX / fr-FR / id-ID / it-IT / ja-JP / ko-KR / pl-PL / pt-BR / ru-RU / th-TH / tr-TR / vi-VN / zh-CN / zh-TW';
const langs = langOptions.split(' / ');

console.log(langs);


const MAP_ENDPOINT = 'https://valorant-api.com/v1/maps';


// fetch('url', {
//     method: 'POST'
// })

// this -> class

// async function fetchData1() {// }
    
// const fetchData = async (lang) => {
//     const res = await axios.get('https://valorant-api.com/v1/maps');


// }

// fetchData();

console.log('__dirname:', __dirname);


// build absolute path
const DATA_DIR = path.join(__dirname, '..', 'data');
console.log(DATA_DIR);


const fetchMapsData = catchAsync(async (lang) => {
    const res = await axios.get(`https://valorant-api.com/v1/maps?language=${lang}`);

    const { data } = res.data;

    const fileName = `${DATA_DIR}/maps/${lang}.json`;
    fs.writeFileSync(fileName, JSON.stringify(data, null, 4), 'utf8');

    console.log(`> Finished building map data for ${lang}`);
});


const buildMapsData = () => {
    for (const lang of langs) {
        fetchMapsData(lang);
    }
}

// buildMapsData();


const fetchWeaponsData = catchAsync(async (lang) => {
    const res = await axios.get(`https://valorant-api.com/v1/weapons?language=${lang}`);

    const { data: weapons } = res.data;

    // extract only UUIDs for reference
    for (const weapon of weapons) {
        const skinUUIDs = [];
        for (skin of weapon.skins) {
            skinUUIDs.push(skin.uuid);
        }
        weapon.skins = skinUUIDs;
    }

    const fileName = `${DATA_DIR}/weapons/${lang}.json`;
    fs.writeFileSync(fileName, JSON.stringify(weapons, null, 4), 'utf8');

    console.log(`> Finished building weapons data for ${lang}`);
});

function buildWeaponsData() {
    for (const lang of langs) {
        fetchWeaponsData(lang);
    }
}

// buildWeaponsData();

const fetchWeaponSkinsData = catchAsync(async (lang) => {
    const res = await axios.get(`https://valorant-api.com/v1/weapons/skins?language=${lang}`);

    const { data: skins } = res.data;

    const fileName = `${DATA_DIR}/weapons/skins/${lang}.json`;
    fs.writeFileSync(fileName, JSON.stringify(skins, null, 4), 'utf8');

    console.log(`> Finished building weapon skins data for ${lang}`);
});

function buildWeaponSkinsData() {
    for (const lang of langs) {
        fetchWeaponSkinsData(lang);
    }
}

// buildWeaponSkinsData();

const fetchAgentsData = catchAsync(async (lang) => {
    const res = await axios.get(`https://valorant-api.com/v1/agents?language=${lang}`);

    const { data } = res.data;

    const fileName = `${DATA_DIR}/agents/${lang}.json`;
    fs.writeFileSync(fileName, JSON.stringify(data, null, 4), 'utf8');

    console.log(`> Finished building agents data for ${lang}`);
});


const buildAgentsData = () => {
    for (const lang of langs) {
        fetchAgentsData(lang);
    }
}

// buildAgentsData();


// axios.get('https://valorant-api.com/v1/maps')
//     .then(res => {
//         console.log('res: ', res);

//         const { data } = res.data;
        
//         console.log('res.data:', res.data);

//         console.log(data);
        
//         try {
//             const fileName = `${DATA_DIR}/${langs[0]}.json`;

//             fs.writeFileSync(fileName, JSON.stringify(data, null, 4), 'utf8');
//         } catch (err) {
//             console.error('Error writing file:', err);
            
//         }
        
//     })
//     .catch(err => {
//         console.error(err);
        
//     });
