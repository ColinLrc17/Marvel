const { getCharacters, getCharacterById } = require('./character-api');
const fs = require('fs');

describe('character-api', () => {
  const expected = JSON.parse(fs.readFileSync('src/data/characters.json', 'utf8'));

  describe('getCharacters', () => {
    it('returns all characters sorted by name ascending by default', () => {
      // when

      // then
      const characters = getCharacters();

      // expect the first character to be Beast
      expect(characters[0].name).toBe('Beast');

      // expect the last character to be Wolverine
      expect(characters[characters.length - 1].name).toBe('Wolverine');
    });

    it('returns all characters sorted by modified descending', () => {
      // when

      // then
      const characters = getCharacters('modified', 'desc');

      // expect the first character to be Wolverine
      expect(characters[0].name).toBe('Groot');

      // expect the last character to be Beast
      expect(characters[characters.length - 1].name).toBe('Hulk');
    });

    it('throws an error if orderBy is invalid', () => {
      // when
      const orderBy = 'foo';

      // then
      expect(() => {
        getCharacters(orderBy);
      }).toThrow(`Invalid orderBy parameter: ${orderBy}`);
    });

  });

  describe('getCharacterById', () => {
    test('returns the character with the given id when id is a string', () => {
      // when
      const id = "1009663";
      const name = "Thor";

      // then
      const character = getCharacterById(id);

      // expect
      expect(character.id).toBe(id);
      expect(character.name).toBe(name);
    });

    test('returns the character with the given id when id is a number', () => {
      // when
      const id = 1009663;
      const name = "Thor";

      // then
      const character = getCharacterById(id);

      // expect
      expect(character.id).toBe(id.toString());
      expect(character.name).toBe(name);
    });

    test('throws an error if id is not provided', () => {
      expect(() => {
        getCharacterById();
      }).toThrow(`Parameter id must be a number or a string, but it was undefined`);
    });

    test('throws an error if id is not a number or a string', () => {
      expect(() => {
        getCharacterById({});
      }).toThrow(`Parameter id must be a number or a string, but it was object`);
    });

    test('throws an error if character with given id is not found', () => {
      const id = 999;
      expect(() => {
        getCharacterById(id);
      }).toThrow(`Character with id ${id} not found`);
    });
  });
});
