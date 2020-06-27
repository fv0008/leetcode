//
// Created by fxl on 2020/6/25.
//
#include <iostream>
#include <vector>
#include <thread>
#include <zconf.h>
#include <math.h>

using namespace std;
static mutex print;

class glock
{
public:
    glock()
    {
    }
    bool printnum(int n)
    {
        bool r = false;
        if(m.try_lock() && print.try_lock())
        {
            int l = this->last.size();
            int s = ceil(this->last.size()/2.0);
            if(l%2==0 && n==0)
            {
                cout<<n<<endl;
                this->last.push_back(n);
                r =   true;
            }
            else if(l%2==1 && s==n )
            {
                cout<<n<<endl;
                this->last.push_back(n);
                r =   true;
            }

        }
        m.unlock();
        print.unlock();

        return  r;
    };
    ~glock()
    {
        m.unlock() ;
        print.unlock();
    }
private:
    vector<int> last;
    mutex m;
};
class ZeroEvenOdd {
private:
    int n;
    glock glock;
public:
    typedef void (ZeroEvenOdd::*Func)(int);
    ZeroEvenOdd(){}
    ZeroEvenOdd(int n) {
        this->n = n;
        std::thread t0(&ZeroEvenOdd::odd,this,this->n);
        std::thread t1(&ZeroEvenOdd::even,this,this->n);
        std::thread t2(&ZeroEvenOdd::zero,this,this->n);
        t0.join();
        t1.join();
        t2.join();
    }
    // printNumber(x) outputs "x", where x is an integer.
    void zero(int printNumber) {
        for(auto i=0;i<printNumber;i++) {

            while (false == glock.printnum(0)) {
                sleep(0);
            }
        }
    }

    void even(int printNumber) {

            for(auto i=0;i<=printNumber;i++) {
                if (0 == i % 2 && i!=0)
                {
                    while (false==glock.printnum(i))
                    {sleep(0);}
                }

            }
    }

    void odd(int printNumber) {

            for(auto i=0;i<=printNumber;i++) {
                if (1 == i % 2)
                {
                    while(false==glock.printnum(i))
                    {sleep(0);}
                }
            }
    }
};
//int main()
//{
//    ZeroEvenOdd S(6);
//}