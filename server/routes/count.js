const router = require('express').Router();
let Count = require('../models/count.model');

const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
}

router.route('/').get((req, res) => {
    Count.find()
        .then(counts => res.json(counts))
        .catch(err => res.status(400).json(`Error: ${err}`));
})

router.route('/').post((req, res) => {
    Count.find()
        .then(count => {

            if ( ! isToday(count[count.length - 1].date) ) {
                const newCountData = new Count({
                    total: 1,
                    date: new Date(),
                });

                newCountData.save()
                    .then(() => res.json('Count data added for today!'))
                    .catch(err => res.status(400).json(`Error: ${err}`));
            } else {
                let countData = count[count.length - 1];

                countData.total = countData.total + 1;

                countData.save()
                    .then(() => res.json('Todays count data updated!'))
                    .catch(err => res.status(400).json(`Error: ${err}`));
            }
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;