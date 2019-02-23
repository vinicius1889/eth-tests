const Web3  = require('web3') ; 
const ganache = require('ganache-cli');
const web3 =  new Web3(ganache.provider()) ;

let accounts = []
describe('It should test some simple things in ethereum', ()=>{
    
    beforeAll( async (done)=>{
        accounts = await web3.eth.getAccounts();
        done()

    })
   
    it('It should get all accounts from ganache-cli',  ()=>{

       console.log(accounts)

    })
})