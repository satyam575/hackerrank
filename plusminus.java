import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int arr[] = new int[n];
        double positive = 0;
        double negative = 0;
        double zero = 0;
        for(int arr_i=0; arr_i < n; arr_i++){
            arr[arr_i] = in.nextInt();
            if (arr[arr_i] >= 1) {
                positive++;
            }
            if (arr[arr_i] < 0) {
                negative++;
            }
            if (arr[arr_i] == 0) {
                zero++;
            }
        }
            System.out.println(positive/n);
            System.out.println(negative/n);
            System.out.println(zero/n);
    }
}