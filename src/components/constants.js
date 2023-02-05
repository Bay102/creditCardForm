import VISA_ICON from  './images/cc-assets/visa.png';
import AMERICAN_ICON from  './images/cc-assets/amex.png';
import MASTER_CARD_ICON from  './images/cc-assets/masterCard.png';
import DISCOVER_ICON from  './images/cc-assets/discover.png';

export const OTHERCARDS = [
   /[1-9]/,
   /\d/,
   /\d/,
   /\d/,
   ' ',
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   ' ',
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   ' ',
   /\d/,
   /\d/,
   /\d/,
   /\d/,
];

export const AMERICANEXPRESS = [
   /[1-9]/,
   /\d/,
   /\d/,
   /\d/,
   ' ',
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   ' ',
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   /\d/,
   ' ',
   /\d/,
   /\d/,
   /\d/,
   /\d/,
];

export const CARD = [
   'VISA',
   'MASTERCARD',
   'AMERICAN_EXPRESS',
   'DISCOVER'
]

export const CARDICON = {
   VISA: VISA_ICON ,
   MASTERCARD: MASTER_CARD_ICON,
   AMERICAN_EXPRESS: AMERICAN_ICON,
   DISCOVER: DISCOVER_ICON,
}