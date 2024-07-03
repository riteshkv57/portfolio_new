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
        if(a==1)
        cout<<1<<endl;
        else if(a%2==0){
        int k=ans[a/2-1];
        int count=0;
            for(int i=a/2;i<a;i++){
                if(ans[i]==k) count++;
            }
            cout<<count+1<<endl;
        }
        else{
        int k=ans[a/2];
        int count=0;
            for(int i=a/2+1;i<a;i++){
                if(ans[i]==k) count++;
            }
            cout<<count+1<<endl;
        }
    }
    return 0;
}
