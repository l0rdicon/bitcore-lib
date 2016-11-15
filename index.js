'use strict';

var clamcore = module.exports;

// module information
clamcore.version = 'v' + require('./package.json').version;
clamcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of clamcore-lib found. ' + 
      'Please make sure to require clamcore-lib and check that submodules do' +
      ' not also include their own clamcore-lib dependency.';
    throw new Error(message);
  }
};
clamcore.versionGuard(global._clamcore);
global._clamcore = clamcore.version;

// crypto
clamcore.crypto = {};
clamcore.crypto.BN = require('./lib/crypto/bn');
clamcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
clamcore.crypto.Hash = require('./lib/crypto/hash');
clamcore.crypto.Random = require('./lib/crypto/random');
clamcore.crypto.Point = require('./lib/crypto/point');
clamcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
clamcore.encoding = {};
clamcore.encoding.Base58 = require('./lib/encoding/base58');
clamcore.encoding.Base58Check = require('./lib/encoding/base58check');
clamcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
clamcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
clamcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
clamcore.util = {};
clamcore.util.buffer = require('./lib/util/buffer');
clamcore.util.js = require('./lib/util/js');
clamcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
clamcore.errors = require('./lib/errors');

// main bitcoin library
clamcore.Address = require('./lib/address');
clamcore.Block = require('./lib/block');
clamcore.MerkleBlock = require('./lib/block/merkleblock');
clamcore.BlockHeader = require('./lib/block/blockheader');
clamcore.HDPrivateKey = require('./lib/hdprivatekey.js');
clamcore.HDPublicKey = require('./lib/hdpublickey.js');
clamcore.Networks = require('./lib/networks');
clamcore.Opcode = require('./lib/opcode');
clamcore.PrivateKey = require('./lib/privatekey');
clamcore.PublicKey = require('./lib/publickey');
clamcore.Script = require('./lib/script');
clamcore.Transaction = require('./lib/transaction');
clamcore.URI = require('./lib/uri');
clamcore.Unit = require('./lib/unit');

// dependencies, subject to change
clamcore.deps = {};
clamcore.deps.bnjs = require('bn.js');
clamcore.deps.bs58 = require('bs58');
clamcore.deps.Buffer = Buffer;
clamcore.deps.elliptic = require('elliptic');
clamcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
clamcore._HDKeyCache = require('./lib/hdkeycache');
clamcore.Transaction.sighash = require('./lib/transaction/sighash');
