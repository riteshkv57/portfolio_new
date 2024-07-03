#include<bits/stdc++.h>
using namespace std;
int main(){
int t; cin>>t;
while(t--){
    int a,b,c;
    cin>>a>>b>>c;
    vector<int> ans1,ans2;
    for(int i=0;i<a;i++){
        int x; cin>>x;
        ans1.push_back(x);
    }
    for(int i=0;i<b;i++){
        int x; cin>>x;
        ans2.push_back(x);
    }
    int count1=0;
    for(int i=0;i<a;i++){
        for(int j=0;j<b;j++){
        if(ans1[i]+ans2[j]<=c)
        count1++;
    }
    }
    
    cout<<count1<<endl;
}
return 0;
}
