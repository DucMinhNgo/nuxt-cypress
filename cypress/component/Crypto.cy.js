import CryptoJS from 'crypto-js';

describe('Crypto', () => {
    it('crypto', async () => {
        // Encrypt
        const ciphertext = CryptoJS.AES.encrypt('tintin message', 'secret key 123').toString();
    
        // Decrypt
        const bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
    
      })
});