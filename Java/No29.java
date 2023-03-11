
// factorial
import java.util.Scanner;

public class No29 {
    static int factorial(int n) {
        if (n == 1)
            return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.print("Enter n -> find factorial of n: ");

        Scanner sc = new Scanner(System.in);
        System.out.println(factorial(sc.nextInt()));

        sc.close();
    }
}