#include <iostream>
#include <string>
#include <fstream>
#include <sstream>
#include <chrono>

using namespace std;
using namespace std::chrono;

int char_to_value(char c) {
    return (int)c - 64;
}

bool is_triangle_number(int n) {
    int i = 1;
    while ((i * (i + 1)) / 2 < n) i++;
    return n == ((i * (i + 1)) / 2);
}

int main() {
    auto start = high_resolution_clock::now();

    ifstream inF("./Resources/words.txt");
    string word;
    int count = 0;
    while (getline(inF, word, ',')) {
        int sum = 0;
        istringstream iss(word);
        getline(iss, word, '"');
        getline(iss, word, '"');
        for (auto c : word)
            sum += char_to_value(c);
        if (is_triangle_number(sum))
            count++;
    }

    cout << count;

    cout << "\nTime: " << duration_cast<milliseconds>(high_resolution_clock::now() - start).count() << "ms" << endl;
}