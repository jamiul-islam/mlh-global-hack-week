#include <iostream>
#include <ctime>
#include <cstdlib>

enum Choice
{
    ROCK,
    PAPER,
    SCISSORS
};

enum Result
{
    WIN,
    LOSE,
    DRAW
};

Choice getPlayerChoice()
{
    int choice;
    do
    {
        std::cout << "Enter your choice (0 for Rock, 1 for Paper, 2 for Scissors): ";
        std::cin >> choice;
    } while (choice < 0 || choice > 2);

    return static_cast<Choice>(choice);
}

Choice getComputerChoice()
{
    return static_cast<Choice>(rand() % 3);
}

Result determineWinner(Choice player, Choice computer)
{
    if (player == computer)
    {
        return DRAW;
    }
    else if ((player == ROCK && computer == SCISSORS) ||
             (player == PAPER && computer == ROCK) ||
             (player == SCISSORS && computer == PAPER))
    {
        return WIN;
    }
    else
    {
        return LOSE;
    }
}

int main()
{
    srand(static_cast<unsigned int>(time(0))); // Seed for random number generation

    std::cout << "Welcome to Rock, Paper, Scissors!\n";

    while (true)
    {
        Choice playerChoice = getPlayerChoice();
        Choice computerChoice = getComputerChoice();

        std::cout << "You chose ";
        switch (playerChoice)
        {
        case ROCK:
            std::cout << "Rock";
            break;
        case PAPER:
            std::cout << "Paper";
            break;
        case SCISSORS:
            std::cout << "Scissors";
            break;
        }

        std::cout << "\nComputer chose ";
        switch (computerChoice)
        {
        case ROCK:
            std::cout << "Rock";
            break;
        case PAPER:
            std::cout << "Paper";
            break;
        case SCISSORS:
            std::cout << "Scissors";
            break;
        }

        Result result = determineWinner(playerChoice, computerChoice);

        std::cout << "\nResult: ";
        switch (result)
        {
        case WIN:
            std::cout << "You win!\n";
            break;
        case LOSE:
            std::cout << "You lose!\n";
            break;
        case DRAW:
            std::cout << "It's a draw!\n";
            break;
        }

        char playAgain;
        std::cout << "Do you want to play again? (y/n): ";
        std::cin >> playAgain;

        if (playAgain != 'y' && playAgain != 'Y')
        {
            break;
        }
    }

    return 0;
}
