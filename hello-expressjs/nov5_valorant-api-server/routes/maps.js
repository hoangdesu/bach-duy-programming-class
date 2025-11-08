const express = require('express')
const router = express.Router();


// router.get('/', (req, res) => {

//     // console.log('selected lang: ', req.selectedLang);
    
//     // res.json(agents);

//     res.send('maps');
// });


// Combined route handlers
router.route('/')
    .get((req, res) => {
        res.send('GET /maps');
    })
    .post((req, res) => {
        res.send('POST /maps');
    })
    .put((req, res) => {
        res.send('PUT /maps');
    })


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
