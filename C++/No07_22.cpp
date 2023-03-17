#include <iostream>
#include <string>
#include <fstream>
#include <sstream>
#include <vector>
#include <chrono>

using namespace std;
using namespace std::chrono;

int ascii_to_value(char c) {
    return (int)c - 64;
}

void qSort(vector<string>& v, int l, int r) {
    string p = v.at((l + r) / 2);
    int i = l, j = r;
    while (v.at(i) < p) i++;
    while (v.at(j) > p) j--;

    if (i <= j) {
        string t = v.at(i);
        v.at(i) = v.at(j);
        v.at(j) = t;
        i++; j--;
    }

    if (i < r) qSort(v, i, r);
    if (l < j) qSort(v, l, j);
}

int main() {
    auto start = high_resolution_clock::now();
    ifstream inF("../Resources/names.txt");

    vector<string> v;
    string name;
    while (getline(inF, name, ',')) {
        istringstream iss(name);
        getline(iss, name, '"');
        getline(iss, name, '"');
        v.push_back(name);
    }

    qSort(v, 0, v.size() - 1);

    int totalScore = 0;
    for (int i = 0; i < v.size(); i++) {
        int score = 0;
        for (auto x : v.at(i))
            score += ascii_to_value(x);
        totalScore += (score * (i + 1));
    }
    cout << totalScore << endl;

    cout << "Time: " << duration_cast<milliseconds>(high_resolution_clock::now() - start).count() << "ms" << endl;
}