const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Daniel';
    let text = 'Some message';
    let message = generateMessage(from, text);

    expect(message).toMatchObject({ from, text });
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location objcet', () => {
    let from = 'Admin';
    let latitude = 10;
    let longitude = 20;
    let url = 'https://www.google.com/maps?q=10,20';
    let message = generateLocationMessage(from, latitude, longitude);

    expect(message).toMatchObject({ from, url });
    expect(typeof message.createdAt).toBe('number');
  });
});
