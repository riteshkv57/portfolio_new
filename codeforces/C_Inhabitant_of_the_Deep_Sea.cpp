#include<bits/stdc++.h>
using namespace std;

int solve(int n,long long k,vector<int>& a){
    long long temp=2LL*k;
    int firsink=0,lassink=0;

    for(int i=0;i<n && temp>0;++i){
        int temp1=min(a[i],(int)(temp/2));
        firsink+=temp1;
        temp-=temp1*2;
    }
    if(temp>0)
    lassink = min((int)(temp/2),a[n-1]);

    return firsink+lassink;
}


int main(){
int t; cin>>t;
while(t--){
   int n;
   long long kt;
   cin>>n>>kt;
   vector<int> arr(n);

   for(int i=0;i<n;++i){
    cin>>arr[i];
   }
   cout<<solve(n,kt,arr)<<endl;
}
return 0;
}
