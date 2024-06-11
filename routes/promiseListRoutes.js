const express = require('express');
const router = express.Router();
const promiseListController = require("../controllers/promiseListController");

//약속 목록
router.get('/', promiseListController.showPromisesList);
router.get('/matchingPromiseList', promiseListController.getMatchingPromises);
router.get('/notMatchingPromiseList', promiseListController.getNotMatchingPromises);
router.get('/:promiseNum/deposit', promiseListController.showPromiseDeposit);
router.post('/:promiseNum/deposit', promiseListController.confirmDeposit);
router.get('/:promiseNum/request', promiseListController.showPromiseConfirmation);
router.post('/:promiseNum/request/reject', promiseListController.rejectProfilePromise);
router.post('/:promiseNum/request/accept', promiseListController.acceptPromise);

module.exports = router;