#include<bits/stdc++.h>
using namespace std;
int main(){
int t; cin>>t;
while(t--){
    int l,n,m; cin>>l>>n>>m;
    string s; cin>>s;
    vector<int> ans;
    for(int i=0;i<l;i++){
        int x; cin>>x;
        ans.push_back(x);
    }
    int fav=ans[n-1];
    sort(ans.begin(),ans.end());
    reverse(ans.begin(),ans.end());
    if(m==l) cout<<"YES"<<endl;
    else if(ans[m]<fav && m<l) cout<<"YES"<<endl;
    else if(ans[m]==fav  && m<l) cout<<"MAYBE"<<endl;
    else if(ans[m]>fav && m<l) cout<<"NO"<<endl;
}
}