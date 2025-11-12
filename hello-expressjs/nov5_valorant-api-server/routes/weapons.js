// const express = require('express')
// const router = express.Router();

// const router = require('express').Router();


// explicit require (BEST)
const Router = require('express').Router;

// // require then destructure
// const { Router } = require('express');

const fs = require('fs');
const path = require('path');

const weaponsDataPath = path.join('data', 'weapons');

const router = Router();

router.get('/weapons', (req, res) => {

    const weaponsFile = `${weaponsDataPath}/${req.selectedLang}.json`;
    const fileContent = fs.readFileSync(weaponsFile);
    const weapons = JSON.parse(fileContent);

    return res.json(weapons);
});


// /api/v1/weapons/:q
router.get('/weapons/:q', (req, res) => {
    const { q } = req.params;

    const weaponsFile = `${weaponsDataPath}/${req.selectedLang}.json`;
    const fileContent = fs.readFileSync(weaponsFile);
    const weapons = JSON.parse(fileContent);

    const weapon = weapons.find(weapon => weapon.uuid === q || weapon.displayName.toLowerCase() === q);
    console.log('> weapon:', weapon);
    

    if (!weapon) return res.status(404).send('Invalid weapon name or UUID');

    return res.json(weapon);
});


// CommonJS
module.exports = router;


// ESM
// export default router 
