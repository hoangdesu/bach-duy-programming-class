const axios = require('axios');
const fs = require('fs');
const path = require('path');

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
const DATA_DIR = path.join(__dirname, '..', 'data', 'maps');
console.log(DATA_DIR);


axios.get('https://valorant-api.com/v1/maps')
    .then(res => {
        console.log('res: ', res);

        const { data } = res.data;
        
        console.log('res.data:', res.data);

        console.log(data);
        
        try {
            const fileName = `${DATA_DIR}/${langs[0]}.json`;

            fs.writeFileSync(fileName, JSON.stringify(data, null, 4), 'utf8');
        } catch (err) {
            console.error('Error writing file:', err);
            
        }
        
    })
    .catch(err => {
        console.error(err);
        
    });
