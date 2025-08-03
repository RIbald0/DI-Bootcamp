# Function to display the current state of the board
def display_board(board):
    print()
    print(f' {board[0]} | {board[1]} | {board[2]} ')
    print('-----------')
    print(f' {board[3]} | {board[4]} | {board[5]} ')
    print('-----------')
    print(f' {board[6]} | {board[7]} | {board[8]} ')
    print()

# Function to get the player's move
def player_input(player, board):
    while True:
        try:
            # Ask the player for a position (1-9)
            choice = int(input(f"Player {player}, choose a position (1-9): "))
            
            # Check if the input is within range
            if choice < 1 or choice > 9:
                print("Invalid input. Choose a number between 1 and 9.")
            
            # Check if the chosen cell is already taken
            elif board[choice - 1] != ' ':
                print("That position is already taken. Try again.")
            
            # If all good, return the index (0-8)
            else:
                return choice - 1
        except ValueError:
            print("Please enter a number.")

# Function to check if the current player has won
def check_win(board, player):
    # List of all winning combinations by index
    win_combinations = [
        [0, 1, 2],  # Top row
        [3, 4, 5],  # Middle row
        [6, 7, 8],  # Bottom row
        [0, 3, 6],  # Left column
        [1, 4, 7],  # Middle column
        [2, 5, 8],  # Right column
        [0, 4, 8],  # Diagonal top-left to bottom-right
        [2, 4, 6]   # Diagonal top-right to bottom-left
    ]
    
    # Check if any winning combination is filled with the player's symbol
    for combo in win_combinations:
        if all(board[pos] == player for pos in combo):
            return True
    return False

# Function to check if the board is full (tie)
def check_tie(board):
    return ' ' not in board  # Returns True if there are no empty spaces

# Main game loop function
def play():
    # Create an empty board with 9 spaces
    board = [' '] * 9
    
    # Start with player X
    current_player = 'X'
    
    # Keep looping until the game ends
    while True:
        # Show the current board
        display_board(board)
        
        # Get and make the current player's move
        move = player_input(current_player, board)
        board[move] = current_player
        
        # Check if the current player has won
        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            break  # End the game
        
        # Check for tie (board full and no winner)
        elif check_tie(board):
            display_board(board)
            print("🤝 It's a tie!")
            break  # End the game
        
        # Switch players: X <-> O
        current_player = 'O' if current_player == 'X' else 'X'

# Start the game by calling the main function
play()


     



