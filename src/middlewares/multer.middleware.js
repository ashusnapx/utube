import multer from "multer";

const DESTINATION_DIR = "./public/temp";
const FIELD_NAME = "file";
const FILE_SIZE = 5 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DESTINATION_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: FILE_SIZE },
}).single(FIELD_NAME);
