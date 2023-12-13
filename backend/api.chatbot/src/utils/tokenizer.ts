/**
 * Tokenizer utility
 * Breaks down a sentence into individual words (tokens)
 */

class Tokenizer {
  /**
   * Tokenizes a given text
   * @param {string} text - The text to tokenize
   * @returns {Array} - The tokenized text
   */
  static tokenize(text) {
    // Ensure text is a string
    if (typeof text !== 'string') {
      throw new Error('Invalid input: Text must be a string');
    }

    // Convert to lowercase and remove punctuation
    const cleanedText = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

    // Split text into tokens (words)
    const tokens = cleanedText.split(' ');

    return tokens;
  }
}

module.exports = Tokenizer;