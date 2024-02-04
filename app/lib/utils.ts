import { Revenue } from './definitions';

export const formatCurrency = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

// more about the game: https://en.wikipedia.org/wiki/Opera_Game
export const BARBER_OF_SEVILLE_GAME = {
  "moves": [
    {"moveNumber": 1, "white": "e4", "black": "e5"},
    {"moveNumber": 2, "white": "Nf3", "black": "d6"},
    {"moveNumber": 3, "white": "d4", "black": "Bg4"},
    {"moveNumber": 4, "white": "d4xe5", "black": "Bxf3"},
    {"moveNumber": 5, "white": "Qxf3", "black": "d6xe5"},
    {"moveNumber": 6, "white": "Bc4", "black": "Nf6"},
    {"moveNumber": 7, "white": "Qb3", "black": "Qe7"},
    {"moveNumber": 8, "white": "Nc3", "black": "c6"},
    {"moveNumber": 9, "white": "Bg5", "black": "b5"},
    {"moveNumber": 10, "white": "Nxb5", "black": "c6xb5"},
    {"moveNumber": 11, "white": "Bxb5+", "black": "Nd7"},
    {"moveNumber": 12, "white": "0-0-0", "black": "Rd8"},
    {"moveNumber": 13, "white": "Rxd7", "black": "Rxd7"},
    {"moveNumber": 14, "white": "Rd1", "black": "Qe6"},
    {"moveNumber": 15, "white": "Bxd7+", "black": "Nxd7"},
    {"moveNumber": 16, "white": "Qb8+", "black": "Nxb8"},
    {"moveNumber": 17, "white": "Rd8#", "black": ""}
  ]
}
export const OPERA_GAME_FEN = '1n1Rkb1r/p4pppp/4q3/4p1B1/4P3/8/PPP2PPP/2K5 b - - 0 1'

