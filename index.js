import { QUOTES } from './quote.js';

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const quoteTopic = document.getElementById('quote-topic');
const newQuoteBtn = document.getElementById('new-quote-btn');
const share = document.getElementById('share');

function getRandomInt() {
  return Math.floor(Math.random() * QUOTES.length);
}

function generateAuthor(quote) {
  quoteAuthor.innerText = quote['author'];
  const quoteProfessoin = document.createElement('span');
  quoteProfessoin.innerText = `(${quote['profession']})`;
  quoteProfessoin.classList = 'block';
  quoteProfessoin.id = 'author-profession';
  quoteAuthor.append(quoteProfessoin);
}

function generateTopicItem(topicItems) {
  let topics = '';
  topicItems.forEach((value) => (topics += ' #' + value));
  quoteTopic.innerText = topics;
}

const defaultQuote = QUOTES[getRandomInt()];

function generateContents(quote) {
  quoteText.innerText = quote['quote'];
  generateAuthor(quote);

  generateTopicItem(quote['topics']);
}

function btnNewquote() {
  let newQuote = QUOTES[getRandomInt()];
  generateContents(newQuote);
}

function btnShareTwitter() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}-${quoteAuthor.innerText}`;
  window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', btnNewquote);

share.addEventListener('click', btnShareTwitter);

generateContents(defaultQuote);
