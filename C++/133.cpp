
class Solution {
public:
    Node* cloneGraph(Node* node) {
        if(NULL!=node){
            unordered_map<int,Node*>::iterator it = set.find(node->val);
            if(it!=set.end())
            {
                return (*it).second;
            }
            Node* Head=new Node(node->val);
            set[Head->val]=Head;
            vector<Node*> cp = vector<Node*>();
            for(vector<Node*>::iterator it=node->neighbors.begin();it!=node->neighbors.end();it++)
            {
                Node* p = cloneGraph(*it);
                cp.push_back(p);
            }
            Head->neighbors = cp;
            return Head;
        }
        return NULL;
    }
    unordered_map<int,Node*> set;
};