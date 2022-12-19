// //const multer = require('multer');
// //const stockage = multer.memoryStorage();
// //const upload = multer({ stockage });
// const sharp = require('sharp');
// const fs = require('fs');

// module.exports = (req, res, next) => {
//     //upload.single('image') ( req, res, next => {
//         try{
//             // si le dossier n'existe pas on renvoie une erreur et on crée le dossier
//             fs.access('../client/public/imgUpload', (err) => {
//                 if (err) {
//                     console.log('Le dossier n\'existe pas');
//                     fs.mkdirSync('../client/public/imgUpload');
//                 }
//             });
//             //const name = req.file.originalname.split('.')[0] + Date.now() + '.jpg'
//             sharp(req.file.buffer)
//             .resize({width: 100, height: 100})
//             .toFormat('jpeg')
//             .jpeg({quality: 90})
//             //Précise dans quel dossier on veut enregistrer l'image et son nom
//            // .toFile(`../client/public/imgUpload/${name}`)
//             next();
//         } catch (error) {
//             res.status(400).json({error});
//         }
//    // });
// }

