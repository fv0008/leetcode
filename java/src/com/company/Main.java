package com.company;
/*
public class Main {

    public static void main(String args[]) {
	// write your code
        amethod(args);
    }
    public static void amethod(String[] args){
        System.out.println(args);
        System.out.println(args[1]);
    }
}
*/

public class Main{
    static int i = 0;
    public  int amethod(){

        i++;
        return  i;
    }
    public  static void main(String argsp[]){
        Main test = new Main();
        test.amethod();
        int j = test.amethod();
        System.out.println(j);
    }
}