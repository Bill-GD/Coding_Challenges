// slow af for i >= 15
import java.util.Date;

public class No07_15 {
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
        long t1 = (new Date()).getTime();
        int i = 20; // about 1m14s
        System.out.println(countPath(i, i));
        System.out.println(new Date(new Date().getTime() - t1).toString());
        System.out.println(new Date(1).toString());
    }
}
