const https = require('https'),
url = require('url'),
// stream = require('stream')


function returnPromise(){
    let requestPromise = new Promise((resolve, reject) => {
        let request = https.request('https://www.baseball-reference.com/players/a/', res => {
            res.setEncoding('utf8')
            let buffer = new Buffer.alloc(100000, null, 'utf8')
                let offset = 0
                let writelength;
            
            res.on('data', d => {
                if (d){
                    writeLength = buffer.write(d, offset, 'utf8')                
                    offset += writeLength
                }               
            })
                
            res.on('close', () => {                
                trimBuf = buffer.slice(0, offset).toString();
                buffer = null                
                resolve(trimBuf)            
            })
        })
    
        request.end()
        
    })
    return requestPromise
}


let myPromise = returnPromise().then(val => {console.log(val)})