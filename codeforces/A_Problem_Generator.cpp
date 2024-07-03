#include<bits/stdc++.h>
using namespace std;
int main(){
int t; cin>>t;
while(t--){
    int n,m; cin>>n>>m;
    string s; cin>>s;
    map<char,int> m1;
    for(int i=0;i<n;i++){
        m1[s[i]]++;
    }
    int k=m1.size();
    int count=0;
    count+=(7-k)*m;
    for(auto &i:m1){
        if(i.second<m) count+=(m-i.second);
    }
    cout<<count<<endl;
}
}
