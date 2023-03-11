public class No07_2 {
    public static void main(String[] args) {
        int f0 = 0, f1 = 1, sum = 0;
        while (f0 + f1 <= 4_000_000) {
            int f = f0 + f1;
            if (f % 2 == 0)
                sum += f;
            f0 = f1;
            f1 = f;
        }
        System.out.println(sum);
    }
}
