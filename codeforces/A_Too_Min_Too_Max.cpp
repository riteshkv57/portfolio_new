#include<bits/stdc++.h>
using namespace std;
int main(){
    int t; cin>>t;
    while(t--){
        int a; cin>>a;
        vector<int> ans;
        for(int i=0;i<a;i++){
            int x; cin>>x;
            ans.push_back(x);
        }
        sort(ans.begin(),ans.end());
        cout<<(abs(ans[0]-ans[a-1])+abs(ans[a-1]-ans[1])+abs(ans[1]-ans[a-2])+abs(ans[a-2]-ans[0]))<<endl;
    }
    return 0;
}
