// Project Euler - #1

public class No07_1 {
    public static void main(String[] args) {
        int i = 1, sum = 0;
        while (i < 1000) {
            if (i % 3 == 0 || i % 5 == 0)
                sum += i;
            i++;
        }
        System.out.print(sum);
    }
}