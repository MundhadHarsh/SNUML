
import spawn1 from 'child_process';

export const predict = async (req, res, next)=> {
    try{                
        console.log("before spawn ")

        var dataToSend;
        // spawn new child process to call the python script
        const python = await spawn1.spawn('python', ['script1.py','arg1','arg2']);
        // collect data from script
        python.stdout.on('data', function (data) {
         console.log('Pipe data from python script ...');
         dataToSend = data.toString();
         console.log(dataToSend,"inside nodejs")
        });

        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            // send data to browser
            // res.send(dataToSend)
            res.status(200).send({"data":dataToSend,"message":"Congrats in ML!"})  
            });
           



    }catch(err){
        console.log("we in controller error",err)

        

    }


}