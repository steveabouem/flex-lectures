// Lets take another look at some file system methods
const fs = require('fs');
// REad all three text files, and add them upt
// How can we add the files together? three separate functions? setTimeout?
// fs is asyncrhonous, so it might not add them in order
fs.readFile("./data1.txt", "utf8", (err, data) => {//fisrt file
    if (err) {
        console.log(err);
    } else {
        // logic here
    }
})

// We're only dealing with a couple of files, imagine if we had 10 of them
let totalNumber = 0

const readAllFiles = (fileName, currentTotal) => {
    const fileReader = new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
              reject(err);
            } else {
              //This file number is 10
              resolve(currentTotal += Number(data));
            }
    });
  });

  return fileReader;
};

// USe promises for this type of problems
readAllFiles("./data1.txt", 0)
.then((totalAfterFile1) => {
    /// USE RESOLVE VALUE
    readAllFiles("./data2.txt", totalAfterFile1)
    .then((totalAfterFile2) => {
        /// RESOLVE
        readAllFiles("./data3.txt", totalAfterFile2)
        .then((totalAfterFile3) => {
            /// RESOLVE
            readAllFiles("./data4.txt", totalAfterFile3)
            .then((totalAfterFile4) => {
                /// RESOLVE
                console.log('ALL FILES ADDED: ', totalAfterFile4);
            })
        })
    })
})
.catch((error) =>{
    console.log('FAILED: ', error);
});

// Callback hell
fs.readFile("./data1.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    //This file number is 10
    totalNumber += Number(data);
    // console.log(totalNumber);
    //Execute another fs.readFile
    fs.readFile("./data2.txt", "utf8", (err1, data1) => {
      if (err1) {
        console.log(err1);
      } else {
        //This file number is 20
        totalNumber += Number(data1);
        // console.log(totalNumber);
        fs.readFile("./data3.txt", "utf8", (err2, data2) => {
          if (err2) {
            console.log(err2);
          } else {
            //This file number is 30
            totalNumber += Number(data2);
            fs.readFile("./data4.txt", "utf8", (err3, data2) => {
                  if (err3) {
                      console.log(err3);
                    } else {
                        //This file number is 30
                        totalNumber += Number(data2);
                  
                      console.log('Added up through callback: ', totalNumber);
                      }
                    });
                }
              });
            } 
          });
        }
});