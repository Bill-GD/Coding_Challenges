public class No07_6 {
    public static void main(String[] args) {
        int sumSqrs = 0, sqrdSum = 0;
        for (int i = 1; i <= 100; i++) {
            sumSqrs += i * i;
            sqrdSum += i;
        }
        System.out.println(sqrdSum * sqrdSum - sumSqrs);
    }
}
