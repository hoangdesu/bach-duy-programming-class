const Router = require('express').Router;
const router = Router();

const fs = require('fs');
const path = require('path');

// const agentsDataPath = path.join(__dirname, 'data', 'agents');
// console.log('> agentsDataPath', agentsDataPath);


router.get('/', (req, res) => {

    // console.log('selected lang: ', req.selectedLang);
    
    // res.json(agents);

    res.send('weapons');
});


// /api/v1/weapons/:uuid
router.get('/:uuid', (req, res) => {
    const { uuid } = req.params;

    // for (const agent of agents) {
    //     if (agent.uuid === uuid) {
    //         return res.json(agent);
    //     }
    // }

    // return res.status(404).json('Invalid UUID');

    return res.send(uuid);
});


// CommonJS
module.exports = router;
