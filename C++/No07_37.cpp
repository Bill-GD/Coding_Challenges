#include <iostream>
#include <math.h>
#include <chrono>

using namespace std;
using namespace std::chrono;

long power(int a, int b) {
    long result = 1;
    while (b > 0) {
        result *= a;
        b--;
    }
    return result;
}

bool is_prime(int n) {
    if (n == 1) return false;
    for (int i = 2; i <= sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}

int count_digit(int n) {
    int count = 0;
    while (n > 0) {
        count++;
        n /= 10;
    }
    return count;
}

bool from_left(int n) {
    int digits = count_digit(n);
    while (digits > 0) {
        if (!is_prime(n)) return false;
        n = n % power(10, digits - 1);
        digits--;
    }
    return true;
}

bool from_right(int n) {
    while (n > 0) {
        if (!is_prime(n)) return false;
        n /= 10;
    }
    return true;
}

bool is_truncatable_prime(int n) {
    return is_prime(n) && from_right(n) && from_left(n);
}

int main() {
    auto start = high_resolution_clock::now();

    long sum = 0;
    int count = 0;
    // only 11 of these numbers exist
    for (int i = 10; count < 11; i++) {
        if (i % 10 != 3 && i % 10 != 7) continue;
        if (is_truncatable_prime(i)) {
            cout << i << " ";
            sum += i;
            count++;
        }
    }
    cout << endl << sum;

    cout << "\nTime: " << duration_cast<milliseconds>(high_resolution_clock::now() - start).count() << "ms" << endl;
}