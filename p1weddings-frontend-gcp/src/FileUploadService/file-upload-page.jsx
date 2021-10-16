const { Storage } = require('@google-cloud/storage');
const storage = new Storage();



export default function FileUploadPage() {

    async function getFile() {

        const fileName = 'receipt1.png';
        const bucket = storage.bucket('p1wedding-datastore');
        const response = await bucket.get(fileName);
        console.log(response);
    }


    async function uploadFile() {

        const bucket = storage.bucket('p1wedding-datastore');
        const fileContent = ''
        const buffer = Buffer.from(fileContent, 'base64');
        const fileName = 'receipt1.png';
        const file = bucket.file(fileName);
        await file.save(buffer);
        await file.makePublic();
        console.log(file.publicUrl());
    }


    exports.upload = async (req, res) => {
        try {

            const body = req.body;
            console.log(body);
            console.log(body.extension);

            if ((body.extension === 'jpg') || (body.extension === 'png') || (body.extension === 'bmp')) {
                const bucket = storage.bucket('p1wedding-datastore');
                const buffer = Buffer.from(body.content, 'base64');
                const file = bucket.file(`${body.name}.${body.extension}`);

                await file.save(buffer);

                // check file size if <= 10MB???????????
                if (file.size) {
                    await file.makePublic();
                    res.send({ imageLink: file.publicUrl() });
                }
            } else {
                break;      // do nothing, jump to catch
            }
        } catch (error) {
            document.getElementById('upload_result').innerHTML = error;
        }
    };

    return (
        <div>
            <div>
                <h3>File Upload Page</h3>
            </div>
            <div>
                <p id='upload_result'></p>
                <button onClick='uploadFile'>Click to upload file</button>
            </div>


        </div>
    )
}