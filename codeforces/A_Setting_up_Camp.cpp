#include<bits/stdc++.h>
using namespace std;
int main(){
int t; cin>>t;
while(t--){
    int a,b,c,k=0;
    int temp=0;
    cin>>a>>b>>c;
    int sum=a;
    if(b%3!=0) k=3-b%3;
    if(k==0) sum+=b/3;
    if(k!=0){
        sum+=(b+k)/3;
        c-=k;
    }
    if(c<0){
        temp=1;
        cout<<-1<<endl;
    }
    else{
        if(c%3!=0)
        sum++;
        sum+=c/3;
        cout<<sum<<endl;
    }
}
return 0;
}
