const express = require('express')
const router = express.Router();

const fs = require('fs');
const path = require('path');

const agentsDataPath = path.join('data', 'agents');
// console.log('> agentsDataPath', agentsDataPath);

// const agentFiles = languageOptions.map(lang => {
//     const agentFilePath = path.join(agentsDataPath, lang)  + '.json';
//     console.log('> agentFile:', agentFilePath);
    
//     return JSON.parse(fs.readFileSync(agentFilePath))['data'];
// });

// const agents = JSON.parse(file)['data'];


router.get('/agents', (req, res) => {
    // console.log('> req.selectedLang:', req.selectedLang);

    const agentsFile = `${agentsDataPath}/${req.selectedLang}.json`;
    const fileContent = fs.readFileSync(agentsFile);
    const agents = JSON.parse(fileContent);
    
    res.json(agents);
});


router.get('/agents/:q', (req, res) => {
    // query can either be uuid or agent's displayName
    const { q } = req.params;

    // for (const agent of agents) {
    //     if (agent.uuid === uuid) {
    //         return res.json(agent);
    //     }
    // }

    // return res.status(404).json('Invalid UUID');

    const agentsFile = `${agentsDataPath}/${req.selectedLang}.json`;
    const fileContent = fs.readFileSync(agentsFile);
    const agents = JSON.parse(fileContent);

    const agent = agents.find(agent => agent.uuid === q || agent.displayName.toLowerCase() === q);

    if (!agent) return res.status(404).send('Invalid agent name or UUID');

    return res.json(agent);
});


// CommonJS
module.exports = router;


// ESM
// export default router 
