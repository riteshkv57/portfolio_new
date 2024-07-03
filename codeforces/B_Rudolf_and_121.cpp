#include<bits/stdc++.h> 
using namespace std; 
#define ll long long 
 
#define pb push_back 
#define f(i,a,n) for(long long int i=a;i<n;i++) 
 
#define w(t) int t; cin>>t; f(case_num,1,t+1) 
 
int main() 
{ 
     w(t) 
     { 
         || n,m,k; 
        cin>>n; 
        v|| v; 
        f(i,0,n) 
        { 
            ll x; 
            cin>>x; 
            v.pb(x); 
        } 
        f(i,1,n-1) 
        { 
            if(v[i-1]<=v[i+1]&&v[i]>=2*v[i-1]) 
            { 
                v[i+1]-=v[i-1]; 
                v[i]-=2*v[i-1]; 
                 v[i-1]=0; 
            } 
        } 
        if(count(all(v),0)!=n) 
        { 
             cout<<"NO"<<endl; 
        } 
        else   
        { 
             cout<<"YES"<<endl; 
        } 
     } 
}