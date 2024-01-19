const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    addFriend,
    deleteFriend,
    createUser,
    deleteUser,
    addReaction,
    removeReaction,
} = require('../../controllers/userController');

router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:userId')
.get(getOneUser)
.delete(deleteUser);

router.route(`/:userId/friends/:friendsId`)
.post(addFriend)
.delete(deleteFriend);

router.route('/:userId/reactions')
.post(addReaction);

router.route('/:userId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;