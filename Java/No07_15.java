
// slow af for i >= 15
import java.util.Date;

public class No07_15 {
    static void timeSince(long t1) {
        long t2 = new Date().getTime();
        System.out.println(
                "Time: " + ((t2 - t1 < 1000) ? (t2 - t1) + "ms" : new Date(t2 - t1).toString().substring(14, 19)));
    }

    static long countPath(int n, int m) {
        if (n == 0 || m == 0)
            return 1;
        if (n == 1)
            return m + 1;
        if (m == 1)
            return n + 1;
        return countPath(n, m - 1) + countPath(n - 1, m);
    }

    public static void main(String[] args) {
        long t1 = new Date().getTime();
        int i = 11; // 20 -> about 1m14s
        System.out.println(countPath(i, i));
        timeSince(t1);
    }
}
