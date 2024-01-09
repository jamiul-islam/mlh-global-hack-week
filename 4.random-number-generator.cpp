#include <iostream>

using namespace std;

int main()
{
    int max;
    cout << "Random Number will be generated in the range of 0 to your input " << endl;
    cout << "Enter a number: ";
    cin >> max;

    int random = rand() % max + 1;
    cout << "Random number between 0 and " << max << " is " << random << endl;

    return 0;
}