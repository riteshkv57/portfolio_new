#include<bits/stdc++.h>
using namespace std;
int main(){
    int t; cin>>t;
    while(t--){
        int n,a,b;
        cin>>n>>a>>b;
        if(2*a>=b){
            int sum=(n/2)*b+(n%2)*a;
            cout<<sum<<endl;
        }
        else{
            int sum=n*a;
            cout<<sum<<endl;
        }
    }
    return 0;
}
