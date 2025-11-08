// const express = require('express')
// const router = express.Router();

// const router = require('express').Router();


// explicit require (BEST)
const Router = require('express').Router;

// // require then destructure
// const { Router } = require('express');




const router = Router();

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


// ESM
// export default router 
