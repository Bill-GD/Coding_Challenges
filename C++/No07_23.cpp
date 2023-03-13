// this is slow af

#include <iostream>
#include <math.h>
#include <chrono>

using namespace std;
using namespace std::chrono;

bool is_prime(int n) {
    for (int i = 2; i <= sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}

bool is_abundant(int n) {
    if (is_prime(n)) return false;
    int sum = 0;
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0)
            sum += i;
    }
    return (sum > n);
}

int main() {
    auto start = high_resolution_clock::now();

    long sum = 0;
    for (int i = 1; i <= 28123; i++) {
        bool check = false;
        for (int j = 12; j <= i - 12; j++) {
            if (is_abundant(j) && is_abundant(i - j)) {
                check = true;
                break;
            }
        }
        if (check) continue;
        sum += i;
    }
    cout << sum << endl;

    cout << "\nTime: " << duration_cast<milliseconds>(high_resolution_clock::now() - start).count() << "ms" << endl;
}