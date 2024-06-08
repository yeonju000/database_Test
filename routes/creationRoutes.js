const express = require('express');
const router = express.Router();
const session = require('express-session');
const creationController = require("../controllers/creationController");
const oldProfileController = require("../controllers/oldProfileController");
const youngProfileController = require("../controllers/youngProfileController");
const FileStore = require('session-file-store')(session);
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get("/", creationController.create);
router.get("/creation", creationController.create); // 소문자로 경로 설정 //nonProfile.ejs or login
router.get("/login", creationController.create);
router.get("/senior", oldProfileController.createOldProfile); // 소문자로 경로 설정
router.post("/senior", upload.single('profileImage'), oldProfileController.createSeniorProfile);
router.get("/student", youngProfileController.createYoungProfile); // 68 수정
router.post("/student", upload.single('profileImage'), youngProfileController.createStudentProfile); // 오타 수정

module.exports = router;
