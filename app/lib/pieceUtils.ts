// Piece images
import b_bishop from '@/public/pieceImages/b_bishop.png'
import w_bishop from '@/public/pieceImages/w_bishop.png'
import b_king from '@/public/pieceImages/b_king.png'
import w_king from '@/public/pieceImages/w_king.png'
import b_knight from '@/public/pieceImages/b_knight.png'
import w_knight from '@/public/pieceImages/w_knight.png'
import b_pawn from '@/public/pieceImages/b_pawn.png'
import w_pawn from '@/public/pieceImages/w_pawn.png'
import b_queen from '@/public/pieceImages/b_queen.png'
import w_queen from '@/public/pieceImages/w_queen.png'
import b_rook from '@/public/pieceImages/b_rook.png'
import w_rook from '@/public/pieceImages/w_rook.png'

export const PIECE_IMAGES = {
    'b_bishop': b_bishop,
    'w_bishop': w_bishop,
    'b_king': b_king,
    'w_king': w_king,
    'b_knight': b_knight,
    'w_knight': w_knight,
    'w_pawn': w_pawn,
    'b_pawn': b_pawn,
    'b_queen': b_queen,
    'w_queen': w_queen,
    'b_rook': b_rook,
    'w_rook': w_rook
};

export const FEN_PIECE_IMAGES = {
    'b': b_bishop,
    'B': w_bishop,
    'k': b_king,
    'K': w_king,
    'n': b_knight,
    'N': w_knight,
    'p': b_pawn,
    'P': w_pawn,
    'q': b_queen,
    'Q': w_queen,
    'r': b_rook,
    'R': w_rook
};

export const PIECE_NAMES = {
    'b': "black bishop",
    'B': "white bishop",
    'k': "black king",
    'K': "white king",
    'n': "black knight",
    'N': "white knight",
    'p': "black pawn",
    'P': "white pawn",
    'q': "black queen",
    'Q': "white queen",
    'r': "black rook",
    'R': "white rook"
};