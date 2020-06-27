#include "stdio.h"
#include <iostream>
#include <vector>

using namespace std;
 struct ListNode {
     int val;
     ListNode *next;
     ListNode(int x) : val(x), next(NULL) {}
 };

class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode* pmid = head;
        ListNode* pnext = head;
        int count = 0;
        while(pnext)
        {
            pnext = pnext->next;
            count++;
            if(0==count%2)
            {pmid = pmid->next;}
        }
        return pmid;
    }
};

int main(){

    vector<int> x = {1,2,3,4,5,6};
    x.reserve(x.size());
    vector<int>::iterator t;
    ListNode* b = NULL;
    ListNode* p = NULL;
    for(t=x.begin();t!=x.end();t++)
    {
        int v = *t;
        ListNode* cur = new ListNode(v);
        if(NULL==p)
        {
            p = cur;
            b = cur;
        }
        else{
            p->next = cur;
            p = cur;
        }
    }
    Solution S;
    S.middleNode(b);

}
