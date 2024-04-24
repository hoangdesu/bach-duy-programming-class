public class Apr22_TicTacToe {
    public static void main(String[] args) {
        String[][] board = new String[3][3];

//        String[3]

//        can only reassign els using direct index accessing
        board[0][2] = "X";

//        enhanced for loop: only used for accessing elements. Cannot re-assign elements
        // quickly printout the board
//        System.out.println("--------------------");
//        for (String[] row : board) {
//            for (String el : row) {
//                System.out.print(el + " | ");
//            }
//            System.out.println("\n--------------------");
//        }

        // populate data using 1-9 for coordinates
        int counter = 1;
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                board[i][j] = String.valueOf(counter);
                counter++;
            }
        }

        printBoard(board);

//        X & O alternatively

//        choose X or O: X
//        Player X, Enter your move: 6 -> i=1,j=2
//
//                -------------
//                | 1 | 2 | 3 |
//                -------------
//                | 4 | 5 | X |
//                -------------
//                | 7 | 8 | 9 |
//                -------------
//
//        Player O, Enter your move: 5
//
//                -------------
//                | 1 | 2 | 3 |
//                -------------
//                | 4 | O | X |
//                -------------
//                | 7 | 8 | 9 |
//                -------------
//
//        Player X, Enter your move: 5
//
//                -------------
//                | 1 | 2 | 3 |
//                -------------
//                | 4 | O | X |
//                -------------
//                | 7 | 8 | 9 |
//                -------------

//        String[] moves = {1,2,3};

    }

    // method to print board
    public static void printBoard(String[][] board) {
        System.out.println("-------------");
        for (String[] row : board) {
            System.out.print("| ");
            for (String el : row) {
                System.out.print(el + " | ");
            }
            System.out.println("\n-------------");
        }
    }
}
