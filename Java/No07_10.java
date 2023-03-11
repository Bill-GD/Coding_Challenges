public class No07_10 {
    static boolean isPrime(int n) {
        for (int i = 2; i <= Math.sqrt(n); i++)
            if (n % i == 0)
                return false;
        return true;
    }

    public static void main(String[] args) {
        long sum = 0;
        for (int i = 2; i < 2_000_000; i++) {
            if (isPrime(i))
                sum += i;
        }
        System.out.println(sum);
    }
}
