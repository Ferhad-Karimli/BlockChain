const Blockchain = require('./blockchain')


const bitcoin = new Blockchain()

const previousBlockHash = 'dsdisaoidsndajdoad'

const currentBlockData = [

    {
        amount: 10,
        sender: 'ahssdhakdhkadkha',
        recipient: '9sdjadjaan90dsda'
    },

    {
        amount: 15,
        sender: 'ahssssdhakdhkadkhaf',
        recipient: '9sdaaajadjaan903'
    },
    {
        amount: 20,
        sender: 'ahsnnnnsssdhakdhkadkha',
        recipient: '9smmmmdaaajadjaan90'
    }
]

//   finding out Hash

console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,36656),"hash")

// finding out  proof of work

console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData),"proof of work")
const nonce = 100


// random hash
console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce),'random hash')

bitcoin.createNewBlock (2389 ,'788478hd','sjksddsd')
bitcoin.createNewBlock(23323,'uieiieie','uddusuusd','utitfff')
bitcoin.createNewTransaction(100,'89AFnrrr',"NNuusss")

bitcoin.createNewBlock (23895654 ,'7884ss78hd','sjkaaasddsd')

bitcoin.createNewTransaction(50,'yrurufbfff','yydhdjsndbbs')
bitcoin.createNewTransaction(120,'yruaasrufbfff','yydhdjsaassndbbs')
bitcoin.createNewTransaction(125,'yruaasrufbfff','yydhdjsaassndbbs')
bitcoin.createNewBlock (238989 ,'78847kkss8hd','sjksdaadsd')


// console.log(bitcoin)