const express = require('express')
const router = express.Router();


router.get('/api/v1/agents', (req, res) => {

    // console.log('selected lang: ', req.selectedLang);
    
    // res.json(agents);

    console.log('> req.lang:', req.lang);
    

    res.send('agents');
});


router.get('/api/v1/agents/:uuid', (req, res) => {
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


// ESM
// export default router 
